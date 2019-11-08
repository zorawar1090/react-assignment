import React from 'react'
import View from './view'
import { connect } from 'react-redux'
import { search } from '../../actions/search'
import { Link } from 'react-router-dom'

class Search extends React.Component {
  state = { search_text: '' }

  onSubmit = event => {
    event.preventDefault();

    this.props.search(this.state.search_text)
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { search_text } = this.state

    if (this.props.user) {
      return <View
        onSubmit={this.onSubmit}
        handleChange={this.handleChange}
        search_text={search_text}
        search_results={this.props.search_results}
      />
    }
    else {
      return <div className="u-center-text u-margin-top-medium">
        <h2>Sorry, you are not authorized. <Link className="link__grey" to="/">Click here</Link> to log in.</h2>
      </div>
    }
  }
}

const mapStateToProps = state => ({
  user: state.user.jwt,
  search_results: state.search_results
})

const mapDispatchToProps = { search }

export default connect(mapStateToProps, mapDispatchToProps)(Search)