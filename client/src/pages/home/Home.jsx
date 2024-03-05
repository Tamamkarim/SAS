import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import Navbar from "../../components/navbar/Navbar";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Selaa kiinteistötyypin mukaan</h1>
       
        <h1 className="homeTitle">Vieraiden rakastamia koteja</h1>
        <FeaturedProperties/>
       
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
