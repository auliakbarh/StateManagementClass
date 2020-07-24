import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../actions/actionType';

const initialState = {
    counter: 1
}

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
        case DECREMENT_COUNTER:
        default:
            return state;
    }
}
