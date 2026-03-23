from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "NovaDash API"
    app_version: str = "1.0.0"
    debug: bool = False

    database_url: str = "postgresql+asyncpg://user:password@localhost:5432/novadash"
    api_secret_key: str = "change-me-in-production"

    # CORS — allow Next.js dev server by default
    allowed_origins: list[str] = ["http://localhost:3000"]


settings = Settings()
