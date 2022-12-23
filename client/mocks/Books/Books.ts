import { Book, BookDetails } from "../../types/Book"
import placeholder from "../../assets/placeholder.png"
import book1 from "./book1.jpg"
import book2 from "./book2.jpg"
import book3 from "./book3.jpg"
import book4 from "./book4.jpg"
export const Books: Book[] = [
  {
    id: -1,
    title: "Book1",
    image_covers: [book1],
    price: 20,

    posted: "1h ago",
    user_id: 1,
  },
  {
    id: -2,
    title: "Book2",
    image_covers: [
      {
        uri: "https://images.unsplash.com/photo-1577627444534-b38e16c9d796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      },
    ],
    price: 30,

    posted: "1h ago",
    user_id: 1,
  },
  {
    id: -3,
    title: "Book3",
    image_covers: [book3],
    price: 10,

    posted: "1h ago",
    user_id: 1,
  },
  {
    id: -4,
    title: "Book4",
    image_covers: [book4],
    price: 120,

    posted: "1h ago",
    user_id: 1,
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
) => findAndConstructBook(Books.find((e) => e.id === id))
