import React, { useEffect, useState } from 'react'
import style from './ProductProfile.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { BiSolidShoppingBag, BsBagCheck } from "react-icons/bs";
import { IoPersonOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../../ReduxToolkit/Cart/cartSlice'
import { addToWishList } from '../../Redux/WishList/action';
function ProductProfile() {
    const [type, setType] = useState('')
    const [item, setItem] = useState()
    const location = useLocation();
    const navigate = useNavigate()
    const [isButtonAddToBagDisabled, setButtonAddToBagDisabled] = useState(false);

    const [isButtonWhishListDisabled, setButtonWishListDisabled] = useState(false);
    
    const WishListItems = useSelector((store) => store.WishList.WishListItems)
    
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(location.state)
        setType(location.state.type)
        setItem(location.state.item)
    }, []);

    const AddToCart=()=>{
        dispatch(addToCart(item.id));
        setButtonAddToBagDisabled(true);
    }
    const AddToWishlist=()=>{
        console.log(WishListItems,":hshshshssh")
        
        setButtonWishListDisabled(true);
        console.log(item.id,"::id")
        dispatch(addToWishList(item.id));
    }
    return (
        <div>
            <div className={style.path}>
                {
                    item && <p>Home / Clothing / {item.category} / {type} / <b>{item.title} {type}</b></p>
                }

            </div>
            <div className={style.profile}>
                <div className={style.image_container}>
                    {
                        item && item.images.slice(0, 3).map((image, index) => (
                            <div key={index} className={style.image_div}>
                                <img src={image} alt={`pick ${index}`} className={style.profile_image} />
                            </div>
                        ))
                    }

                </div>
                {
                    item &&
                    <div className={style.info}>
                        <h2 style={{ marginBottom: "1px" }}>{item.title}</h2>
                        <p style={{ color: "gray", fontSize: "19px", marginTop: "3px", marginBottom: "20px" }}>{item.subtitle}</p>
                        <p style={{ display: "inline", padding: "3px 10px", marginTop: "15px", border: "1px solid black" }}>{item.rating} | {item.rating_count} Ratings</p>
                        <hr></hr>
                        <p style={{ fontSize: "18px", marginBottom: "1px" }}><b> Rs .{item.discounted_price} </b>   MRP   <span style={{ textDecorationLine: "line-through" }}>{item.strike_price}   </span> <span style={{ color: "orange" }}> <b>{item.discount}</b></span></p>
                        <p style={{ marginTop: "1px" }}>inclusive of all taxes</p>
                        <p style={{ marginBottom: "1px" }}><b>SELECT SIZE</b></p>
                        <div className={style.size_container}>
                            {
                                item && item.size.map((item, index) => (
                                    <p className={style.size_item} key={index}>
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                            <div style={{float:"left"}}>
                            <button 
                            type='button' 
                            className={style.Add_To_Bag} 
                            onClick={AddToCart}
                            disabled={isButtonAddToBagDisabled}
                            style={{backgroundColor:isButtonAddToBagDisabled?"white":"darkmagenta",
                                    color:isButtonAddToBagDisabled?"gray":"white"}}
                            >
                                <BsBagCheck style={{  marginRight: "8px" }} />
                               {
                                isButtonAddToBagDisabled?<span>ADDED TO BAG</span>:<span>ADD TO BAG</span>
                               } 
                            </button>
                            </div>
                            <div>
                            <button 
                            type='button' 
                            className={style.wishlist } 
                            onClick={AddToWishlist}
                            disabled={isButtonWhishListDisabled}
                            style={{
                                backgroundColor:isButtonWhishListDisabled?"white":"darkmagenta",
                                    color:isButtonWhishListDisabled?"gray":"white"
                            }}>
                                <AiOutlineHeart style={{  marginRight: "8px" }}/>
                                {
                                isButtonWhishListDisabled?<span>ADDED TO WISHLIST</span>:<span>WISHLIST</span>
                               } 
                            </button>
                            </div>
                        <div>

                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductProfile