import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Destinations from "../components/Destinations";
import Recommended from "../components/Recommended";

const Home = () => {
    return (
        <div>
            <Navbar />

            <main>
                <Hero />
                <Search />
                <Destinations />
                <Recommended />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
