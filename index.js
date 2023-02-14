const {createStore} = require("redux");

//CONSTANT DEFAND

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//STATE DEFAIND 

const initialCounter = {
    count : 0,
}

// ACTION DEFAIND 

const IncremntCounter = () => {
        return{
            type : INCREMENT,
        }
};

const decrimentCounter = () => {
        return{
            type : DECREMENT,
        }
};
const resetCounter = () => {
    return{
        type :RESET,
    }
};

// CREATING REDUSER 

const counterReduser = (state=initialCounter,action) => {
    switch(action.type){
        case INCREMENT :
            return{
                ...state,
                count : state.count + 1
            }
        case DECREMENT :
            return{
                ...state,
                count : state.count - 1
            }
        case RESET : 
            return{
                ...state,
                count : 0,
            }
        default : 
            return state;
    }
};

// CREATE STORE 

const store = createStore(counterReduser);

store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(IncremntCounter());
store.dispatch(IncremntCounter());
store.dispatch(IncremntCounter());
store.dispatch(IncremntCounter());
store.dispatch(IncremntCounter());
store.dispatch(IncremntCounter());
store.dispatch(decrimentCounter());
store.dispatch(resetCounter());




