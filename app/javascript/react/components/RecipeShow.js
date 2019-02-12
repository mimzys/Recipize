import React from 'react';
import { browserHistory, Link } from 'react-router';
import PieChart from 'react-minimal-pie-chart';
import MicroTable from './MicroTable'


const RecipeShow = (props) => {

  let carbDigest= props.location.state.recipe.digest.find(i => Object.values(i).includes('CHOCDF'))
  let fatDigest= props.location.state.recipe.digest.find(i => Object.values(i).includes('FAT'))
  let proteinDigest= props.location.state.recipe.digest.find(i => Object.values(i).includes('PROCNT'))

  let carbs = Math.round(carbDigest.total)
  let fat = Math.round(fatDigest.total)
  let protein = Math.round(proteinDigest.total)


  let ingredientList = props.location.state.recipe.ingredients.map((ingr, index) => {
    return(
      <li key={index}>{ingr.text} ({Math.round(ingr.weight)}g)</li>
    )
  })
  console.log(props.location.state.recipe)


  return(
    <div>
    <div className="grid-x">
      <div className="cell small-offset-1">
        <h2>{props.location.state.recipe.label}</h2>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell small-2 small-offset-1">
        <img src={props.location.state.recipe.image}></img>
      </div>
      <div className="cell small-6">
      <ul>
        Calories per serving: {Math.round(props.location.state.recipe.calories / props.location.state.recipe.yield)} <br/>
        Servings: {props.location.state.recipe.yield} <br/>
        Ingredients: <br/>
        <ul>
          {ingredientList}
        </ul>
      </ul>
      </div>
      <div className="cell small-2">
      <PieChart className="macros"
        data={[
        { title: 'Carbs', value: carbs, color: '#E38627' },
        { title: 'Fat', value: fat, color: '#C13C37' },
        { title: 'Protein', value: protein, color: '#6A2135' },
        ]}
        radius={30}
        cy={30}
      />
      <ul>
        <li style={{color: '#6A2135'}}>Protein: {protein} (g)</li>
        <li style={{color: '#C13C37'}}>Fat: {fat} (g)</li>
        <li style={{color: '#E38627'}}>Carbs: {carbs} (g)</li>
      </ul>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell small-4 small-offset-1">
        <MicroTable
          digest={props.location.state.recipe.digest}
        />
      </div>
      <div className="cell small-4 small-offset-1">
        <div className="expanded button-group">
          <a href={props.location.state.recipe.url} className="button">Let's Get Cooking!</a>
        </div>
      </div>
    </div>
    </div>
  )
}
export default RecipeShow;
