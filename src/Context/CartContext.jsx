import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";


import React from "react";
import axios from "axios";
export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const token = Cookies.get('token')
  const [cartItems, setCartItems] = useState({});
  const [book, setBook] = useState({})
  const postCartData = async (books) => {
    books.map((book) => {
      setBook(book)
      const token = Cookies.get('token');
      const bookId = book.id;
    })
  }
  //   test()
  // useEffect(()=> {
  //   } , [])

  function test({ book }) {
    axios.post(`https://api.codingarabic.online/api/cart`, { bookId: bookId }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    }).then((res) => {
      setCartItems(res.data.data.data)

    })
  }


  const addToCart = (book) => {
    const newCartItems = [...cartItems, book]; /*it creates new array by combining the current cartItems with the new book */
    setCartItems(newCartItems);
    postCartData(newCartItems, book); /* sends the updated cart data to the server */
  }



  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}


export default CartContextProvider;
