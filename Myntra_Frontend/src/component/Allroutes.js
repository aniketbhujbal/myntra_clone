import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/Home";
import Products from "./Products/Products";
import Header from './Header/Header';
import ProductProfile from './ProductProfile/ProductProfile';
import Cart from './Cart/Cart';
import WishList from './WishList/WishList';



export function AllRoutes() {

    return (
        <div>
            <Router>    
                <div>
                    <Header></Header>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/productProfile" element={<ProductProfile />} />
                    <Route path="/checkout/cart" element={<Cart />} />
                    <Route path="/checkout/WishList" element={<WishList />} />
                </Routes>
            </Router>
        </div>
    )

}