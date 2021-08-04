export const ROOT =
  process.env.NODE_ENV === 'production'
    ? 'https://backend.interkarsolar.ir/api/'
    : 'http://127.0.0.1:8000/api/'

export const CREATE_ACCOUNT = ROOT.concat('account/create/');
export const LOGIN = ROOT.concat('account/login/');
export const LOGOUT = ROOT.concat('account/logout/');
export const CHANGE_PASSWORD = ROOT.concat('account/change-password/');
export const RECOVERY_PASSWORD = ROOT.concat('account/recovery-password/');


export const UPDATE_PROFILE = ROOT.concat('account/login/');

export const GET_PROFILE = ROOT.concat('student/profile/');

export const PROVINCE = ROOT.concat('province/');
export const PROVINCE_DETAILS = ROOT.concat('province/detail/');
export const CITY = ROOT.concat('city/');
export const CITY_DETAILS = ROOT.concat('city/detail/');
export const SCHOOL = ROOT.concat('school/');

export const EXAM_REGISTER = ROOT.concat('exam/register/')
export const GET_STUDENT_EXAMS = ROOT.concat('exam/')
export const EXAM = ROOT.concat('exam/question/list/')
export const QUESTION = (qid) => ROOT.concat(`exam/question/${qid}/content/`)
export const SEND_ANSWER = ROOT.concat('exam/answer/')
export const GET_ANSWER = (qcid) => ROOT.concat(`exam/student/answer/${qcid}/`)

export const PAYMENT = ROOT.concat('pay/request/');
export const PAYMENT_IGNORE = ROOT.concat('pay/ignore/');
export const PAYMENT_STATUS = ROOT.concat('pay/check/');

export const GET_ANSWER_FOR_CORRECTION = ROOT.concat('answer/show/');
export const SET_ANSWER_SCORE = ROOT.concat('answer/set/');


const FORMULA0_ROOT = ROOT.concat('formula0/')
const GAME_ROOT = ROOT.concat('game/')


export const TEAM_LOGIN = FORMULA0_ROOT.concat('student/login/');
export const GET_TEAM_DATA = FORMULA0_ROOT.concat('student/get_team_data/');

export const REQUEST_PROBLEM = FORMULA0_ROOT.concat('student/request_problem/');
export const SUBMIT_ANSWER = FORMULA0_ROOT.concat('student/submit_answer/');

export const GET_AUCTION_PROBLEMS = FORMULA0_ROOT.concat('student/get_auction_problems/');
export const PUT_PROBLEM_IN_AUCTION = FORMULA0_ROOT.concat('student/put_problem_in_auction/');
export const GET_PROBLEM_FROM_AUCTION = FORMULA0_ROOT.concat('student/get_problem_from_auction/');

export const GET_PROBLEM = FORMULA0_ROOT.concat('student/get_problem/');
export const GET_PROBLEMS = FORMULA0_ROOT.concat('student/get_problems/');


export const GET_UNCORRECTED_PROBLEMS = FORMULA0_ROOT.concat('mentor/get_uncorrected_problems/');
export const SUBMIT_PROBLEM_SCORE = FORMULA0_ROOT.concat('mentor/submit_problem_score/');


//////////////////////////

export const ALL_SINGLE_PROBLEMS = GAME_ROOT.concat('problem/single/');
export const ALL_MULTIPLE_PROBLEMS = GAME_ROOT.concat('problem/multiple/');
export const RANDOM_SINGLE_PROBLEMS = GAME_ROOT.concat('problem/single/random/');
export const RANDOM_MULTIPLE_PROBLEMS = GAME_ROOT.concat('problem/multiple/random/');
export const SUBJECTS = GAME_ROOT.concat('subject/');
