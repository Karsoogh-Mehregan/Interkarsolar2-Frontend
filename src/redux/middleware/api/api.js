/* eslint-disable import/no-anonymous-default-export */
import fetchApi from './fetchApi';
import * as actionTypes from '../../actionTypes';

export const CALL_API = 'Call API';

export default ({ getState }) => (next) => async (action) => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const { fetchOptions } = callAPI;
  const { url, types, payload } = callAPI;
  const [requestType, successType, failureType] = types;
  next(actionWith({ payload, type: requestType }));

  try {

    fetchOptions.data = JSON.stringify(fetchOptions.data);

    fetchOptions.headers = {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    };

    const response = await fetchApi(url, fetchOptions);
    return next(
      actionWith({
        payload,
        response,
        type: successType,
      })
    );

  } catch (error) {
    if (error.message === 'TOKEN EXPIRED') {
      return next(
        actionWith({
          payload,
          type: actionTypes.LOGOUT,
          error: error.message || 'Something bad happened!',
        })
      );
    }
    return next(
      actionWith({
        payload,
        type: failureType,
        error: error.message || 'Something bad happened!',
      })
    );
  }
};
