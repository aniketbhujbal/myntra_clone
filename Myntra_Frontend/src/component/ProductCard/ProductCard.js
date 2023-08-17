import React, { useEffect } from 'react'
import style from './productCard.module.css'

const ProductCard=({product,onClick})=> {

  useEffect(() => {
    console.log("productcard")
  }, [])

  // const handleClick = () => {
  //   console.log("www")
  //   if (onClick) {
  //     onClick(product);
  //   }
  // };
  return (
    <div className={style.product} onClick={onClick}>
        <div className={style.imageDiv}>
          <img src={product.images[0]} alt={product.title} style={{width:"200px",height:"280px"}}></img>
        </div>
          <div className={style.rating}>
          <p><b> {product.rating} | {product.rating_count}</b></p>
          </div>
        <div className={style.productInfo}>
          <h5>{product.title}</h5>
          <p>{product.subtitle}</p>
          <p><b>Rs. {product.discounted_price}</b> <span style={{ textDecorationLine:"line-through"}}>Rs.{product.strike_price}</span> <span>({product.discount})</span></p>
     
        </div>
    </div>
  )
}

export default ProductCard