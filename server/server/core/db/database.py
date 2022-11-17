import os

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

REDIS_HOST = os.environ.get("REDIS_HOST")
REDIS_PORT = os.environ.get("REDIS_PORT")
PGUSER = os.environ.get("PGUSER")
POSTGRES_PASSWORD = os.environ.get("POSTGRES_PASSWORD")
PGDATABASE = os.environ.get("PGDATABASE")
PGHOST = os.environ.get("PGHOST")

SQLALCHEMY_DATABASE_URL = f"postgresql://{PGUSER}:{POSTGRES_PASSWORD}@{PGHOST}/{PGDATABASE}"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, expire_on_commit=False)

Base = declarative_base()
