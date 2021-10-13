const defaultstate = {
    login: false,
    user: '',
    Token: '',
    firstName: '',
    lastName: '',
    username: '',
    nohp: '',
    email: '',
    password_confirmation: '',
    password: '',
  };
  
  const userData = (state = defaultstate, action) => {
    switch (action.type) {
      case 'SET_ID':
        return {...state, login: true, user: action.payload};
      case 'SET_USER':
        return {...state, login: true, Token: action.payload};
      case 'SET_firstName':
        return {...state, login: true, firstName: action.payload};
      case 'SET_lastName':
        return {...state, login: true, lastName: action.payload};
      case 'SET_username':
        return {...state, login: true, username: action.payload};
      case 'SET_nohp':
        return {...state, login: true, nohp: action.payload};
      case 'SET_email':
        return {...state, login: true, email: action.payload};
      case 'SET_password_confirmation':
        return {...state, login: true, password_confirmation: action.payload};
      case 'SET_password':
        return {...state, login: true, password: action.payload};matchMedia
      default:
        return state;
    }
  };
  
  export default userData;
  