import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
  const { onSubmit, handleChange, values, userCreated, err } = props

  return (
    <div className="row">
      <div className="book">
        <div className="book__form">
          <form className="form u-margin-bottom-medium" onSubmit={onSubmit}>
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Sign Up</h2>
            </div>
            <div className="form__group">
              <input
                id="firstName"
                className="form__input"
                type="text"
                placeholder="First Name"
                required
                onChange={handleChange('firstName')}
                value={values.firstName}
              />
              <label className="form__label" htmlFor="first name">First Name</label>
            </div>
            <div className="form__group">
              <input
                id="lastName"
                className="form__input"
                type="text"
                placeholder="Last Name"
                required
                onChange={handleChange('lastName')}
                value={values.lastName}
              />
              <label className="form__label" htmlFor="last name">Last Name</label>
            </div>
            <div className="form__group">
              <input
                id="email"
                className="form__input"
                type="email"
                placeholder="Email Address"
                required
                onChange={handleChange('email')}
                value={values.email}
              />
              <label className="form__label" htmlFor="email">Email Address</label>
            </div>
            <div className="form__group">
              <input
                id="password"
                className="form__input"
                type="password"
                placeholder="Password"
                required
                onChange={handleChange('password')}
                value={values.password}
              />
              <label className="form__label" htmlFor="password">Password</label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn--green">Register</button>
            </div>
          </form>
          {
            !userCreated
              ? null
              : <div className="u-center-text">
                <p>Sign Up Successful! You can now <Link className="link" to='/'>Log In!</Link></p>
              </div>
          }
          {
            !err
              ? null
              : <div className="u-center-text">
                <p>{err}</p>
              </div>
          }
        </div>
      </div>
    </div>
  )
}