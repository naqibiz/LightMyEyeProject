const INITIAL_STATE = {
  RegisterUser: null,
  RegisterError: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REG_USER_SUCCESS':
      console.log('REG_USER_SUCCESS ===========> ', action.payload);
      return {...state, RegisterUser: action.payload};
    case 'REG_USER_FAIL':
      console.log(action.payload, '===== REG_USER_FAIL');
      return {...state, RegisterError: action.payload};
    default:
      return state;
  }
};
