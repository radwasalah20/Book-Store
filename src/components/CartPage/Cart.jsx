import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";
import { BsX } from "react-icons/bs";
import { IoBag } from "react-icons/io5";
import axios from "axios";
import Cookies from "js-cookie";

function Cart() {
  const cart = useContext(CartContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://api.codingarabic.online/api/cart`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
       
      }).then((response)=> {
        setCartItems(response.data.data)
      })
    } catch (error) {
      console.error("erroor is", error)

    }
  };


  useEffect(() => {
    getAllProducts()
  }, [])







  function deleteItem(item){

    
  }




  return (
    <div className="cartpage">
      <div className="container ">
        <div className="title text-center ">
          <IoBag
            className="bagIcon fs-2 my-2"
            style={{ color: "var(--blue)" }}
          />
          <h1>My Bag</h1>
        </div>
        <div className="row">
          <div className="col-12 table-responsive">
            {cart.cartItems.length ? (
              <table className="table table-striped  mt-5 ">
                <thead>
                  <tr>
                    <th>Book Id</th>  
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cartItems.map((item) => {
                    // const price = parseFloat(item.price) || 0;
                    // const qty = parseInt(item.qty) || 0;
                    // const total = price * qty;
                    return (
                      <tr key={item.bookId}>
                        <td>{item.bookId}</td>
                        <td>{item.price}</td>
                        <td>
                          <Link
                          // decrementQty(item.id)
                            onClick={() => (console.log(item.bookId))}
                            className="qtyBtn "
                          >
                            -
                          </Link>
                          {item.qty}
                          <Link
                          // incrementQty(item.id)
                            onClick={() => console.log(item.bookId)}
                            className="qtyBtn "
                          >
                            +
                          </Link>
                        </td>
                        {/* {total} */}
                        <td>  $</td>
                        <td>
                          <BsX 
                            className="deleteBtn"
                            onClick={() => {
                              deleteItem(item.bookId);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h2 className="emptyText text-center mt-5"> Bag Is Empty </h2>
            )}
          </div>
        </div>
        {cartItems.length > 0 && (
          <div className="text-center mt-5" style={{ color: "var(--blue)" }}>
            {/* ${calculaeTotal().toFixed(2)} */}
            <h3>Total amount : 0</h3>
            <Link className="text-center">Go to Checkout</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
