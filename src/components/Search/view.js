import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class View extends React.Component {
  render(){
    const { onSubmit, handleChange, search_text, search_results } = this.props

    return (
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form className="form u-margin-bottom-medium" onSubmit={onSubmit}>
              <div className="form__group">
                <input
                  id="search_text"
                  className="form__input"
                  type="text"
                  placeholder="Search Text"
                  required
                  onChange={handleChange('search_text')}
                  value={search_text}
                />
              </div>
              <div className="form-group">
                <button className="btn btn--green">Search</button>
              </div>
            </form>
            {
              search_results.length > 0
                ? <div className="search-results">
                    <div className="u-center-text">
                      <h2 className="heading-secondary">Results</h2>
                    </div>
                    {search_results.map(result => {
                      return <div>
                                <Link className="search-result link" to={`/game/${result.name}`}>
                                  <div className="u-center-text">
                                    <img className="search-result-img" src={`https://api-test.newzoo.com/v1.0/metadata/game/boxart?name=${result.name}`} alt={result.name}/>
                                    <h2 className="search-result-name">{result.name}</h2>
                                  </div>
                                </Link>
                             </div>
                    })}
                  </div>
                : null
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search_results: state.search
})

export default connect(mapStateToProps, null)(View)