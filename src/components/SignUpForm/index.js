import React from 'react'
import request from 'superagent'
import View from './view'
import baseUrl from '../../constants'

class SignUpForm extends React.Component {
  state = { firstName: '', lastName: '', email: '', password: '', userCreated: false, err: '' }

  onSubmit = event => {
    event.preventDefault()

    this.setState({ err: '' })

    const { firstName, lastName, email, password } = this.state
    const user = { firstName, lastName, email, password }

    request
      .post(`${baseUrl}/signup`)
      .send(user)
      .then(res => {
        this.setState({ userCreated: true })
        return res.body
      })
      .catch(err => {
        this.setState({ err: err.response.text })
        return console.error(err)
      })
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { firstName, lastName, email, password, userCreated, err } = this.state
    const values = { firstName, lastName, email, password }
    return (
        <View
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          values={values}
          userCreated={userCreated}
          err={err}
        />
    )
  }
}

export default SignUpForm