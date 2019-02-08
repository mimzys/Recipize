import React from 'react';
import { browserHistory, Link } from 'react-router';
import PieChart from 'react-minimal-pie-chart';

const RecipeShow = (props) => {
  let carbs = Math.round(props.location.state.recipe.totalNutrients.CHOCDF.quantity / props.location.state.recipe.yield)
  let fat = Math.round(props.location.state.recipe.totalNutrients.FAT.quantity / props.location.state.recipe.yield)
  let protein = Math.round(props.location.state.recipe.totalNutrients.PROCNT.quantity / props.location.state.recipe.yield)

  return(
    <div className="row">
      <div className="large-9 columns" role="content">
        <article>
          <div className="recipe-details">
            <h1 className="name">{props.location.state.recipe.label}</h1>
            <p className="picture">{props.location.state.recipe.image}</p>
            <p className="calories">Calories per serving: {Math.round(props.location.state.recipe.calories / props.location.state.recipe.yield)}</p>
            <p className="servings">Servings: {props.location.state.recipe.yield}</p>
            <PieChart className="macros"
              data={[
                { title: 'Carbs', value: carbs, color: '#E38627' },
                { title: 'Fat', value: fat, color: '#C13C37' },
                { title: 'Protein', value: protein, color: '#6A2135' },
              ]}
              radius={5}
              cy={5}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
export default RecipeShow;
