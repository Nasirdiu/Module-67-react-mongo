import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { product, handleRemoveProduct } = props;

  const { name, img, quentity, shipping, price } = props.product;
  return (
    <div className="review">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p className="product-name " title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p className="price-orance">
            Price:<span>${price}</span>
          </p>
          <p>
            Quantity:<span>{quentity}</span>
          </p>
          <p>
            Shipping:<span>${shipping}</span>
          </p>
        </div>
        <div className="delete-container">
          <button
            onClick={() => handleRemoveProduct(product)}
            className="delete-btn"
          >
            <FontAwesomeIcon
              className="delete"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
