import { createStore } from 'redux';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from '../react/src/containers/app'
import RedBox from 'redbox-react'

export const SEARCH_RECIPES = "SEARCH_RECIPES";

export const searchRecipes = hits => ({
  type: SEARCH_RECIPES,
  hits
});

function rootReducer(state = {}, action) {
  switch (action.type) {
    case "SEARCH_RECIPES":
      return {
        ...state,
        hits: action.hits
      }
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render(
          <Provider store={store}>
            <App />
          </Provider>,
          reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
        reactElement)
    }
  }
})
