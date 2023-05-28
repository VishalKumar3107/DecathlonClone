import React from 'react'
import "../allCss/RowProducts.css"

function RowProducts({products, type}) {
  return (
    <div className='RowProducts'>
        <p className='RowProductstitle'>{type} <span style={{fontWeight:'bold'}}>NEAR YOU</span></p>
        <div className='RowProductscontainer'>
            {products.map((item)=>(
                <div key={item.id} className='RowProductscontainer-product'>
                <div className='container-product-image'>
                    <img className='products-img' src={item.image} alt=''/>
                </div>
                <div className='container-product-text'>
                    <p className="product-name">{item.name}</p>
                    <p className="product-description">decathlon clone product</p>
                    <p className="product-price"><button className='btn'>₹ {item.price}</button></p>
                </div>
                {/* <button className='arrowbtn'>{type}</button> */}
            </div>
            ))}
        </div>
    </div>
  )
}

export default RowProducts