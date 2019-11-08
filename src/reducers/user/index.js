import {LOGIN_SUCCESS, LOGIN_FAIL} from '../../actions/user'

export default function (state = '', action ={}){
  switch(action.type){
    case LOGIN_SUCCESS:
      return action.user
    case LOGIN_FAIL:
      return {message: action.message}
    default:
      return state
  }
}