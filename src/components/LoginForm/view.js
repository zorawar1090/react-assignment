import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
  const { onSubmit, handleChange, values, err } = props

  return (
    <div className="row">
      <div className="book">
        <div className="book__form">
          <form className="form u-margin-bottom-medium" onSubmit={onSubmit}>
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Start Exploring Now</h2>
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
              <button className="btn btn--green">Log In</button>
            </div>
          </form>
          {
            !err
              ? null
              : <div className="u-error u-center-text">
                <p>{err}</p>
              </div>
          }
          <div className="u-center-text">
            <p>Don't have an account? <Link className="link" to='/sign-up'>Sign Up!</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}