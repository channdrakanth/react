
const filterReducerDefaultState = {
    text: '',
    sortBy: ''
}

export default (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_FILTER_TEXT':
          return {...state , ...action.text};
        default: return state;
    }
}