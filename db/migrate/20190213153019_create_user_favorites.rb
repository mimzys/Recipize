class CreateUserFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :user_favorites do |t|
      t.belongs_to :user, null: false, index: true
      t.belongs_to :recipe, null: false, index: true
    end
  end
end
