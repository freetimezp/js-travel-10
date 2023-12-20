import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />

            <main>
                <Hero />
                <Search />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
