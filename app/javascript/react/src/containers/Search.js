import React, { Component } from "react";
import "babel-polyfill";
import { browserHistory, Link, Route, RouteHandler } from "react-router";
import RecipeList from "./RecipeList";
import * as searchConstants from "../constants/SearchConstants";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchRecipes, setQuery } from "../../../packs/application";

class Search extends Component {
  constructor(props) {
    super(props);

    this.getRecipes = this.getRecipes.bind(this);
    this.trackSubmit = this.trackSubmit.bind(this);
  }

  minMax(min, max) {
    if (min && max) {
      if (min >= max) {
        return `${min}`;
      }
      return `${min}-${max}`;
    } else if (min) {
      return `${min}%2B`;
    } else if (max) {
      return `${max}`;
    }
  }

  async getRecipes() {
    let query = this.props.q;
    if (!query) {
      query = this.props.location.search.slice(3);
    }
    let add_props = "";
    if (this.props.health) {
      this.props.health.forEach(label => (add_props += `&health=${label}`));
    }
    if (this.props.diet) {
      add_props += `&diet=${this.props.diet}`;
    }
    if (this.minMax(this.props.calMin, this.props.calMax)) {
      add_props += `&calories=${this.minMax(
        this.props.calMin,
        this.props.calMax
      )}`;
    }
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${
        searchConstants.RECIPE_SEARCH_APP_ID
      }&app_key=${searchConstants.RECIPE_SEARCH_API_KEY}${add_props}`
    );

    const data = await api_call.json();

    this.props.dispatch({ type: "SEARCH_RECIPES", hits: data.hits });
  }

  generateAlert(type = "primary", strongText, softText) {
    let alertClass = `callout alert-callout-subtle ${type} radius`;
    return (
      <div data-closable className={alertClass}>
        <strong>{strongText}</strong>
        {softText}
        <button
          className="close-button"
          aria-label="Dismiss alert"
          type="button"
          data-close
        >
          <span aria-hidden="true">⊗</span>
        </button>
      </div>
    );
  }

  trackSubmit() {
    event.preventDefault();
    this.getRecipes();
  }

  componentDidMount() {
    this.props.dispatch({
      type: "SET_QUERY",
      q: this.props.location.search.slice(3)
    });
    this.getRecipes();
  }

  render() {
    let showResults;
    let recipesArray;
    recipesArray = this.props.hits.map((hit, index) => {
      return <RecipeList index={index} key={index} button="Favorite!" />;
    });
    let searchAlert;
    if (this.props.hits.length === 0) {
      searchAlert = this.generateAlert(
        "warning",
        "No Matching Recipes!  ",
        "Please widen your search!  "
      );
    } else {
      searchAlert = this.generateAlert(
        "success",
        "Success!  ",
        "Deliciousness Awaits!  "
      );
    }

    return (
      <div>
        <SearchForm
          trackSubmit={this.trackSubmit}
          searchAlert={searchAlert}
          q={this.props.location.search.slice(3)}
        />
        {recipesArray}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hits: state.hits,
    q: state.q,
    health: state.health,
    diet: state.diet,
    calMin: state.calMin,
    calMax: state.calMax
  };
};

export default connect(mapStateToProps)(Search);
