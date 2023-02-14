const {createStore} = require("redux");

//CONSTANT DEFAND

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADD_USER = "ADD-USER";

//STATE DEFAIND 

const initialCounter = {
    count : 0,
}
const initialUser = {
    count : 1,
    users : [
        {
            user : "Anirban das joy",
        }
    ]
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
const addUsers = (user) =>{
    return{
        type : ADD_USER,
        payload : user,
    }
}


// CREATING REDUSER 

const counterReduser = (state=initialUser,action) => {
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
        case ADD_USER : 
            return{
                users : [...state.users,action.payload],
                count : state.count + 1,
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

store.dispatch(addUsers("joy das"))
store.dispatch(addUsers("sajib"))





