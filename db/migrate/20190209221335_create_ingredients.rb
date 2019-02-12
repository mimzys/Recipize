class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.belongs_to :recipe, null: false, index: true
      t.string :text, null: false
      t.float :weight, null: false
    end
  end
end
