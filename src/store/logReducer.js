
const initialState = { isLogged: false }

export const UPDATE_LOG_ACTION = 'log/update';


const logReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_LOG_ACTION:
                return {...state, isLogged: !state.isLogged };
        default:
            return state;
    }
}




export default logReducer;