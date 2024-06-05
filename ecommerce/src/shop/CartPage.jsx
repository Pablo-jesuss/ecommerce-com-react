import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    // fetch cart item from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItems(storedCartItems);
  }, []);

  // calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setcartItems([...cartItems]);

    // update local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItems([...cartItems]);

      // update local storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  // handle item remove
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    // update new cart
    setcartItems(updatedCart);

    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return <div>CartPage</div>;
};

export default CartPage;
