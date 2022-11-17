"""create user table

Revision ID: c6ddfdefeba8
Revises: 
Create Date: 2022-11-04 13:33:19.661778

"""
import sqlalchemy as sa
from alembic import op
from server.core.models import UserType
from sqlalchemy.sql import func

# revision identifiers, used by Alembic.
revision = "c6ddfdefeba8"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("username", sa.String(), nullable=False),
        sa.Column("account_type", sa.Enum(UserType), default=UserType.USER),
        sa.Column("phone_number", sa.String(), unique=True, index=True, nullable=False),
        sa.Column("email", sa.String, unique=True, nullable=False),
        sa.Column("password", sa.String(), nullable=False),
        sa.Column("first_name", sa.String()),
        sa.Column("last_name", sa.String()),
        sa.Column("profile_img_url", sa.String()),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=func.now()),
        sa.Column("modified_at", sa.DateTime(timezone=True), onupdate=func.now()),
    )
    op.create_table(
        "addresses",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), sa.ForeignKey("users.id")),
        sa.Column("street_line_1", sa.String()),
        sa.Column("street_line_2", sa.String()),
        sa.Column("postal_code", sa.String()),
        sa.Column("district", sa.String()),
        sa.Column("city", sa.String()),
        sa.Column("region", sa.String()),
        sa.Column("country", sa.String()),
        sa.Column("longitude", sa.String()),
        sa.Column("latitude", sa.String()),
    )
    op.create_foreign_key(
        "address_user_fk",
        source_table="addresses",
        referent_table="users",
        local_cols=["user_id"],
        remote_cols=["id"],
        onupdate="CASCADE",
        ondelete="CASCADE",
    )


def downgrade() -> None:
    op.drop_constraint("address_user_fk", table_name="addresses")
    op.drop_table("addresses")
    op.drop_table("users")
    sa.Enum("ADMIN", "USER", name="usertype").drop(op.get_bind())
