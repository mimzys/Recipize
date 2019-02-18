class Api::V1::RecipesController < ApplicationController
   skip_before_action :verify_authenticity_token

  def index
    render json: current_user.recipes.order(created_at: :desc)
  end

  def create
    new_recipe = Recipe.find_by(
      label: params[:label],
      url: params[:url],
      image: params[:image],
      yield: params[:yield],
      source: params[:source],
      totalTime: params[:totalTime],
      calories: params[:calories],
      dietLabels: params[:dietLabels],
      healthLabels: params[:healthLabels]
    )
    if !new_recipe
      new_recipe = Recipe.create(
        label: params[:label],
        url: params[:url],
        image: params[:image],
        yield: params[:yield],
        source: params[:source],
        totalTime: params[:totalTime],
        calories: params[:calories],
        dietLabels: params[:dietLabels],
        healthLabels: params[:healthLabels]
      )
    end
    params[:ingredients].each do |ingr|
      new_ingredient = Ingredient.find_by(
        recipe_id: new_recipe.id,
        text: ingr[:text],
        weight: ingr[:weight]
      )
      if !new_ingredient
        new_ingredient = Ingredient.create(
          recipe_id: new_recipe.id,
          text: ingr[:text],
          weight: ingr[:weight]
        )
      end
      new_recipe.ingredients << new_ingredient
    end
    params[:digest].each do |dig|
      new_dig = Nutrient.find_by(
        recipe_id: new_recipe.id,
        daily: dig[:daily],
        hasRDI: dig[:hasRDI],
        label: dig[:label],
        schemaOrgTag: dig[:schemaOrgTag],
        tag: dig[:tag],
        total: dig[:total],
        unit: dig[:unit]
      )
      if !new_dig
        new_dig = Nutrient.create(
          recipe_id: new_recipe.id,
          daily: dig[:daily],
          hasRDI: dig[:hasRDI],
          label: dig[:label],
          schemaOrgTag: dig[:schemaOrgTag],
          tag: dig[:tag],
          total: dig[:total],
          unit: dig[:unit]
        )
      end
      if dig.has_key?(:sub)
        dig[:sub].each do |sub|
          new_sub = Nutrient.find_by(
            recipe_id: new_recipe.id,
            macro_id: new_dig.id,
            daily: sub[:daily],
            hasRDI: sub[:hasRDI],
            label: sub[:label],
            schemaOrgTag: sub[:schemaOrgTag],
            tag: sub[:tag],
            total: sub[:total],
            unit: sub[:unit]
          )
          if !new_sub
            new_sub = Nutrient.create(
              recipe_id: new_recipe.id,
              macro_id: new_dig.id,
              daily: sub[:daily],
              hasRDI: sub[:hasRDI],
              label: sub[:label],
              schemaOrgTag: sub[:schemaOrgTag],
              tag: sub[:tag],
              total: sub[:total],
              unit: sub[:unit]
            )
          end
          new_dig.subs << new_sub
        end
      end
      new_recipe.nutrients << new_dig
    end
    if !current_user.recipes.find_by(label: new_recipe.label)
      new_fav = UserFavorite.create(
        user_id: current_user.id,
        recipe_id: new_recipe.id
      )
    end
    if new_fav.save
      render json:{ message: "Your entry has been saved!"}
    else
      render json:{ message: "An error occured on our end. Your entry has not been saved. I'm really sorry." }
    end
  end
end
