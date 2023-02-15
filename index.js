const { default: axios } = require("axios");
const {createStore,applyMiddleware} = require("redux");
const { default: thunk } = require("redux-thunk");


//CONSTANT DEGAIND 
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODO_FAILED = "GET_TODOS_FAILED"
const API_URL = "https://jsonplaceholder.typicode.com/todos"

//STATES DEFAIND
const initalTodosState = {
    todos : [],
    isLoading : false,
    error : null,
};

//ACTION DEFAIND
const getTodorequest = () =>{
    return{
        type : GET_TODOS_REQUEST
    }
}
const getTodosFailed = (error) =>{
    return{
        type : GET_TODO_FAILED,
        payload : error,

    }
};

const getTodosSuccess = (todos) =>{
    return{
        type : GET_TODOS_SUCCESS,
        payload : todos
    }
}

// REDUSER DEFAIND 

const todoReduser = (state = initalTodosState,action) =>{
    switch(action.type){
        case GET_TODOS_REQUEST :
             return{
                ...state,
                isLoading : true
             }
        case GET_TODO_FAILED :
             return{
                ...state,
                isLoading : false,
                error : action.payload
             }
        case GET_TODOS_SUCCESS :
             return{
                isLoading : false,
                todos : action.payload
             }
        default :
             return state
    }
}

// ACTION CREATOR API CALLING

const fetchData = () =>{
    return (dispatch) =>{
        dispatch(getTodorequest());
        axios.get(API_URL)
        .then((res) =>{
           const todos = res.data;
           const id = todos.map((todo) => todo.id);
           dispatch(getTodosSuccess(id));
        })
        .catch((err) =>{
            const errorMessage = (err.message);
            dispatch(getTodosFailed(errorMessage))
        })

    }
}

// DEFAIND STORE 

const store = createStore(todoReduser,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
})

//ACTION DISPATCH

store.dispatch(fetchData());
