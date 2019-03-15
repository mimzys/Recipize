import { createStore } from 'redux';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from '../react/src/containers/app'
import RedBox from 'redbox-react'

export const SEARCH_RECIPES = "SEARCH_RECIPES";
export const SET_QUERY = "SET_QUERY";
export const SET_CAL_MAX = "SET_CAL_MAX";
export const SET_CAL_MIN = "SET_CAL_MIN";
export const SET_HEALTH = "SET_HEALTH";
export const SET_DIET = "SET_DIET";
export const SET_RECIPE_SHOW = "SET_RECIPE_SHOW";

export const searchRecipes = hits => ({
  type: SEARCH_RECIPES,
  hits
});

export const setQuery = q => ({
  type: SET_QUERY,
  q
})

export const setCalMin = calMin => ({
  type: SET_CAL_MIN,
  calMin
})

export const setCalMax = calMax => ({
  type: SET_CAL_MAX,
  calMax
})

export const setHealth = health  => ({
  type: SET_HEALTH,
  health
})

export const setDiet = diet => ({
  type: SET_DIET,
  diet
})

export const setRecipeShow = id => ({
  type: SET_RECIPE_SHOW,
  id
})

function rootReducer(state = { q: "", hits: []}, action) {
  switch (action.type) {
    case SEARCH_RECIPES:
      return {
        ...state,
        hits: action.hits
      }
    case SET_QUERY:
      return {
        ...state,
        q: action.q
      }
    case SET_CAL_MAX:
      return {
        ...state,
        calMax: action.calMax
      }
    case SET_CAL_MIN:
      return {
        ...state,
        calMin: action.calMin
      }
    case SET_DIET:
      return {
        ...state,
        diet: action.diet
      }
    case SET_HEALTH:
      return {
        ...state,
        health: action.health
      }
    case SET_RECIPE_SHOW:
      return {
        ...state,
        shownRecipe: action.id
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
