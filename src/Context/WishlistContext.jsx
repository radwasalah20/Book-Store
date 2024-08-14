import React, { createContext, useState  } from 'react'
import Swal from 'sweetalert2';

export const WishlistContext = createContext()

export function WishlistContextProvider({children}) {
  const [wishListItems, setWishListItems] = useState(()=>{
    try{
      const savedWishList = localStorage.getItem('wishListItems');
      return savedWishList? JSON.parse(savedWishList): [];

    }catch (error){
      console.error("Failed to parse wishlist items from local storage" , error);
      return [];
    }
  });

  

  const addToWishlist = (book) => {
    let checkItem = wishListItems.find(item => item.id === book.id);
    if (checkItem) {
      Swal.fire("Book already in the Wishlist!");
      return;
    }



    const newWishlistItem = { ...book, price: parseFloat(book.price) };
    const newWishlistItems = [...wishListItems, newWishlistItem];

    setWishListItems(newWishlistItems);
    localStorage.setItem('wishListItems', JSON.stringify(newWishlistItems));
  };

  const removeFromWishlist = (id) => {
    const updatedWishlistItems = wishListItems.filter(item => item.id !== id);
    setWishListItems(updatedWishlistItems);
    localStorage.setItem('wishListItems', JSON.stringify(updatedWishlistItems));
  };


  return (
    <div>
      <WishlistContext.Provider value = {{wishListItems ,addToWishlist , removeFromWishlist }}>
        {children}
      </WishlistContext.Provider>
      
    </div>
  )
}

export default WishlistContextProvider
