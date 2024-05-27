import {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {Link} from 'react-router-dom';
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaShop } from "react-icons/fa6";



export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full text-3xl font-bold text-[#FFBF00]">VAPECO.</h1>
            <ul className="hidden md:flex">
                <Link className="p-4" to="/"> Home </Link>
                <Link className="p-4" to="/about">About</Link>
                <Link className="p-4" to="/shop"> Shoppe </Link>
                <Link className="p-4" to="/cart">Cart</Link>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full shadow-md bg-white text-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#FFBF00] m-4">VAPECO.</h1>
                <ul className="flex flex-col">
                    <Link className="p-4 flex items-center" to="/"> <FaHome className="mr-2" /> Home </Link>
                    <Link className="p-4 flex items-center" to="/about"> <FcAbout className="mr-2" /> About</Link>
                    <Link className="p-4 flex items-center" to="/shop"> <FaShop className="mr-2" /> Shoppe </Link>
                    <Link className="p-4 flex items-center" to="/cart"> <FaShoppingCart className="mr-2" /> Cart</Link>
                </ul>
            </ul>
        </div>
    );
}