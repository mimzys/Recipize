import store from "./redux/store";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "../react/src/containers/app";
import RedBox from "redbox-react";
import {
  SEARCH_RECIPES,
  SET_QUERY,
  SET_CAL_MAX,
  SET_CAL_MIN,
  SET_DIET,
  SET_HEALTH,
  SET_RECIPE_SHOW
} from "./redux/actions/action-types";
import {
  searchRecipes,
  setQuery,
  setCalMin,
  setCalMax,
  setHealth,
  setDiet,
  setRecipeShow
} from "./redux/actions/actions";

document.addEventListener("DOMContentLoaded", () => {
  let reactElement = document.getElementById("app");
  if (!reactElement) {
    return;
  }
  try {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      reactElement
    );
  } catch (e) {
    if (window.railsEnv && window.railsEnv === "development") {
      render(<RedBox error={e} />, reactElement);
    }
  }
});
