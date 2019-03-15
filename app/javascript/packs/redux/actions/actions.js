import { SEARCH_RECIPES, SET_QUERY, SET_CAL_MAX, SET_CAL_MIN, SET_HEALTH, SET_DIET, SET_RECIPE_SHOW } from './action-types';

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
