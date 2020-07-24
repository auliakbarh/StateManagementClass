import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../actions/actionType';

const initialState = {
    counter: 1,
    valueToIncrement: 1,
    valueToDecrement: 1,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}
