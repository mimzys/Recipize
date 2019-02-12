class Ingredient < ApplicationRecord
  validates_presence_of :recipe_id, :text, :weight
  validates_numericality_of :weight, greater_than_or_equal_to: 0
  belongs_to :recipe
end
