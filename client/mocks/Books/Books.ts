import { Book } from "../../types/Book"
import placeholder from "../../assets/placeholder.png"
import book1 from "./book1.jpg"
import book2 from "./book2.jpg"
import book3 from "./book3.jpg"
import book4 from "./book4.jpg"
const Books: Book[] = [
  {
    title: "Book1",
    image_covers: [book1],
    price: 20,
    price_currency: "$",
  },
  {
    title: "Book2",
    image_covers: [book2],
    price: 30,
    price_currency: "$",
  },
  {
    title: "Book3",
    image_covers: [book3],
    price: 10,
    price_currency: "$",
  },
  {
    title: "Book4",
    image_covers: [book4],
    price: 120,
    price_currency: "$",
  },
]
export default Books
