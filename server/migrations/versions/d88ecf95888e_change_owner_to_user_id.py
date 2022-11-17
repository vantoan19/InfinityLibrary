"""change owner to user_id

Revision ID: d88ecf95888e
Revises: bc9631d43b5a
Create Date: 2022-11-16 23:04:24.655576

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "d88ecf95888e"
down_revision = "bc9631d43b5a"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.drop_column("books", "owner")
    op.add_column("books", sa.Column("user_id", sa.Integer(), sa.ForeignKey("users.id")))

    op.create_foreign_key(
        "book_user_fk",
        source_table="books",
        referent_table="users",
        local_cols=["user_id"],
        remote_cols=["id"],
        onupdate="CASCADE",
        ondelete="CASCADE",
    )
    pass


def downgrade() -> None:
    op.drop_constraint("book_user_fk", table_name="books")
    op.drop_column("books", "user_id")
    op.add_column("books", sa.Column("owner", sa.Integer(), sa.ForeignKey("users.id")))
    pass
