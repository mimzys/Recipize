class Digest < ApplicationRecord
  has_many :sub, class_name: "Digest", foreign_key: 'macro_id', optional: true
  belongs_to :macro, class_name: "Digest", optional: true
  validates_presence_of :daily, :hasRDI, :label, :schemaOrgTag, :tag, :total,
    :unit, :recipe_id
  validates_numericality_of :daily, :total
  belongs_to :recipe
end
