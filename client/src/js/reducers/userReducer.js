import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_PROFILE_USER,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOGOUT,
} from "../const/actionTypes";

const initialeState = {
  user: null,
  Loading: null,
  token: null,
  isAuth: null,
  errors: {}
};

const userReducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      case GET_PROFILE_USER:
      return { ...state, Loading: true };
    case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
      return {
        ...state,
        Loading: false,
        token: payload.token,
        user: payload.user,
        isAuth: true,
      };
      case GET_PROFILE_SUCCESS:
        return {...state,Loading:false,user:payload.user,isAuth:true}
    case REGISTER_FAIL:
      case LOGIN_FAIL:
        case GET_PROFILE_FAIL:
      return { ...state, Loading: false, isAuth: false, error: payload };
   case LOGOUT:
     return {...state,user:null,isAuth:null,Loading:null,token:null}
      default:
      return state;
  }
};

export default userReducer;
