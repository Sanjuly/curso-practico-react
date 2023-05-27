import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"

export const ShoppingCartContext = createContext();

//proveer a los componentes la informacion
export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.string.isRequired,
    }
    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);//el estado local pasa a ser estado global

    //Product-Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

     //Checkout Side Menu - Open/Close
     const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
     const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
     const closeCheckoutSideMenu= () => setIsCheckoutSideMenuOpen(false);

    //Product-Detail---Show product la informacion a almecenar en un objeto
    const [productToShow, setProductToShow] = useState({});

    //Shopping Cart - add product to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart - Order
    const [order, setOrder] = useState([]);//array

    // Get products
    const [items, setItems] = useState(null);
    //products filtered
    const [filteredItems, setFilteredItems] = useState(null);
    // Get product by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    // Get product by category
    const [searchByCategory, setSearchByCategory] = useState(null);
    
    
    
    useEffect (() => {
        fetch('https://api.escuelajs.co/api/v1/products')//solicitamos informacion
        .then((res) => res.json())//resolvemos la respuesta y q la devuelva en json
        .then((data) => {
            setItems(data);
        })
    }, [])

    //search by title
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
     //search by Category
     const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
// Filter Products
    
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        } 
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        } 
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        } 
        if (!searchType) {
            return items;
        } 
    } 



    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle,searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, searchByTitle, searchByCategory])

    return (//el proveedor recibe los valores en count y setcount
        <ShoppingCartContext.Provider value={{ 
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
)
}
