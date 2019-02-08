import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import RecipeShow from './RecipeShow';
import Search from './Search';
import Home from './Home';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' >
        <IndexRoute component={Home}/>
        <Route path="search" component={Search}/>
        <Route path="show/:id" component={RecipeShow}/>
      </Route>
    </Router>
  )
}

export default App;
