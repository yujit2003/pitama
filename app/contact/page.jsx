import React from 'react'
import NavBar from "../../components/NavBar"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Home/Footer"
import Dev from "../../components/Home/Dev"

const page = () => {
  return (
    <div>
      <NavBar page='contact'/>
      <div className="box-border md:mt-10 mt-6">
            <div className="wpb_wrapper">
                <div id="padding-10" className="mk-padding-divider hidden sm:block clearfix"></div>
                <div >
                    <div id="text-block-11 " className="mk-text-block text-center mb-0  mx-2 md:mx-[30vw] ">
                        <h1 className="text-4xl font-bold mb-8 text-[#fcaf17] -tracking-tighter">CONTACT US</h1>
                        <h1 className="text-3xl font-pacifico text-red-500 font-bold">It is our Pleasure to serve you</h1>
                        <p className="">Please fill out the form, we will respond within 24 hours.</p>

                    </div>
                <div >
                </div>
                </div>
            </div>
        </div>
        <Contact />
        <Footer />
        <Dev />
    </div>
  )
}

export default page
