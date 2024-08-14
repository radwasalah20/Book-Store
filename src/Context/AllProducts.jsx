import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Books = createContext();

export default function AllProductsProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`https://api.codingarabic.online/api/books`).then((res) => {
      
      setBooks(res.data.data);
    });
  }, []);
  return <Books.Provider value={{ books }}>{children}</Books.Provider>;
}
