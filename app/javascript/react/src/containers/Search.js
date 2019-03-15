import React, { Component } from 'react';
import 'babel-polyfill'
import { browserHistory, Link, Route, RouteHandler } from 'react-router';
import RecipeList from './RecipeList'
import * as searchConstants from '../constants/SearchConstants'
import SearchForm from './SearchForm'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRecipes, setQuery } from '../../../packs/application'

class Search extends Component {
  constructor(props){
    super(props);

    this.getRecipes = this.getRecipes.bind(this)
    this.trackSubmit = this.trackSubmit.bind(this)
  }

  minMax(min = null, max = null) {
    if (min && max) {
      return `${min}-${max}`
    }
    else if (min) {
      return `${min}%2B`
    }
    else if (max) {
      return `${max}`
    }
  }

  async getRecipes() {


    const current_state = await this.props.health
    let add_props = ""
    if (this.props.health) {
      this.props.health.forEach((label) => add_props += `&health=${label}`)
    }
    if (this.props.diet) {
      add_props += `&diet=${this.props.diet}`
    }
    if (this.minMax(this.props.calMin, this.props.calMax)) {
      add_props += `&calories=${this.minMax(this.props.calMin, this.props.calMax)}`
    }
    const api_call = await fetch(`https://api.edamam.com/search?q=${this.props.q}&app_id=${searchConstants.RECIPE_SEARCH_APP_ID}&app_key=${searchConstants.RECIPE_SEARCH_API_KEY}${add_props}`)

    const data = await api_call.json();

    this.props.dispatch({type: 'SEARCH_RECIPES', hits: data.hits})
  }

  generateAlert(type = "primary", strongText, softText) {
    let alertClass = `callout alert-callout-subtle ${type} radius`
    return(
      <div data-closable className={alertClass}>
        <strong>{strongText}</strong>
        {softText}
        <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">⊗</span>
        </button>
      </div>
    )
  }

  trackSubmit() {
    event.preventDefault()
    this.getRecipes()
  }

  componentDidMount(){
    let newFormPayload = {
      q: this.props.location.search.slice(3),
      health: [],
      diet: [],
      calMin: null,
      calMax: null
    }
    this.setState({
      formPayload: newFormPayload,
    })
    this.getRecipes()
    this.props.dispatch({type: 'SET_QUERY', q: this.props.location.search.slice(3) })
  }

  render() {
    console.log(this.props.hits)

    let showResults
    let recipesArray
    recipesArray = this.props.hits.map((hit, index) => {
      return(
        <RecipeList
          index={index}
          key={index}
          recipe={hit.recipe}
          path={this.props.location.pathname + this.props.location.search}
          pathname={this.props.location.pathname}
          search={this.props.location.search}
          digest={hit.recipe.digest}
          ingredients={hit.recipe.ingredients}
          yield={hit.recipe.yield}
          label={hit.recipe.label}
          image={hit.recipe.image}
          calories={hit.recipe.calories}
          url={hit.recipe.url}
          button="Favorite!"
        />
      )
    })
    let searchAlert
    if (this.props.q === "undefined" || this.props.hits.length === 0 && this.props) {
      searchAlert = this.generateAlert("warning", "No Matching Recipes!  ", "Please widen your search!  ")
    } else if (this.props.q !== "") {
      searchAlert = this.generateAlert("success", "Success!  ", "Deliciousness Awaits!  ")
    }
    let icon = []

    return (
      <div >
        <SearchForm
          trackSubmit={this.trackSubmit}
          searchAlert={searchAlert}
          q={this.props.location.search.slice(3)}
        />
        {recipesArray}

      </div>
    )
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
  }
}

export default connect(mapStateToProps)(Search);
