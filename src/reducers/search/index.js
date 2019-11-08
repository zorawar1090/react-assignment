import {SEARCH_SUCCESS} from '../../actions/search'

export default function (state = [], action = {}) {
  switch(action.type){
    case SEARCH_SUCCESS:
      return action.search_results
    default:
      return state
  }
}