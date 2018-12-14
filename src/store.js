import { createStore } from 'redux';

const reducer = (state, action) => {
    if (action.type === "setPageInfo") {
        return {
            ...state,
            topic: action.topic
        }
    } 
    return state;

}

export default createStore(reducer);