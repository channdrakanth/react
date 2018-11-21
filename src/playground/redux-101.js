import {createStore} from 'redux'

const store = createStore((state = {count:0} , action) => {
    switch(action.type){
        case 'INCREMENT' :
        const incementBy = typeof action.incementBy === 'number' ? action.incementBy : 1;
        return{
            count : state.count + incementBy
        };
        default: return state;
    }
 
});

const unsubscribe = store.subscribe(() =>{
console.log(store.getState());
});
store.dispatch({
    type : 'INCREMENT'
});
//unsubscribe();
store.dispatch({
    type : 'INCREMENT',
    incementBy : 5
});

