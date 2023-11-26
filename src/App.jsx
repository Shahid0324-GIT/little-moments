import Hero from "./Hero";
import Navbar from "./Navbar";
import Features from "./Features";
import Reviews from "./Reviews";
import Activities from "./Activities";
import Footer from "./Footer";

const App = () => (
  <>
    <Navbar />
    <header>
      <Hero />
    </header>
    <Features />
    <Reviews />
    <Activities />
    <div className="offers">
      <p className="offers__head">like never before</p>
      <p className="offers__btn">no extra cost</p>
      <p className="offers__head">features packed</p>
      <p className="offers__btn">exclusive offers and deals</p>
    </div>
    <Footer />
  </>
);

export default App;
