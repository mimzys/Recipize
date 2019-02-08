import React, { Component } from 'react';
import 'babel-polyfill'
import { browserHistory, Link, Route, RouteHandler } from 'react-router';
import RecipeList from './RecipeList'
import * as searchConstants from './SearchConstants'
import SearchForm from './SearchForm'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      formPayload: null,
      q: "",
      from: null,
      to: null,
      params: [],
      count: null,
      more: null,
      hits: []
    }
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


    const current_state = await this.state.formPayload
    let add_props = ""
    if (this.state.formPayload.health.size > 0) {
      this.state.formPayload.health.forEach((label) => add_props += `&health=${label}`)
    }
    if (this.state.formPayload.diet.length > 0) {
      add_props += `&diet=${this.state.formPayload.diet}`
    }
    if (this.minMax(this.state.formPayload.calMin, this.state.formPayload.calMax)) {
      add_props += `&calories=${this.minMax(this.state.formPayload.calMin, this.state.formPayload.calMax)}`
    }
    console.log(add_props)
    const api_call = await fetch(`https://api.edamam.com/search?q=${this.state.formPayload.q}&app_id=${searchConstants.RECIPE_SEARCH_APP_ID}&app_key=${searchConstants.RECIPE_SEARCH_API_KEY}${add_props}`)

    const data = await api_call.json();
    this.setState({
      q: data.q,
      from: data.from,
      to: data.to,
      params: data.params,
      count: data.count,
      more: data.more,
      hits: data.hits
    })
  }

  generateAlert(type = "primary", strongText, softText) {
    //posssible types: ["success"(green), "alert"(red), "primary"(blue), "warning"(yellow)]
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

  trackSubmit(formPayload) {
    event.preventDefault()
    if (formPayload.q && formPayload.q.length > 1) {
      this.setState({
        formPayload: formPayload
      })
      this.getRecipes()
    }
  }

  componentDidMount(){
  }

  render() {
    console.log(this.state)
    let showResults
    let recipesArray
    recipesArray = this.state.hits.map((hit, index) => {
      return(
        <RecipeList
          index={index}
          key={index}
          recipe={hit.recipe}
        />
      )
    })
    let searchAlert
    if (this.state.q === "undefined" || this.state.hits.length === 0 && this.state.formPayload) {
      searchAlert = this.generateAlert("warning", "No Matching Recipes!", "Please widen your search!")
    } else if (this.state.q !== "") {
      searchAlert = this.generateAlert("success", "Success!", "Deliciousness Awaits!")
    }
    let icon = []
    console.log(Object.keys(searchConstants.NUTRIENTS).map(key => searchConstants.NUTRIENTS[key].label + " (" + searchConstants.NUTRIENTS[key].unit + ")"))
    console.log(this.state)
    return (
      <div >
        <SearchForm
          trackSubmit={this.trackSubmit}
          searchAlert={searchAlert}
        />
        {recipesArray}
      </div>
    )
  }
}

export default Search;
