from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.core.database import get_db
from app.models.models import ContactMessage
from app.schemas.schemas import ContactMessageCreate, ContactMessageResponse

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("/", response_model=ContactMessageResponse, status_code=201)
def create_message(message: ContactMessageCreate, db: Session = Depends(get_db)):
    db_message = ContactMessage(**message.model_dump())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message


@router.get("/", response_model=List[ContactMessageResponse])
def get_messages(skip: int = 0, limit: int = 50, db: Session = Depends(get_db)):
    messages = db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).offset(skip).limit(limit).all()
    return messages
