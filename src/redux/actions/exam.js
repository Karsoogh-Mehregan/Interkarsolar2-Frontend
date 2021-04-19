import jsonToFormData from '../../utils/jsonToFromDate';
import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as URLs from './urls';

export const registerInExam = ({ exam_id }) => ({
  [CALL_API]: {
    types: [
      actionTypes.EXAM_REGISTER_REQUEST,
      actionTypes.EXAM_REGISTER_SUCCESS,
      actionTypes.EXAM_REGISTER_FAILURE,
    ],
    url: URLs.EXAM_REGISTER,
    fetchOptions: {
      method: 'POST',
      body: {
        exam_id
      }
    },
  },
});

export const getStudentExams = () => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_STUDENT_EXAMS_REQUEST,
      actionTypes.GET_STUDENT_EXAMS_SUCCESS,
      actionTypes.GET_STUDENT_EXAMS_FAILURE,
    ],
    url: URLs.GET_STUDENT_EXAMS,
    fetchOptions: {
      method: 'GET',
    },
  },
});

export const getExamQuestionsList = (examID) => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_EXAM_REQUEST,
      actionTypes.GET_EXAM_SUCCESS,
      actionTypes.GET_EXAM_FAILURE,
    ],
    url: URLs.EXAM,
    fetchOptions: {
      method: 'POST',
      body: {
        exam_id: examID,
      },
    },
  },
});

export const getQuestionContents = (questionID) => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_QUESTION_REQUEST,
      actionTypes.GET_QUESTION_SUCCESS,
      actionTypes.GET_QUESTION_FAILURE,
    ],
    url: URLs.QUESTION(questionID),
    fetchOptions: {
      method: 'POST', //todo: change to GET
      body: {
      },
    },
  },
});

export const sendAnswer = (file, answer, qc_id) => ({
  [CALL_API]: {
    types: [
      actionTypes.SEND_ANSWER_REQUEST,
      actionTypes.SEND_ANSWER_SUCCESS,
      actionTypes.SEND_ANSWER_FAILURE,
    ],
    url: URLs.SEND_ANSWER,
    fetchOptions: {
      method: 'POST',
      dontContentType: true,
      body: jsonToFormData({
        file,
        answer,
        qc_id,
      }),
    },
  },
});

export const getPreviousAnswer = (qc_id) => ({
  [CALL_API]: {
    types: [
      actionTypes.GET_ANSWER_REQUEST,
      actionTypes.GET_ANSWER_SUCCESS,
      actionTypes.GET_ANSWER_FAILURE,
    ],
    url: URLs.GET_ANSWER(qc_id),
    fetchOptions: {
      method: 'POST',
      body: {
      },
    },
  },
});
