const {createStore} = require("redux");

// defaind  ----->>>

const INCTEMENT = "INCREMENT";
const DECTEMENT = "DECREMENT";

// state defaind --

const initialCounterState = {
    count : 0,
};

//action ---  object ..type and Payload (type must takbe)

const incremntCounter = () => {
    return {
            type : INCTEMENT,
          }
};
const decrementCounter = () => {
    return {
            type : DECTEMENT,
    }
};

//create reducer    state and action---

const createReducer = (state = initialCounterState , action) => {
    switch(action.type){
        
        case  INCTEMENT : 
          return{
            ...state,
            count : state.count + 1,
          };
        case DECTEMENT : 
        return{
            ...state,
            count : state.count - 1,
          };

        default :
          return state;

    }
};

// store create   mathod   getState()   subscribe()  dispatch()

const store = createStore(createReducer);
store.subscribe(() =>{
    console.log(store.getState())
});

//action despatch ---

store.dispatch(incremntCounter())
store.dispatch(incremntCounter())
store.dispatch(incremntCounter())
store.dispatch(incremntCounter())
store.dispatch(decrementCounter())


