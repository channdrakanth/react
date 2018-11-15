import {createStore, combineReducers} from 'redux';
import notesReducer from '../reducers/Note';
import filterReducer from '../reducers/Filter'


export default () => {
    const store = createStore(
        combineReducers({
            notes: notesReducer,
            filters: filterReducer
        })
      );
      return store;
};


