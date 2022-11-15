import { Book, BookDetails } from "../../types/Book"
import placeholder from "../../assets/placeholder.png"
import book1 from "./book1.jpg"
import book2 from "./book2.jpg"
import book3 from "./book3.jpg"
import book4 from "./book4.jpg"
export const Books: Book[] = [
  {
    book_id: 1,
    title: "Book1",
    image_covers: [book1],
    price: 20,
    price_currency: "$",

    posted: "1h ago",
    user_id: 1,
  },
  {
    book_id: 2,
    title: "Book2",
    image_covers: [book2],
    price: 30,
    price_currency: "$",

    posted: "1h ago",
    user_id: 2,
  },
  {
    book_id: 3,
    title: "Book3",
    image_covers: [book3],
    price: 10,
    price_currency: "$",

    posted: "1h ago",
    user_id: 1,
  },
  {
    book_id: 4,
    title: "Book4",
    image_covers: [book4],
    price: 120,
    price_currency: "$",

    posted: "1h ago",
    user_id: 2,
  },
]

const findAndConstructBook = (
  foundBook: Book | undefined
): BookDetails | undefined => {
  const mockDetailsInfos = {
    description: "asdasda as dasd adasdasdasdadsa",
    bookCondition: "Newly Open",
    location: "Budapest, Hungary",
    views: 120,
  }
  if (!foundBook) return undefined
  return { ...foundBook, ...mockDetailsInfos }
}

export const MockDetailsBook: (id: number) => BookDetails | undefined = (
  id: number
) => findAndConstructBook(Books.find((e) => e.book_id === id))
