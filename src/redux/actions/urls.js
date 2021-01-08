export const ROOT =
  process.env.NODE_ENV === 'production'
    ? 'https://a-lympiad.rastaiha.ir/api/'
    : 'https://a-lympiad.rastaiha.ir/api/';

export const CREATE_ACCOUNT = ROOT.concat('auth/token/obtain/'); //todo
export const LOGIN = ROOT.concat('auth/token/obtain/'); //todo
export const LOGOUT = ROOT.concat('auth/logout/'); //todo
