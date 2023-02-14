const {createStore, combineReducers} = require("redux")

// CONSTANT DEFAIND 

//PRODUCT CONSTENT
const GET_PRODUCTS = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT"

//CARD CONSTENT 
const  GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CARDT_ITEM = "ADD_CART_ITEM";


//  STATE DEFAIND 

// PRODUCT STATE DEFAIND
const intialProducts = {
    Products : ["sugoar" , " alu" , "sosa"],
    count : 3,
};

//CART STATE DEFAIND
const initialCart = {
    carts : ["blow cart" , "red cart", "white cart","black cart"],
    count : 4,
    
}

// ACTION DEFAIND 

//PRODUCT ACTION DEFAIND 
const getProduct = () =>{
    return{
        type : GET_PRODUCTS
    }
}
const addProduct = (product) =>{
    return{
        type : ADD_PRODUCT,
        payload : product
    }
}

//CART ACTION DEFAIND
const getCart = () =>{
    return{
        type : GET_CART_ITEMS,
    }
}

const addCart = (cart) =>{
    return{
        type : ADD_CARDT_ITEM,
        payload : cart,
    }
}

// REDUSER DEFAIND 

//PRODUCT REDUSER DEFAIND
const ProductReducer = (state = intialProducts, action) => {
    switch(action.type){
      case GET_PRODUCTS :
        return state;
      case ADD_PRODUCT :
        return{
            Products : [...state.Products, action.payload],
            count : state.count + 1,
        };
     default : 
       return state;
    }
} ;

// CART REUSER DEFAIND

const cartReduser = (state = initialCart, action) =>{
    switch(action.type){
        case GET_CART_ITEMS :
            return state;
        case ADD_CARDT_ITEM :
            return {
                carts : [...state.carts, action.payload],
                count : state.count + 1
            }
        default :
            return state
    }
       
}

//MULTIPOL REDUSER DEGLEAR

const rootReduser = combineReducers({
    ProductR : ProductReducer,
     cartR : cartReduser
})

// CREATE STORE 

const store = createStore(rootReduser);
store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(addCart("gray"))
store.dispatch(addProduct("nodus" , "fish","egge","law"))

