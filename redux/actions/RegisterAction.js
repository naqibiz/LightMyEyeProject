import axios from 'axios';
import {apiActiveURL} from '../../ApiBaseURL';

export const Register = () => {
  return dispatch => {
    const url = `${apiActiveURL}register`;
    console.log('url =======> ', url);
    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('email', data.email);
    formdata.append('password', data?.password ? data?.password : '');
    formdata.append('longitude', data?.longitude);
    formdata.append('latitude', data?.latitude);
    formdata.append('device_id', 0);
    formdata.append('reg_address', '');
    formdata.append('login_type', data.login_type);
    axios
      .post(url, formdata)
      .then(res => {
        RegisterSuccess(dispatch, res);
      })
      .catch(err => {
        RegisterFail(dispatch, err.message);
      });
  };
};

export const ResetRegister = () => {
  return dispatch => {
    dispatch({type: 'REG_USER_SUCCESS', payload: null});
  };
};

export const ResetRegisterFail = () => {
  return dispatch => {
    dispatch({type: 'REG_USER_FAIL', payload: null});
  };
};

const RegisterSuccess = (dispatch, res) => {
  dispatch({type: 'REG_USER_SUCCESS', payload: res});
};

const RegisterFail = (dispatch, msg) => {
  dispatch({type: 'REG_USER_FAIL', payload: msg});
};
