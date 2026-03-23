from fastapi import APIRouter, Depends
from sqlalchemy import select, func, desc
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_db
from app.models.models import RevenueRecord, TrafficSource, PageStat, ActivityEvent
from app.schemas.schemas import (
    RevenueRecordOut,
    TrafficSourceOut,
    PageStatOut,
    ActivityEventOut,
    KPISummary,
)

router = APIRouter(prefix="/dashboard", tags=["dashboard"])


@router.get("/kpis", response_model=KPISummary)
async def get_kpis(db: AsyncSession = Depends(get_db)):
    """Aggregate KPIs for the summary cards."""
    result = await db.execute(
        select(
            func.sum(RevenueRecord.revenue).label("total_revenue"),
            func.sum(RevenueRecord.orders).label("total_orders"),
            func.max(RevenueRecord.users).label("active_users"),
        )
    )
    row = result.one()

    # Simple change calc: compare last 2 months
    recent = await db.execute(
        select(RevenueRecord).order_by(desc(RevenueRecord.month)).limit(2)
    )
    records = recent.scalars().all()
    revenue_change = 0.0
    users_change = 0.0
    if len(records) == 2:
        curr, prev = records[0], records[1]
        revenue_change = round((curr.revenue - prev.revenue) / prev.revenue * 100, 1)
        users_change = round((curr.users - prev.users) / prev.users * 100, 1)

    return KPISummary(
        total_revenue=row.total_revenue or 0,
        total_orders=row.total_orders or 0,
        active_users=row.active_users or 0,
        revenue_change_pct=revenue_change,
        users_change_pct=users_change,
    )


@router.get("/revenue", response_model=list[RevenueRecordOut])
async def get_revenue(db: AsyncSession = Depends(get_db)):
    """Monthly revenue time series."""
    result = await db.execute(
        select(RevenueRecord).order_by(RevenueRecord.month)
    )
    return result.scalars().all()


@router.get("/traffic", response_model=list[TrafficSourceOut])
async def get_traffic_sources(db: AsyncSession = Depends(get_db)):
    """Traffic source breakdown."""
    result = await db.execute(
        select(TrafficSource).order_by(desc(TrafficSource.value))
    )
    return result.scalars().all()


@router.get("/pages", response_model=list[PageStatOut])
async def get_top_pages(limit: int = 5, db: AsyncSession = Depends(get_db)):
    """Top pages by session count."""
    result = await db.execute(
        select(PageStat).order_by(desc(PageStat.sessions)).limit(limit)
    )
    return result.scalars().all()


@router.get("/activity", response_model=list[ActivityEventOut])
async def get_activity(limit: int = 10, db: AsyncSession = Depends(get_db)):
    """Recent activity events feed."""
    result = await db.execute(
        select(ActivityEvent).order_by(desc(ActivityEvent.created_at)).limit(limit)
    )
    return result.scalars().all()
