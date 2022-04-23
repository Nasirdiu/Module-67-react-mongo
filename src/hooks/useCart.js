import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storeCard = getStoredCart();
    const saveCart = [];
    for (const id in storeCard) {
      const addedProduct = products.find((products) => products._id === id);
      if (addedProduct) {
        const quentity = storeCard[id];
        addedProduct.quantity = quentity;
        saveCart.push(addedProduct);
      }
      setCart(saveCart);
    }
  }, [products]);
  return [cart, setCart];
};
export default useCart;
