from datetime import datetime
from pydantic import BaseModel


# ── Revenue ──────────────────────────────────────────────
class RevenueRecordOut(BaseModel):
    id: int
    month: str
    revenue: float
    orders: int
    users: int
    created_at: datetime

    model_config = {"from_attributes": True}


# ── Traffic sources ───────────────────────────────────────
class TrafficSourceOut(BaseModel):
    id: int
    label: str
    value: float
    color: str

    model_config = {"from_attributes": True}


# ── Page stats ────────────────────────────────────────────
class PageStatOut(BaseModel):
    id: int
    path: str
    sessions: int
    pct: float
    color: str

    model_config = {"from_attributes": True}


# ── Activity ──────────────────────────────────────────────
class ActivityEventOut(BaseModel):
    id: int
    icon: str
    bg: str
    highlight: str
    text: str
    created_at: datetime

    model_config = {"from_attributes": True}


# ── Aggregated KPI response ───────────────────────────────
class KPISummary(BaseModel):
    total_revenue: float
    total_orders: int
    active_users: int
    revenue_change_pct: float
    users_change_pct: float
