// Implementing Store class as done in Redux

const merge = (prev, next) => Object.assign({}, prev, next);

const ADD_USER = "ADD_USER";
const ADD_CONTACT = "ADD_CONTACT";

// --------------------------------------------------------------------------------------------------------------

let state = {
                user: {},
                contact: [],
        };

// --------------------------------------------------------------------------------------------------------------

class Store{
    
    constructor(reducer, initialState){
        this.reducer = reducer;
        this.state = initialState;
    }

    getState(){
        return this.state;
    }

    dispatch(action){
        if (typeof action === function) action(this.dispatch.bind(this));
        else  this.state = this.reducer(this.state, update);
    }
}


// --------------------------------------------------------------------------------------------------------------

// Actions reducers
userReducer = (state, action) => {

   if ( action.type === ADD_USER) return( merge(state, action.payload) );
    
    return state;
};
contactReducer = (state, action) => {
   
   if ( action.type === ADD_CONTACT ) return (state.concat([action.payload]));
    
    return state;
};

// --------------------------------------------------------------------------------------------------------------
// Main Reducer
reducer = (state , action) => ({
    user: userReducer(state["user"], action), 
    contact: contactReducer(state["contact"], action)
}
);

// --------------------------------------------------------------------------------------------------------------
// Builder Function or Action Creators
addUser_build = (data) => ({
    type: ADD_USER,
    payload: data,
})

addContact_build = (data) => ({
    type: ADD_CONTACT,
    payload: data,
})

logInUser = (username, password) => (dispatch) => {
    dispatch({type: "LOG_IN_SENT"})
    
    fetch("Some Fucking server URL")
    .then(() => dispatch({type: "LOG_IN_SUCCESSFUL"}))
    .catch(err => dispatch({type: "LOG_IN_REJECTED"}));

}



// --------------------------------------------------------------------------------------------------------------
const store = new Store(reducer, state);

// --------------------------------------------------------------------------------------------------------------
// Actions
store.dispatch(addUser_build({"foo": "foo"}));
store.dispatch(addUser_build({"bar": "bar"}));
store.dispatch(addUser_build({"baz": "baz"}));

store.dispatch(addContact_build({"J k Rowling" : "0987654321"}));
store.dispatch(addContact_build({"Mayank Kathuria": "7890654321"}));

console.log(`The State is: ${JSON.stringify(store.getState())}`);

// --------------------------------------------------------------------------------------------------------------

























