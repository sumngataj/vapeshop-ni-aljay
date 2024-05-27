import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../Products";
import { CartItem } from "./Cart-item";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from '../../components'
import { FaArrowLeft } from "react-icons/fa";
import { FcEmptyTrash } from "react-icons/fc";

export default function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
        <Navbar />
    <div className="max-w-[1200px] mx-auto px-4 pt-5">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Your Cart Items</h1>
      </div>
      <div className="pt-4">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-right"> Subtotal: ₱{totalAmount}.00 </p>
            <div className="flex justify-between">
                <div className="flex items-center">
                <FaArrowLeft className="mr-2" />
                <button onClick={() => navigate("/shop")}>  Continue Shopping </button>
                </div>
          
          <button className="bg-[#FFBF00] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            
            {" "}
            Checkout{" "}
          </button>
          </div>
        </div>
      ) : (
       <h1 className="flex items-center text-lg">  <FcEmptyTrash /> Cart is EMPTY.</h1>
      )}
    
    </div>
      <Footer />
    </div>
  );
};
