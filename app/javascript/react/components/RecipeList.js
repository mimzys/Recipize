import React from 'react';
import { browserHistory, Link } from 'react-router';
import PieChart from 'react-minimal-pie-chart';
import RecipeShow from './RecipeShow'

const RecipeList = (props) => {
  let carbs = Math.round(props.recipe.totalNutrients.CHOCDF.quantity / props.recipe.yield)
  let fat = Math.round(props.recipe.totalNutrients.FAT.quantity / props.recipe.yield)
  let protein = Math.round(props.recipe.totalNutrients.PROCNT.quantity / props.recipe.yield)

  let ingredientList = props.recipe.ingredientLines.map((ingr, index) => {
    return(
      <li key={index}>{ingr}</li>
    )
  })

  return(
    <div className="row">
      <Link to={{ pathname: `/show/${props.index}`, state: { recipe: props.recipe }, component: {RecipeShow} }}>
        <h3 className="name">{props.recipe.label}</h3>
        <div className="large-12 columns" role="content">
          <article>
            <div className="row">
              <div className="large-2 columns">
                <img src={props.recipe.image} />
              </div>
              <div className="large-8 columns">
                <ul>
                  Calories per serving: {Math.round(props.recipe.calories / props.recipe.yield)} <br/>
                  Servings: {props.recipe.yield} <br/>
                  Ingredients: <br/>
                  <ul>
                    {ingredientList}
                  </ul>
                </ul>
              </div>
              <div className="large-2 columns">
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
                  <li>Protein: {protein} (g)</li>
                  <li>Fat: {fat} (g)</li>
                  <li>Carbs: {carbs} (g)</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </Link>
      <hr></hr>
    </div>
  )
};

export default RecipeList;
