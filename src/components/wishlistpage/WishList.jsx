

import React, { useContext } from 'react';
import { WishlistContext } from '../../Context/WishlistContext';
import { CartContext } from '../../Context/CartContext';

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext)
  const { addToCart } = useContext(CartContext);
  

  return (
    <div className="wishlist-page">
      <h2 className="text-center mt-2">My Wishlist</h2>
      {wishlistItems && wishlistItems.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Add to Cart</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => addToCart(item)}>Add to Cart</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => removeFromWishlist(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="text-center">Your Wishlist is empty.</h3>
      )}
    </div>
  );
}

export default WishlistPage;

