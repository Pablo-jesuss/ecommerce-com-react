import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    // fetch cart item from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItems(storedCartItems);
  }, []);
  return <div>CartPage</div>;
};

export default CartPage;
