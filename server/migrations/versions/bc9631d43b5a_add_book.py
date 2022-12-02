"""add book

Revision ID: bc9631d43b5a
Revises: c6ddfdefeba8
Create Date: 2022-11-16 16:20:13.242101

"""
from alembic import op
import sqlalchemy as sa
from server.core.models import BookStatus

# revision identifiers, used by Alembic.
revision = "bc9631d43b5a"
down_revision = "c6ddfdefeba8"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "books",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("user_id", sa.Integer(), sa.ForeignKey("users.id")),
        sa.Column("title", sa.String(), nullable=False),
        sa.Column("description", sa.String()),
        sa.Column("published_year", sa.Integer(), nullable=False),
        sa.Column("author", sa.String(100), default="Unknown"),
        sa.Column("pages", sa.Integer()),
        sa.Column("price", sa.Integer()),
        sa.Column("status", sa.Enum(BookStatus), default=BookStatus.AVAILABLE),
    )

    op.create_table(
        "categories",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("category", sa.String(50)),
    )

    op.create_table(
        "book_categories",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("book_id", sa.Integer(), sa.ForeignKey("books.id")),
        sa.Column("category_id", sa.Integer(), sa.ForeignKey("categories.id")),
    )

    op.create_foreign_key(
        "book_user_fk",
        source_table="books",
        referent_table="users",
        local_cols=["user_id"],
        remote_cols=["id"],
        onupdate="CASCADE",
        ondelete="CASCADE",
    )

    op.create_foreign_key(
        "book_category_book_fk",
        source_table="book_categories",
        referent_table="books",
        local_cols=["book_id"],
        remote_cols=["id"],
        onupdate="CASCADE",
        ondelete="CASCADE",
    )

    op.create_foreign_key(
        "book_category_category_fk",
        source_table="book_categories",
        referent_table="categories",
        local_cols=["category_id"],
        remote_cols=["id"],
        onupdate="CASCADE",
        ondelete="CASCADE",
    )

    pass


def downgrade() -> None:
    op.drop_constraint("book_user_fk", table_name="books")
    op.drop_constraint("book_category_book_fk", table_name="book_categories")
    op.drop_constraint("book_category_category_fk", table_name="book_categories")
    op.drop_table("book_categories")
    op.drop_table("categories")
    op.drop_table("books")
    sa.Enum("AVAILABLE", "OCCUPIED", "DELETED", name="bookstatus").drop(op.get_bind())
    pass
