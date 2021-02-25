import * as actionTypes from '../actionTypes';

const initState = {
    isFetching: false,
};

function exam(state = initState, action) {
    switch (action.type) {

        case actionTypes.GET_EXAM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }

        case actionTypes.GET_EXAM_FAILURE:
            return {
                ...state,
                isFetching: true,
            }

        case actionTypes.GET_EXAM_SUCCESS:
            console.log(action);
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default exam;
