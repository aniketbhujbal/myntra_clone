import React from 'react';
import style from './CartItem.module.css';
import { AiFillCloseSquare } from "react-icons/ai";
function CartItem({ product, onIncreaseQty, onDecreaseQty,deleteItem }) {

  return (
    <div className={style.cart_item}>
      <div className={style.cart_div}>
        <img src={product.images[0]} alt={product.title} className={style.Product_image} />
      </div>
      <div className={style.ProductDesc}>
        <h2>{product.title}</h2>
        <p>{product.subtitle}</p>
        <div className={style.quantity}>
          <p><b>Qty: </b></p>
          <button className={style.qtyButton} onClick={() => onDecreaseQty(product)}>-</button>
          <p className={style.qtyValue}>{product.qty}</p>
          <button className={style.qtyButton} onClick={() => onIncreaseQty(product)}>+</button>
        </div>
        <p><b>Rs. {product.discounted_price}</b> <span style={{ textDecorationLine: "line-through" }}>Rs.{product.strike_price}</span> <span>({product.discount})</span></p>
        <p><b>14 days</b> return available</p>
      </div>
          <div className={style.crossIcon}>
            <AiFillCloseSquare style={{ width: "90%", height: "90%",cursor:"pointer" }} onClick={() => deleteItem(product)}/>
          </div>
    </div>
  );
}

export default CartItem;
