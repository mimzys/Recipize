class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :label, null: false
      t.text :url
      t.text :image, null: false
      t.integer :yield, default: 1
      t.string :source
      t.float :totalTime, null: false
      t.float :calories, null: false
      t.text :dietLabels, array: true, default: []
      t.text :healthLabels, array: true, default: []
    end
  end
end
