from datetime import datetime
from sqlalchemy import String, Float, Integer, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.database import Base


class RevenueRecord(Base):
    __tablename__ = "revenue_records"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    month: Mapped[str] = mapped_column(String(7))      # e.g. "2026-01"
    revenue: Mapped[float] = mapped_column(Float)
    orders: Mapped[int] = mapped_column(Integer)
    users: Mapped[int] = mapped_column(Integer)
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())


class TrafficSource(Base):
    __tablename__ = "traffic_sources"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    label: Mapped[str] = mapped_column(String(50))
    value: Mapped[float] = mapped_column(Float)
    color: Mapped[str] = mapped_column(String(20))
    recorded_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())


class PageStat(Base):
    __tablename__ = "page_stats"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    path: Mapped[str] = mapped_column(String(200))
    sessions: Mapped[int] = mapped_column(Integer)
    pct: Mapped[float] = mapped_column(Float)
    color: Mapped[str] = mapped_column(String(20))
    recorded_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())


class ActivityEvent(Base):
    __tablename__ = "activity_events"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    icon: Mapped[str] = mapped_column(String(10))
    bg: Mapped[str] = mapped_column(String(50))
    highlight: Mapped[str] = mapped_column(String(200))
    text: Mapped[str] = mapped_column(String(500))
    created_at: Mapped[datetime] = mapped_column(DateTime, server_default=func.now())
