import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Destinations from "../components/Destinations";

const Home = () => {
    return (
        <div>
            <Navbar />

            <main>
                <Hero />
                <Search />
                <Destinations />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
