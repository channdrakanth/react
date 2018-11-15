
const filterReducerDefaultState = {
    text: '',
    createdAt: undefined,
    updatedAt: undefined,
    sortBy: 'date'
}

export default (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_FILTER_TEXT':
          return {...state , ...action.text};
        default: return state;
    }
}