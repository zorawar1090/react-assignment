import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import GamesGrid from './components/GamesGrid'
import GameDetails from './components/GameDetails'
import Search from './components/Search'
import { Route } from 'react-router-dom'
import './styles/sass/main.scss'
import{Link} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <div className="app">
        <Route path="/" exact component={LoginForm} />
        <Route path="/search" component={Search} />
        <Route path="/sign-up" exact component={SignUpForm} />
        <Route path="/games" exact component={GamesGrid} />
        <Route path="/game/:name" exact component={GameDetails} />
      </div>
    </Provider>
  }
}