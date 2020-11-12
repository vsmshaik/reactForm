export const initialState = {
    users:[]
};
const contextReducer = (state, action) =>{
    if (action.type === 'API') {
        return {
            ...state, users: state.users.concat(action.payload ) 
        }
    }
    return state;
}

export default contextReducer;