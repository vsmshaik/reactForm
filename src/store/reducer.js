const initialState = {
    counter: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            ...state, counter: state.counter - 1 
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state, counter: state.counter + action.payload 
        }
    }
    if (action.type === 'SUBSTRACT') {
        return {
            ...state, counter: state.counter - action.payload 
        }
    }
    if (action.type === 'API') {
        return {
            ...state, counter: state.counter.concat(action.payload ) 
        }
    }
    return state;
};

export default reducer;