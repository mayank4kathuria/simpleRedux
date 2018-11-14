// Implementing Store class as done in Redux

const merge = (prev, next) => Object.assign({}, prev, next);

let reducer = (state , update) => merge(state, update);
let state = {};


class Store{
    
    constructor(reducer, initialState){
        this.reducer = reducer;
        this.state = initialState;
    }

    getState(){
        return this.state;
    }

    dispatcher(update){
        this.state = this.reducer(this.state, update);
    }
}

const store = new Store(reducer, state);
store.dispatcher({foo: "foo"});
store.dispatcher({bar: "bar"});
console.log(`The State is: ${JSON.stringify(store.getState())}`);
store.dispatcher({foo: "baz"});
console.log(`The State is: ${JSON.stringify(store.getState())}`);

reducer = (state , update) => state;
store.dispatcher({foo: "Something"});
console.log(`The State is: ${JSON.stringify(store.getState())} `);













