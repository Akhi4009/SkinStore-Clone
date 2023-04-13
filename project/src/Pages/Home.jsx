import React from 'react'
import Carsaul from '../component/Carsaul/Carsaul'
import Banner1 from '../component/banner/Banner1'
import Banner2 from '../component/banner/Banner2'
import ShopByCategary from '../Home/ShopByCategary'
import BlogAndBrand from '../Home/BlogAndBrand'
import Footer from '../component/Footer/Footer'
const Home = () => {
  return (
    <>
    <Banner1/>
    <Banner2/>
    <Carsaul/>
    <ShopByCategary/>
    <BlogAndBrand/>
   <hr />
    <Footer/>
    </>
  )
}

export default Home