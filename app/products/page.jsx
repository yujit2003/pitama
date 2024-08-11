import React from 'react'
import MainContent from '../../components/Products/MainContent'
import Header from '../../components/NavBar';
import Dots from "../../components/Home/Dots";
import ProductDetails from "../../components/Products/ProductDetails";
import Footer from "../../components/Home/Footer"
import Dev from "../../components/Home/Dev";

const page = () => {
  return (
    <div>
      <Header page={'products'}/>
      <MainContent />
      <br />
      <br />
      <br />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
      <ProductDetails />
      <Footer />
      <Dev />
    </div>
  )
}

export default page
