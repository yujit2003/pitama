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
      <Header page={'products'} />
      <div className="box-border">
        <div className="wpb_wrapper">
          <div id="padding-10" className="mk-padding-divider hidden sm:block clearfix"></div>
          <div >
            <div id="text-block-11 " className="mk-text-block text-center mb-0 py-10  mx-2 md:mx-[30vw] ">
              <h1 className="text-4xl font-bold mb-8 text-[#fcaf17] -tracking-tighter">Our Products.</h1>

            </div>
            <div >
            </div>
          </div>
        </div>
      </div>
      <ProductDetails />
      <Footer />
      <Dev />
    </div>
  )
}

export default page
