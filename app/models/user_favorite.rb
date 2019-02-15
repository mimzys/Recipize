class UserFavorite < ApplicationRecord
  validates_presence_of :user_id, :recipe_id
  belongs_to :user
  belongs_to :recipe
end
