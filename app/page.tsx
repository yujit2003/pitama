import Image from "next/image";
import NavBar from "../components/NavBar"
import HomeScroll from "../components/Home/HomeScroll"
import HomeContent from "../components/Home/HomeContent"
import Dots from "../components/Home/Dots"
import Products from "../components/Home/Products"
import Footer from "../components/Home/Footer"
import Dev from "../components/Home/Dev"

export default function Home() {
  return (
    <>
    <NavBar page='home'/>
    <HomeScroll />
    <HomeContent />
    <br />
    <br />
    <br />
    <Dots />
    <Dots />
    <Dots />
    <Dots />
    <br />
    <br />
    <br />
    <Products />
    <Footer />
    <Dev />
    </>
  );
}
