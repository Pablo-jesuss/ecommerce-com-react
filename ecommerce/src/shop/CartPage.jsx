import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

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

  // cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // order total
  const orderTotal = cartSubtotal;
  return (
    <div>
      <PageHeader title={"Carrinho"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Produtos</th>
                    <th className="cat-price">Preços</th>
                    <th className="cat-quantity">Quantidades</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Editar</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">R$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cart-toprice">
                        R$ {calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* --- cart top ends... --- */}
            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Código do cupom ...."
                  />
                  <input type="submit" value="Aplicar cupom" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Atualizar carrinho" />
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>

              {/* --------- checkot box end ---------- */}

              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calcular Frete</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">Argentina</option>
                          <option value="bd">Brasil</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="uk">Buenos Aires</option>
                          <option value="bd">Rio de Janeiro</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                        <input
                          type="text"
                          name="postalCode"
                          id="postalCode"
                          placeholder="CEP *"
                          className="cart-page-input-text"
                        />
                        <button type="submit">Atualizar endereço</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Produtos do Carrinho</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">
                            Subtotal do Carrinho
                          </span>
                          <p className="pull-right">R$ {cartSubtotal}</p>
                        </li>

                        <li>
                          <span className="pull-left">Envio</span>
                          <p className="pull-right">Frete grátis</p>
                        </li>

                        <li>
                          <span className="pull-left">Total de pedidos</span>
                          <p className="pull-right">
                            R$ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
