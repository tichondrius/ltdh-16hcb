export const AUTH_LOGIN = 'auth/AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILE = 'auth/AUTH_LOGIN_FAILE';
export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';
export const FLUSH_LOGIN = 'auth/FLUSH_LOGIN';
export const FLUSH_ERROR_LOGIN = 'auth/FLUSH_ERROR_LOGIN';


export const authLogin = (username, password) => ({
  type: AUTH_LOGIN,
  username,
  password,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authLoginSuccess = ({ token, username }) => ({
  type: AUTH_LOGIN_SUCCESS,
  token,
  username,
});

export const authLoginFaile = (errorMessage) => ({
  type: AUTH_LOGIN_FAILE,
  errorMessage,
});

export const flushErrorLogin = () => ({
  type: FLUSH_ERROR_LOGIN,
});





const initialState = {
  token: null,
  username: null,
  isLogging: false,
  errorMessage: null,
}

const authReducer = (state = initialState, action = {}) => {
  switch(action.type) {

    case AUTH_LOGIN: 
      return {
        ...state,
        isLogging: true,
        errorMessage: null,
      }

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        token: action.token,
        username: action.username,
      }

    case AUTH_LOGIN_FAILE:
      return {
        ...state,
        isLogging: false,
        token: null,
        username: null,
        errorMessage: action.errorMessage,
      }
    
    case AUTH_LOGOUT:
      return {
        ...state,
        isLogging: false,
        token: null,
        username:null,
        errorMessage: null,
      }
    case FLUSH_ERROR_LOGIN: {
      return {
        ...state,
        errorMessage: null,
      }
    }

    case FLUSH_LOGIN: 
      return initialState;
    
      
    default:
      return state;

  }
}

export default authReducer;