class Recipe < ApplicationRecord
  validates_presence_of :label, :image, :yield, :totalTime, :calories
  validates_numericality_of :yield, :totalTime, :calories
  has_many :nutrients
  has_many :ingredients
  has_many :user_favorites
  has_many :users, through: :user_favorites
end
