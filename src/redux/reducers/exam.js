import * as actionTypes from '../actionTypes';

const initState = {
  isFetching: false,
};

function exam(state = initState, action) {
  switch (action.type) {

    case actionTypes.EXAM_REGISTER_REQUEST:
    case actionTypes.GET_STUDENT_EXAMS_REQUEST:
    case actionTypes.SEND_ANSWER_REQUEST:
    case actionTypes.GET_ANSWER_REQUEST:
    case actionTypes.GET_QUESTION_REQUEST:
    case actionTypes.GET_EXAM_REQUEST:
      return {
        ...state,
        isFetching: true,
      }

    case actionTypes.EXAM_REGISTER_FAILURE:
    case actionTypes.EXAM_REGISTER_SUCCESS:
    case actionTypes.SEND_ANSWER_SUCCESS:
    case actionTypes.GET_STUDENT_EXAMS_FAILURE:
    case actionTypes.SEND_ANSWER_FAILURE:
    case actionTypes.GET_ANSWER_FAILURE:
    case actionTypes.GET_QUESTION_FAILURE:
    case actionTypes.GET_EXAM_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    case actionTypes.GET_STUDENT_EXAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        exams: action.data,
      }

    case actionTypes.GET_EXAM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        examQuestionIds: action.data.exam_question_ids,
        startDate: action.data.start_date,
        finishDate: action.data.finish_date,
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
        question: action.data,
      }

    default:
      return state;
  }
}

export default exam;
