export const ROOT =
  process.env.NODE_ENV === 'production'
    ? 'http://backend.interkarsolar.ir/'
    : 'http://backend.interkarsolar.ir/';

export const CREATE_ACCOUNT = ROOT.concat('student/register/');
export const UPDATE_PROFILE = ROOT.concat('student/register/completed/');

export const LOGIN = ROOT.concat('student/login/');
export const LOGOUT = ROOT.concat('student/logout/');

export const PROVINCE = ROOT.concat('province/');
export const CITY = ROOT.concat('city/');
export const SCHOOL = ROOT.concat('school/');

export const GET_PROFILE = ROOT.concat('student/profile/');


export const PAYMENT = ROOT.concat('pay/request/');

// export const LOGIN = ROOT.concat('auth/token/obtain/'); //todo
// export const LOGOUT = ROOT.concat('auth/logout/'); //todo
