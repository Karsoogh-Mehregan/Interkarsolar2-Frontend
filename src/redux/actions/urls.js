export const ROOT =
  process.env.NODE_ENV === 'production'
    ? 'https://backend.interkarsolar.ir/'
    : 'http://127.0.0.1:8000/';

export const CREATE_ACCOUNT = ROOT.concat('student/register/');
export const UPDATE_PROFILE = ROOT.concat('student/register/completed/');
export const CHANGE_PASSWORD = ROOT.concat('student/change/password/');

export const LOGIN = ROOT.concat('student/login/');
export const LOGOUT = ROOT.concat('student/logout/');
export const GET_PROFILE = ROOT.concat('student/profile/');

export const PROVINCE = ROOT.concat('province/');
export const PROVINCE_DETAILS = ROOT.concat('province/detail/');
export const CITY = ROOT.concat('city/');
export const CITY_DETAILS = ROOT.concat('city/detail/');
export const SCHOOL = ROOT.concat('school/');

export const EXAM = ROOT.concat('exam/question/list/')
export const QUESTION = (qid) => ROOT.concat(`exam/question/${qid}/content/`)
export const SEND_ANSWER = ROOT.concat('exam/answer/')
export const GET_ANSWER = (qcid) => ROOT.concat(`exam/student/answer/${qcid}/`)

export const PAYMENT = ROOT.concat('pay/request/');
export const PAYMENT_IGNORE = ROOT.concat('pay/ignore/');
export const PAYMENT_STATUS = ROOT.concat('pay/check/');

export const GET_ANSWER_FOR_CORRECTION = ROOT.concat('answer/show/');
export const SET_ANSWER_SCORE = ROOT.concat('answer/set/');
