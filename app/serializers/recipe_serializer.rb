class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :label, :url, :image, :yield, :source, :totalTime, :calories,
    :dietLabels, :healthLabels, :ingredients, :nutrients, :created_at, :updated_at 
end
