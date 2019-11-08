import request from 'superagent'

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

const searchSuccess = search_results => ({
  type: SEARCH_SUCCESS,
  search_results
})

export const search = search_text => dispatch => {
  request
    .post('https://api.newzoo.com/v1.0/metadata/noun/search?nouns=game,genre,country&include_aliases=true')
    .set('Authorization', 'Bearer i3BguvgfRQJVcOJ7PZA2L2laymTrp3D6AjHeCwngjP0')
    .send({search_text})
    .then(res => {
      dispatch(searchSuccess(res.body))
    })
    .catch(err => console.error)
}