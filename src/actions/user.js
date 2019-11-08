import request from 'superagent'
import baseUrl from '../constants'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

const loginSuccess = jwt => ({
  type: LOGIN_SUCCESS,
  user: jwt
})

const loginFail = message => ({
  type: LOGIN_FAIL,
  message: message
})

export const loginUser = user => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(user)
    .then(res => {
      dispatch(loginSuccess(res.body))
    })
    .catch(err => {
      dispatch(loginFail(err.response.body.message))
      return console.err
    })
}