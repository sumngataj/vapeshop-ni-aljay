  import { PRODUCTS } from "../../Products";
  import { Product } from "./Product";
  import { Navbar, Footer } from "../../components/"

  export default function Shop() {
    return (
    <div>
        <Navbar />
    <div className="shop bg-[#e2e9ec] min-h-screen">
    <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">AVAILABLE ITEMS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"> {/* Changed grid-cols-4 to grid-cols-3 */}
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex justify-center">
              <Product data={product} />
            </div>
          ))}
        </div>
      </div>
      </div>
     <Footer />
    </div>
    );
  }
