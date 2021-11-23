

export const UPDATE_OVER = 'over/update';


const overReducer = (state = { over: false }, action) => {

    switch (action.type) {
        case UPDATE_OVER:
            return {...state, over: !state.over }
        default:
            return state;
    }

}

export default overReducer;