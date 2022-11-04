"""create user table

Revision ID: c6ddfdefeba8
Revises: 
Create Date: 2022-11-04 13:33:19.661778

"""
import sqlalchemy as sa
from alembic import op
from server.core.models import UserType, VoteType

# revision identifiers, used by Alembic.
revision = "c6ddfdefeba8"
down_revision = None
branch_labels = None
depends_on = None

# vote_id = Column(Integer, primary_key=True)
# vote_type = Column(Enum(VoteType), nullable=False)
# from_user = Column(Integer, ForeignKey("users.user_id"))
# to_user = Column(Integer, ForeignKey("users.user_id"))
# points = Column(Integer, nullable=False)
# message = Column(String)


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("user_id", sa.Integer(), primary_key=True),
        sa.Column("account_type", sa.Enum(UserType), default=UserType.USER),
        sa.Column("phone_number", sa.String(), unique=True, index=True, nullable=False),
        sa.Column("email", sa.String, unique=True, nullable=False),
        sa.Column("first_name", sa.String()),
        sa.Column("last_name", sa.String()),
        sa.Column("profile_img_url", sa.String()),
        sa.Column("created_at", sa.DateTime()),
        sa.Column("modified_at", sa.DateTime()),
    )
    op.create_table(
        "addresses",
        sa.Column("address_id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), sa.ForeignKey("users.user_id")),
        sa.Column("street_line_1", sa.String()),
        sa.Column("street_line_2", sa.String()),
        sa.Column("postal_code", sa.String()),
        sa.Column("district", sa.String()),
        sa.Column("city", sa.String()),
        sa.Column("region", sa.String()),
        sa.Column("longitude", sa.String()),
        sa.Column("latitude", sa.String()),
    )
    op.create_foreign_key(
        "address_user_fk",
        source_table="addresses",
        referent_table="users",
        local_cols=["user_id"],
        remote_cols=["user_id"],
        onupdate="CASCADE",
        ondelete="CASCADE",
    )


def downgrade() -> None:
    op.drop_constraint("address_user_fk", table_name="users")
    op.drop_table("addresses")
    op.drop_table("users")
