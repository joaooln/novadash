"""
Run once to populate the database with mock data:
    python seed.py
"""
import asyncio
from app.db.database import AsyncSessionLocal, engine, Base
from app.models.models import RevenueRecord, TrafficSource, PageStat, ActivityEvent


REVENUE = [
    ("2026-01", 38400, 312, 9800),
    ("2026-02", 42100, 340, 10200),
    ("2026-03", 51200, 398, 10850),
    ("2026-04", 48800, 375, 11100),
    ("2026-05", 55300, 421, 11400),
    ("2026-06", 61200, 466, 11900),
    ("2026-07", 58700, 448, 12100),
    ("2026-08", 67400, 512, 12400),
    ("2026-09", 72100, 547, 12600),
    ("2026-10", 68900, 528, 12700),
    ("2026-11", 79300, 601, 12800),
    ("2026-12", 84500, 642, 12849),
]

TRAFFIC = [
    ("Organic",  42, "#c8f53a"),
    ("Paid",     28, "#6c63ff"),
    ("Referral", 18, "#38d9a9"),
    ("Direct",   12, "#ff6b6b"),
]

PAGES = [
    ("/dashboard",  18420, 94, "#c8f53a"),
    ("/pricing",    12300, 63, "#6c63ff"),
    ("/blog/intro",  9840, 50, "#38d9a9"),
    ("/signup",      8210, 42, "#ff6b6b"),
    ("/docs",        6630, 34, "#c8f53a"),
]

ACTIVITY = [
    ("💳", "rgba(200,245,58,0.1)",   "New subscription",     "Pro plan · $49/mo"),
    ("👤", "rgba(108,99,255,0.12)",  "New user registered",  "maria@example.com"),
    ("⚠️", "rgba(255,107,107,0.1)", "Payment failed",       "Retry scheduled in 24h"),
    ("📦", "rgba(56,217,169,0.1)",   "Order #4821",          "shipped via FedEx"),
    ("🚀", "rgba(200,245,58,0.1)",   "New feature deployed", "v2.4.1 is live"),
]


async def seed():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with AsyncSessionLocal() as db:
        db.add_all([RevenueRecord(month=m, revenue=r, orders=o, users=u) for m, r, o, u in REVENUE])
        db.add_all([TrafficSource(label=l, value=v, color=c) for l, v, c in TRAFFIC])
        db.add_all([PageStat(path=p, sessions=s, pct=pct, color=c) for p, s, pct, c in PAGES])
        db.add_all([ActivityEvent(icon=i, bg=b, highlight=h, text=t) for i, b, h, t in ACTIVITY])
        await db.commit()
        print("✅ Database seeded successfully!")


if __name__ == "__main__":
    asyncio.run(seed())
