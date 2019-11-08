import React from 'react'
import LoginForm from './view'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/user.js'
import { Redirect } from 'react-router-dom'

class LoginFormContainer extends React.Component {
  state = { email: '', password: '', redirect: false }

  renderRedirect = () => {
    if (this.props.user) {
      return <Redirect to='/games' />
    }
  }

  onSubmit = event => {
    event.preventDefault()

    const { email, password } = this.state
    const user = { email, password }
    this.props.loginUser(user)
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { email, password } = this.state
    const values = { email, password }

    return (
      <div>
        {this.renderRedirect()}
        <LoginForm
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          values={values}
          err={this.props.err}
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user.jwt,
  err: state.user.message
})

const mapDispatchToProps = { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)