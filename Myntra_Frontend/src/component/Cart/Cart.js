import React, { useEffect, useState } from 'react'
import style from './Cart.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { removeCartProduct } from '../../ReduxToolkit/Cart/cartSlice';
import { FaShoppingCart } from 'react-icons/fa';
function Cart() {

    const [items, setItems] = useState([])
    const [totalMrp,setTotalMrp]=useState(0)
    const [totalDiscount,setTotalDiscount]=useState(0)
    const dispatch = useDispatch();
    const [Convenience,setConvenience]=useState(99)
    const [flag,setflag]=useState(false)
    const location = useLocation();
    const navigate = useNavigate()
    const AllCartItems = useSelector((store) => store.Cart)
    const AllProducts = useSelector((store) => store.products.AllProducts)


    useEffect(() => {
            console.log(AllCartItems)
        const updatedItems = [];

        AllCartItems.forEach((itemId) => {
                const product = AllProducts.find((prod) => prod.id === itemId);
                if (product) {
                    updatedItems.push({ ...product, qty: 1 });
                }
        });
        setItems(updatedItems);
    }, [AllCartItems, AllProducts]);


    useEffect(() => {
        console.log("aaaaaaaaaaaaaaaaa::::", items)
        setvalues()
    }, [items])

    const setvalues = () => {
        let newTotalMrp = 0;
        let newTotalDiscount = 0;
      
        items.forEach((item) => {
          newTotalMrp += item.discounted_price * item.qty;
          newTotalDiscount += item.strike_price * item.qty;
        });
      
        setTotalMrp(newTotalMrp);
        setTotalDiscount(newTotalDiscount);
      };
      

    
  const handleIncreaseQty =  (product) => {
    const updatedItems = items.map((item) =>
      item === product ? { ...item, qty: item.qty + 1 } : item
    );
        setItems(updatedItems)
        setvalues()
  };

  const handleDecreaseQty =  (product) => {
    if(product.qty===1){
        handleDeleteItem(product)
        setvalues()
        return
    }
    const updatedItems = items.map((item) =>
      item === product ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
    );
        setItems(updatedItems)
        setvalues()
  };

  const handleDeleteItem =  (product) => {
    console.log("1")
    dispatch(removeCartProduct(product.id));
    setflag(flag?false:true)
    console.log("AllcartItemsFrom delete",AllCartItems)

  };

         

    return (
        <div className={style.Cart}>
            <div className={style.cartItems}>
                { items.length>0 ?
                    items.map((item) => (
                        <div>
                            <CartItem 
                            product={item}
                            key={item.id}
                            onIncreaseQty={handleIncreaseQty}
                            onDecreaseQty={handleDecreaseQty}
                            deleteItem={handleDeleteItem}
                            ></CartItem>
                        </div>
                    )):""
                }
            </div>
            {items && totalMrp && totalDiscount &&
            <div style={{borderLeft:"1px solid gray"}}>
              
              <div className={style.BillDetails}>
              <p style={{ textAlign: "left" }}><b>Price Details:</b> {items.length} (items)</p>
              
              <div className={style.PriceDetailRow}>
                <div className={style.PriceLabel}>Total MRP</div>
                <div className={style.PriceValue}>{totalMrp}</div>
              </div>
              
              <div className={style.PriceDetailRow}>
                <div className={style.PriceLabel}>Discount ON MRP</div>
                <div className={style.PriceValue}>{totalDiscount}</div>
              </div>
              
              <div className={style.PriceDetailRow}>
                <div className={style.PriceLabel}>Convenience Fee</div>
                <div className={style.PriceValue}>{Convenience}</div>
              </div>
              
              <hr />
              
              <div className={style.PriceDetailRow}>
                <div className={style.PriceLabel}>Total Amount</div>
                <div className={style.PriceValue}>{totalMrp + Convenience}</div>
              </div>
              
              <div className={style.PlaceOrderButtonContainer}>
                <button type='button' className={style.PlaceOrderButton}>
                  PLACE ORDER
                </button>
              </div>
            </div>
                
            </div>
}
            {
                items.length===0 &&
                <div className={style.EmptyCart}>
                <FaShoppingCart className={style.CartIcon} />
                <p className={style.Message}>
                  No Items in cart! Please add some products to your cart and then come back here...
                </p>
              </div>
            }
        </div>
    )
}

export default Cart