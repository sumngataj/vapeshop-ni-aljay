import { Navbar, HeroSection, Footer, Newsletter, Cards, Header } from "../components/";


export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Header />
            <Newsletter />
            <Cards />
            <Footer />
        </div>
    );
}