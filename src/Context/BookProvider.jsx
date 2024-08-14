import React, { createContext, useEffect, useState } from 'react'


const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filter, srtFilter] = useState('')



  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://api.codingarabic.online/api/books?category=unde&minPrice=500&maxPrice=1000&sort=high");
        setBooks(response.data);
        setFilteredBooks(response.data);

      } catch (error) {
        console.error('error fetching books ', error)

      }
    }
    fetchBooks();
  }, [])




  // useEffect(() => {
  //   setFilteredBooks(
  //     books.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()))
  //   )
  // }, [filter, books])


  return (
    <div>

    </div>
  )
}

export default BookProvider
