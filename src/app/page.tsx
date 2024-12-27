// import Image from "next/image";
import Footer from "./components/footer";
// import Header from "./components/header";
import Hero from "./components/herosection";
import Livingarea from "./components/livingroom";
import Product from "./components/product";
import RoomInspiration from "./components/rooms";

export default function Home() {
  return (
    <>
   {/* <Header/> */}
    <Hero/>
    <Livingarea/>
    <Product/>
    <RoomInspiration/>
    <Footer/>
    </>
  );
}
