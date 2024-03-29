import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart] = useCart();

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setProducts(rest);
    removeFromDb(product._id);
  };
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/shipment">
            <button>CheekOut</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
