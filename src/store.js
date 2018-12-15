import { createStore } from 'redux';

const reducer = (state, action) => {
    if (action.type === "setTopic") {
        return {
            ...state,
            topic: action.topic
        }
    } 
    return state;

}

export default createStore(reducer);