import React from 'react'
import "../allCss/Homepage.css"
import RowProducts from '../Components/RowProducts'
import allProducts from "../Products.json"
import RowCategory from '../Components/RowCategory'
import Rowsmallproducts from '../Components/Rowsmallproducts'
import Carousel from '../Components/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowsRotate, faCircleCheck, faTruck } from '@fortawesome/free-solid-svg-icons'

function Homepage() {
  return (
    <div>
      <Carousel images={allProducts.headerBanner.images} />
      <div className='homepage-payment'>
          <div className='homepage-payment-option'>
          <FontAwesomeIcon icon={faCircleCheck} />&nbsp; &nbsp; 100% Secure Payments&nbsp; &nbsp; <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className='homepage-payment-option'>
          <FontAwesomeIcon icon={faArrowsRotate} />&nbsp; &nbsp; Easy Returns&nbsp; &nbsp; <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className='homepage-payment-option'>
          <FontAwesomeIcon icon={faTruck} />&nbsp; &nbsp; 60+ Sports Under One Roof&nbsp; &nbsp; <FontAwesomeIcon icon={faArrowRight} />
          </div>
      </div>
      <Rowsmallproducts type="Most Popular Categories" products={allProducts.popularCategories} />
      <Carousel images={allProducts.sportsBanner.images} />
      <RowCategory type="RAIN ESSENTIALS" products={allProducts.RAINEssentials}/>
      <Rowsmallproducts type="Hiking And Trekking Essentials" products={allProducts.HikingAndTrekkingEssentials} />
      <RowCategory type="For The Ones Who Like To Move" products={allProducts.gymProducts}/>
      <RowProducts type="Trending" products={allProducts.trendingNearYou}/>
      <Carousel images={allProducts.trekBanner.images} />
      <RowCategory type="TIME TO JUMP INTO THE POOL" products={allProducts.swimming}/>
      <RowProducts type="Mountain bike" products={allProducts.mountainBikes}/>
      <RowCategory type="Our Best Selling Sports Collection" products={allProducts.trendingSports}/>
      <RowProducts type="Rain Essentials" products={allProducts.rainEssentials}/>

    </div>
  )
}

export default Homepage