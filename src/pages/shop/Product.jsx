import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="w-96 rounded overflow-hidden shadow-lg flex flex-col bg-white">
      <div className="aspect-w-16 aspect-h-9">
        <img src={productImage} alt={productName} className="object-cover w-full h-56" />
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{productName}</div>
        <p className="text-gray-700 text-base">₱{price}.00</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => addToCart(id)}
          className="bg-[#FFBF00] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart ({cartItemCount})
        </button>
      </div>
    </div>
  );
};
