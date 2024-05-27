import {Homepage, Contact, Cart, Shop, About} from './pages/'
import '@fontsource/poppins';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";


function App() {

  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
