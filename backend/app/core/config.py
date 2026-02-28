from pydantic_settings import BaseSettings
from typing import List
from urllib.parse import quote_plus


class Settings(BaseSettings):
    # Option 1: Full URL
    DATABASE_URL: str = ""

    # Option 2: Individual parts (safer for special characters in password)
    MYSQLUSER: str = "root"
    MYSQLPASSWORD: str = ""
    MYSQLHOST: str = "localhost"
    MYSQLPORT: str = "3306"
    MYSQLDATABASE: str = "railway"

    ALLOWED_ORIGINS: str = "http://localhost:5173"

    @property
    def database_url(self) -> str:
        if self.DATABASE_URL:
            url = self.DATABASE_URL
            if url.startswith("mysql://"):
                url = url.replace("mysql://", "mysql+pymysql://", 1)
            return url
        # Build from parts — quote_plus handles special chars like @, #, $
        password = quote_plus(self.MYSQLPASSWORD)
        return f"mysql+pymysql://{self.MYSQLUSER}:{password}@{self.MYSQLHOST}:{self.MYSQLPORT}/{self.MYSQLDATABASE}"

    @property
    def origins_list(self) -> List[str]:
        return [o.strip().rstrip('/') for o in self.ALLOWED_ORIGINS.split(",")]

    class Config:
        env_file = ".env"


settings = Settings()