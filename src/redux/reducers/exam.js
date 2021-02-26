import * as actionTypes from '../actionTypes';

const initState = {
    isFetching: false,
};

function exam(state = initState, action) {
    switch (action.type) {

        case actionTypes.SEND_ANSWER_REQUEST:
        case actionTypes.GET_ANSWER_REQUEST:
        case actionTypes.GET_QUESTION_REQUEST:
        case actionTypes.GET_EXAM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }

        case actionTypes.SEND_ANSWER_SUCCESS:
        case actionTypes.SEND_ANSWER_FAILURE:
        case actionTypes.GET_ANSWER_FAILURE:
        case actionTypes.GET_QUESTION_FAILURE:
        case actionTypes.GET_EXAM_FAILURE:
            return {
                ...state,
                isFetching: false,
            }

        case actionTypes.GET_EXAM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                examQuestionList: action.response.data,
            }

        case actionTypes.GET_ANSWER_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }

        case actionTypes.GET_QUESTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                question: action.response.data,
            }

        default:
            return state;
    }
}

export default exam;
