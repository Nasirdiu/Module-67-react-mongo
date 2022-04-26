import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storeCard = getStoredCart();
    const saveCart = [];
    const keys = Object.keys(storeCard);
    fetch(`https://fathomless-harbor-88203.herokuapp.com/productByKeys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storeCard) {
          const addedProduct = products.find((products) => products._id === id);
          if (addedProduct) {
            const quentity = storeCard[id];
            addedProduct.quantity = quentity;
            saveCart.push(addedProduct);
          }
          setCart(saveCart);
        }
      });
  }, []);
  return [cart, setCart];
};
export default useCart;
