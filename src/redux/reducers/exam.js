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
                isFetching: false,
            }


        case actionTypes.GET_EXAM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                examQuestionList: action.response.data,
            }

        case actionTypes.GET_QUESTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                questionContent: action.response.data,
            }

        default:
            return state;
    }
}

export default exam;
