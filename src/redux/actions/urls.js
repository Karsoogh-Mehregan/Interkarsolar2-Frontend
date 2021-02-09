export const ROOT =
  process.env.NODE_ENV === 'production'
    ? 'http://backend.interkarsolar.ir/'
    : 'http://backend.interkarsolar.ir/';

export const CREATE_ACCOUNT = ROOT.concat('student/register');
export const LOGIN = ROOT.concat('student/login');
export const LOGOUT = ROOT.concat('student/logout');
export const UPDATE_USER_INFO = ROOT.concat('student/register');

export const PAYMENT = ROOT.concat('pay/request');

// export const LOGIN = ROOT.concat('auth/token/obtain/'); //todo
// export const LOGOUT = ROOT.concat('auth/logout/'); //todo
