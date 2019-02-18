class Recipe < ApplicationRecord
  validates_presence_of :label, :image, :yield, :totalTime, :calories
  validates_numericality_of :totalTime, greater_than_or_equal_to: 0
  validates_numericality_of :calories, greater_than_or_equal_to: 0
  validates_numericality_of :yield, greater_than_or_equal_to: 1, only_integer: true
  has_many :nutrients
  has_many :ingredients
  has_many :user_favorites
  has_many :users, through: :user_favorites
end
