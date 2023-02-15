const {createStore,applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

//CONSTANT DEFAIND
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//STATE DEFAIND
const initalProductstate = {
    products : ["lobon","sugar"],
    count : 2,
};

//ACTION DEFAIND

const getProducts = () =>{
    return{
        type : GET_PRODUCTS
    }
};

const addProduct = (product) =>{
    return{
        type : ADD_PRODUCT,
        payload : product
    }
}

// REDUSER DEFAIND

const productReduser = (state = initalProductstate,action) =>{
    switch(action.type){
        case GET_PRODUCTS : 
            return state;
        case ADD_PRODUCT :
            return{
                products : [...state.products,action.payload],
                count : state.count + 1
            }
        default :
            return state
    }
}

// STORE DEFAIND

const store = createStore(productReduser,applyMiddleware(logger));

store.subscribe(() =>{
    console.log(store.getState())
});

store.dispatch(addProduct("fish"));
