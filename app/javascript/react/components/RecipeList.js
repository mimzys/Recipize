import React from 'react';
import { browserHistory, Link } from 'react-router';
import PieChart from 'react-minimal-pie-chart';
import RecipeShow from './RecipeShow'

const RecipeList = (props) => {
  let carbDigest= props.digest.find(i => Object.values(i).includes('CHOCDF'))
  let fatDigest= props.digest.find(i => Object.values(i).includes('FAT'))
  let proteinDigest= props.digest.find(i => Object.values(i).includes('PROCNT'))

  let carbs = Math.round(carbDigest.total / props.yield)
  let fat = Math.round(fatDigest.total / props.yield)
  let protein = Math.round(proteinDigest.total / props.yield)

  let ingredientList = props.ingredients.map((ingr, index) => {
    return(
      <li key={index}>{ingr.text}</li>
    )
  })
  console.log(props.recipe)

  return(
    <Link to={{ pathname: `${props.path}/${props.index}`, state: { digest: props.digest, yield: props.yield, ingredients:props.ingredients, recipe:props.recipe, label: props.label, image: props.image, calories: props.calories, url: props.url, button: props.button }, component: {RecipeShow} }} >
    <div className="grid-x">
      <div className="cell small-offset-1">
        <h3 >{props.label}</h3>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell small-3 small-offset-1">
        <img src={props.image}></img>
      </div>
      <div className="cell small-4">
      <ul>
        Calories per serving: {Math.round(props.calories / props.yield)} <br/>
        Servings: {props.yield} <br/>
        Ingredients: <br/>
        <ul>
          {ingredientList}
        </ul>
      </ul>
      </div>
      <div className="cell auto">
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
    <hr></hr>
    </Link>

  )
};

export default RecipeList;
