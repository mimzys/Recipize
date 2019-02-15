class Nutrient < ApplicationRecord
  has_many :subs, class_name: "Nutrient", foreign_key: 'macro_id'
  belongs_to :macro, class_name: "Nutrient", optional: true
  validates_presence_of :daily, :label, :tag, :total,
    :unit, :recipe_id
  validates_numericality_of :daily, :total
  belongs_to :recipe
end
