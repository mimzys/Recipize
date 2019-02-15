import React, { Component } from 'react';
import 'babel-polyfill'
import { browserHistory, Link, Route, RouteHandler } from 'react-router';
import RecipeList from './RecipeList'
import * as searchConstants from './SearchConstants'
import SearchForm from './SearchForm'

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      hits: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/recipes`)
      .then(response => {
        let responseBody = response.json()
        return responseBody
      }).then(responseBody => {
        this.setState({
          hits: responseBody.recipes
        })
      })

    }


  render() {

    console.log(this.state.hits)
    let recipesArray
    recipesArray = this.state.hits.map((hit, index) => {
      return(
        <RecipeList
          index={index}
          key={index}
          recipe={hit}
          path={"search?q=" + hit.label.split(" ", 1) + this.props.location.search}
          digest={hit.nutrients}
          ingredients={hit.ingredients}
          yield={hit.yield}
          label={hit.label}
          image={hit.image}
          calories={hit.calories}
          url={hit.url}
          button="Remove"
        />
      )
    })
    return (
      <div className="x-grid">
        <div className="cell small-4">
        {recipesArray}
        </div>
        <div className="cell small-4">
        </div>
      </div>
    )
  }
}

export default Profile;
