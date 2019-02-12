class Recipe < ApplicationRecord
  validates_presence_of :label, :image, :yield, :totalTime, :calories,
    :dietLabels, :healthLabels
  validates_numericality_of :yield, :totalTime, :calories
  has_many :digests
  has_many :ingredients
end
