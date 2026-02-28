from pydantic import BaseModel, EmailStr, ConfigDict
from datetime import datetime
from typing import Optional


# ─── Projects ─────────────────────────────────────────────────────────────────

class ProjectBase(BaseModel):
    title: str
    description: str
    image_url: Optional[str] = None
    github_link: Optional[str] = None
    live_link: Optional[str] = None


class ProjectCreate(ProjectBase):
    pass


class ProjectResponse(ProjectBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: datetime


# ─── Contact Messages ──────────────────────────────────────────────────────────

class ContactMessageBase(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactMessageCreate(ContactMessageBase):
    pass


class ContactMessageResponse(ContactMessageBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: datetime
