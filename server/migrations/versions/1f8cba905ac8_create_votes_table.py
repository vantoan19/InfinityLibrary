"""create votes table

Revision ID: 1f8cba905ac8
Revises: bc9631d43b5a
Create Date: 2022-12-22 19:38:19.051526

"""
from alembic import op
import sqlalchemy as sa
from server.core.models import VoteType


# revision identifiers, used by Alembic.
revision = "1f8cba905ac8"
down_revision = "bc9631d43b5a"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "votes",
        sa.Column("id", sa.Integer(), primary_key=True),
        # sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("vote_type", sa.Enum(VoteType)),
        sa.Column("from_user", sa.Integer(), sa.ForeignKey("users.id")),
        sa.Column("to_user", sa.Integer(), sa.ForeignKey("users.id")),
        sa.Column("points", sa.Integer(), nullable=False),
        sa.Column("message", sa.String()),
    )

    op.create_foreign_key(
        "from_user_fk",
        source_table="votes",
        referent_table="users",
        local_cols=["from_user"],
        remote_cols=["id"],
        onupdate="CASCADE",
        ondelete="CASCADE",
    )

    op.create_foreign_key(
        "to_user_fk",
        source_table="votes",
        referent_table="users",
        local_cols=["to_user"],
        remote_cols=["id"],
        onupdate="CASCADE",
        ondelete="CASCADE",
    )
    pass


def downgrade() -> None:
    op.drop_constraint("from_user_fk", table_name="votes"),
    op.drop_constraint("to_user_fk", table_name="votes"),
    op.drop_table("votes")
    sa.Enum("BOOK_OWNER", "BOOK_RENTER", name="votetype").drop(op.get_bind())
    pass
