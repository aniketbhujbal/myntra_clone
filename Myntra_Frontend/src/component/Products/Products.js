        import React, { useEffect, useState } from 'react'
        import style from './Products.module.css'
        import { useLocation, useNavigate } from 'react-router-dom'
        import { useDispatch, useSelector } from 'react-redux'
        import { getAdd } from '../../Redux/clothing/action'
        import imaged from '../../assets/WhatsApp Image 2023-08-07 at 1.18.48 PM.jpeg'
        import ProductCard from '../ProductCard/ProductCard'
        function Products() {

            const [category, setcategory] = useState('')
            const [type, setType] = useState('')
            const [FilterItems, setFilterItems] = useState([])
            const [items, setItems] = useState([])
            const [flag, setFlag] = useState(0)
            const [Brands, setBrands] = useState([])
            const [showDropdown, setShowDropdown] = useState(false);
            const [checkedBrands, setCheckedBrands] = useState([]);


            const dispatch = useDispatch()
            const AllProducts = useSelector((store) => store.products.AllProducts)
            const location = useLocation();
            const navigate = useNavigate()

            useEffect(() => {
                console.log(location.state)
                setcategory(location.state.Category)
                setType(location.state.type)
                dispatch(getAdd({ category: location.state.Category }))
            }, []);

            useEffect(() => {
                getdata();
            }, [AllProducts]);

            useEffect(() => {
                // if (Brands.length === 0) {
                getAllbrands();
                // }
            }, [items]);

            const getdata = async () => {
                const regex = new RegExp(`\\b${type}\\b`, 'i');
                const matchingItems = AllProducts.filter((item) => {
                    return Object.values(item).some((value) => regex.test(value));
                });
                setItems(matchingItems);
                console.log("itemsss", matchingItems)

            };

            const getAllbrands = () => {
                if (items.length > 0) {
                    const matchingItems = items.map((item) => item.title);
                    setBrands(matchingItems);
                }
            };

            const toggleDropdown = () => {
                setShowDropdown((prevState) => !prevState);
            };

            const handleProductClick = (product) => {
                console.log('Product clicked:', product);
                // Add your logic for handling the click event here
                navigate("/productProfile", { state: { item: product, type: type } })

            };

            const products = () => {
                return items.map((item, index) => (
                    <ProductCard product={item} key={index} onClick={() => handleProductClick(item)} />
                ));
            };

            const FilteredProducts = () => {
                return FilterItems.map((item, index) => (
                    <ProductCard product={item} key={index} onClick={() => handleProductClick(item)} />
                ));
            };

            const onchecked = (e) => {
                const checkedBrand = e.target.value;
                setCheckedBrands((prevCheckedBrands) => {
                    const updatedBrands = e.target.checked
                        ? [...prevCheckedBrands, checkedBrand]
                        : prevCheckedBrands.filter((brand) => brand !== checkedBrand);
            
                    if (updatedBrands.length > 0) {
                        const matchingItems = items.filter((item) => updatedBrands.includes(item.title));
                        setFilterItems(matchingItems);
                    } else {
                        const regex = new RegExp(`\\b${type}\\b`, 'i');
                        setItems(
                            AllProducts.filter((item) => item.category === category && Object.values(item).some((value) => regex.test(value)))
                        );
                        setFilterItems([]);
                    }
            
                    return updatedBrands;
                });
                handleSortChange()
            };
            const handleSortChange = (e) => {
                let selectedOption
                if(e!=null){
                    selectedOption = e.target.value;
                }
                
                if (selectedOption === "Price-High-To-Low") {

                    if (FilterItems.length > 0) {
                       setFilterItems([...FilterItems].sort((a,b)=>b.strike_price-a.strike_price));
                    } else {
                        setItems([...items].sort((a,b)=>b.strike_price-a.strike_price));
                    }

                } else if (selectedOption === "Price-Low-To-High") {

                    if (FilterItems.length > 0) {
                        setFilterItems([...FilterItems].sort((a,b)=>a.strike_price-b.strike_price));
                     } else {
                         setItems([...items].sort((a,b)=>a.strike_price-b.strike_price));
                     }

                } else if (selectedOption === "Customer-Ratings") {

                    if (FilterItems.length > 0) {
                       setFilterItems([...FilterItems].sort((a,b)=>b.rating-a.rating));
                    } else {
                        setItems([...items].sort((a,b)=>b.rating-a.rating));
                    }

                } else {
                   console.log("")
                    if (FilterItems.length > 0) {
                       setFilterItems([...FilterItems]);
                    } else {
                        setItems([...items]);
                    }
                }
            };
            

            return (
                <div>
                    <div className={style.main}>

                        <div className={style.head}>
                            <p>Home / Clothing /<b>{type}</b></p>
                            <p><b>{type} For {category}</b>
                                {
                                    items.length > 0 && <span> - {items.length} items</span>
                                }

                            </p>
                            <div className={style.pageFields}>
                                <p><b>FILTERS</b></p>
                                <div className={style.threeButtons}>
                                    <button type='button'>Bundles</button>
                                    <button type='button'>Country Of Origin</button>
                                    <button type='button'>Size</button>
                                </div>
                                <div>
                                <div className={style.menuItem}>
                                            <select className={style.dropdown} onChange={handleSortChange}>
                                                <option value="default">Sort By - Recommnded</option>
                                                <option value="Price-High-To-Low">Price: High To Low</option>
                                                <option value="Price-Low-To-High">Price: Low To High</option>
                                                <option value="Customer-Ratings">Customer Ratings</option>
                                            </select>
                                        </div>
                                    </div>
                            </div>

                            <div>

                            </div>

                        </div>
                        <div style={{ width: "" }} >
                            <div className={style.dashboard}>
                                <div style={{ borderBottom: "1px solid black", textAlign: "left" }}>
                                    <label className={style.Filter_title}>BRAND</label>
                                    {
                                        Brands &&
                                        Brands
                                            .filter((item, index) => Brands.findIndex((x) => x === item) === index)
                                            .map((item, index) => (
                                                <div key={index} className={style.filter_content}>
                                                    <input type='checkbox' value={item} onChange={onchecked}/><label >{item}</label>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                            <div className={style.data}>
                                {FilterItems.length > 0 ? FilteredProducts() : items.length > 0 ? products() : ""}
                            </div>

                        </div>

                    </div>

                </div>
            )
        }

        export default Products