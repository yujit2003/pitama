import React from 'react'
import NavBar from '../../components/NavBar'
import MyCart from'../../components/MyCart'
import Footer from '@/components/Home/Footer'
import Dev from '@/components/Home/Dev'

const page = () => {
  return (
    <div>
      <NavBar />
      <MyCart />
      <Footer />
      <Dev />
    </div>
  )
}

export default page
