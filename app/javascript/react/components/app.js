import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import RecipeShow from './RecipeShow';
import Search from './Search';
import Home from './Home';
import Profile from './Profile';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/'
        onChange={(prevState, nextState) => {
          if (nextState.location.action !== "POP") {
            window.scrollTo(0, 0);
          }
        }}
      >
        <IndexRoute component={Home}/>

        <Route path="search" component={Search}/>
        <Route path="search:search/:id" component={RecipeShow}/>
        <Route path="profile" component={Profile}/>
      </Route>
    </Router>
  )
}

export default App;
