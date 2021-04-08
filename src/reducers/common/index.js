import types from './../../ref/types';

const defaultState = {
    gammingModeBackup: null,
};

const buttons = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_LANGUAGE:
            return {
                ...state,
                keypadStatus: action.data,
            };
        default:
            return state;
    }
};

export default buttons;