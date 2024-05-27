  import { useContext } from "react";
  import { ShopContext } from "../../context/shop-context";

  export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
      useContext(ShopContext);

    return (
       <div className="flex flex-col md:flex-row border max-w-[1200px] mx-auto border-gray-400 py-4">
      <div className="flex-shrink-0 border-r border-gray-400">
        <img src={productImage} alt={productName} className="w-32 h-32 object-cover" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h2 className="text-lg font-bold">{productName}</h2>
        <div className="mt-4 flex items-center">
          <span className="mr-2 text-gray-600">Quantity:</span>
          <div className="flex items-center">
            <button className="bg-gray-200 rounded-l-lg px-2 py-1" onClick={() => removeFromCart(id)}>-</button>
            <input
              type="number"
              min="1"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              className="mx-2 text-gray-600"
            />
            <button className="bg-gray-200 rounded-r-lg px-2 py-1" onClick={() => addToCart(id)}>+</button>
          </div>
          <span className="ml-auto font-bold px-4">₱{price}.00</span>
        </div>
      </div>
    </div>
    );
  };
