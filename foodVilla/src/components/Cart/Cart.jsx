import React from "react";
import { ItemList } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveCart = () => {
    dispatch(removeItem());
  };

  return (
    <div className="text-center m-4 p-4 h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Cart Items</h1>
      <div className="w-8/12 m-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <ItemList items={cartItems} />

        {cartItems.length !== 0 && (
          <>
            <button
              className="px-4 py-2 mt-4 mx-6 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button
              className="px-4 py-2 mt-4 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none"
              onClick={handleRemoveCart}
            >
              Remove Item
            </button>
          </>
        )}

        {cartItems.length === 0 && (
          <p className="text-gray-500 mt-4">Your cart is currently empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
