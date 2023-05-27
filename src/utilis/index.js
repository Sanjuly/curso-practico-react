/**
 * This is function calculates total price of a new order
 * @param {Array} products cartProducts Array de Objects 
 * @returns {number} total price
 */


export const totalPrice = (products) => {
        let total = 0;
        products.forEach(product => total += product.price)
            return total
};

//export const totalPrice = (product) => {
//        let total = 0;
//        for (let i = 0; i < product.length; i++) {
//        total += product.price * product.quantity;
//        return total;       
//}};
//totalPrice();
//console.log(totalPrice);







//export const totalPrice = (products) => {
//    return products.reduce((total, product) => {
//        return total + product.price * product.quantity
//        }, 0)
//        }
    //export const cart = (state = initialState, action) => {
    //    switch (action.type) {
    //        case ADD_TO_CART:
    //            return {
    //                ...state,
    //                products: [...state.products, action.product]
    //                }
    //                case REMOVE_FROM_CART:
    //                    return {
    //                        ...state,
    //                        products: state.products.filter(product => product.id !== action.id)
    //                        }
    //                        case CLEAR_CART:
    //                            return {
    //                                ...state,//
    //                                products: []
    //                                }
    //                                default:
    //                                    return state
    //                                    }
//