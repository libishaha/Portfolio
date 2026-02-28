from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    DATABASE_URL: str = "mysql+pymysql://root:password@localhost:3306/portfolio"
    ALLOWED_ORIGINS: str = "http://localhost:5173"

    @property
    def origins_list(self) -> List[str]:
        return [o.strip() for o in self.ALLOWED_ORIGINS.split(",")]

    class Config:
        env_file = ".env"


settings = Settings()
