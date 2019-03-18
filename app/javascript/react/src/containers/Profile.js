import React, { Component } from 'react';
import { browserHistory, Link, Route, RouteHandler } from 'react-router';
import RecipeList from './RecipeList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRecipes, setQuery } from '../../../packs/application'

class Profile extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    fetch(`/api/v1/recipes`)
      .then(response => {
        let responseBody = response.json()
        return responseBody
      }).then(responseBody => {
        this.props.dispatch({type: 'SEARCH_RECIPES', hits: responseBody.recipes})
        this.setState({
          hits: responseBody.recipes
        })
      })
  }

  render() {

    let recipesArray
    recipesArray = this.props.hits.map((hit, index) => {
      return(

        <RecipeList
          index={index}
          key={index}
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

const mapStateToProps = state => {
  return {
    hits: state.hits
  }
}

export default connect(mapStateToProps)(Profile);
