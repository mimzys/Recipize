import { SEARCH_RECIPES, SET_QUERY, SET_CAL_MAX, SET_CAL_MIN, SET_HEALTH, SET_DIET, SET_RECIPE_SHOW } from '../actions/action-types'

export const rootReducer = (state = { q: "", hits: [], health: [], digest: ""}, action) => {
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
