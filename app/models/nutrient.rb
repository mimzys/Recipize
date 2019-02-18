class Nutrient < ApplicationRecord
  has_many :subs, class_name: "Nutrient", foreign_key: 'macro_id'
  belongs_to :macro, class_name: "Nutrient", optional: true
  validates_presence_of :daily, :label, :tag, :total,
    :unit, :recipe_id
  validates_numericality_of :daily, greater_than_or_equal_to: 0
  validates_numericality_of :total, greater_than_or_equal_to: 0
  validates_inclusion_of :hasRDI, :in => [true, false]
  belongs_to :recipe
end
