import { combineReducers } from 'redux';
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

const modalStack = {
    header: null,
    body: null,
    isVisible: false,
    footer: null,
};

export function modalMessage(state = modalStack, action) {
    console.log('statestate', state)
    switch (action.type) {
        case MODAL_OPEN:
            return {
                ...state,
                [action.id]: {
                    ...action.payload,
                },
            };
        case MODAL_CLOSE:
            return {
                [action.id]: {
                    ...action.payload,
                },
            };
        default:
            return state;
    }
}



const rootReducer = combineReducers({
    modalMessage
})

export default rootReducer;