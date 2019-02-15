class CreateNutrients < ActiveRecord::Migration[5.2]
  def change
    create_table :nutrients do |t|
      t.float :daily, null: false
      t.boolean :hasRDI, default: false
      t.string :label, null: false
      t.string :schemaOrgTag
      t.string :tag, null: false
      t.float :total, null: false
      t.string :unit, null: false
      t.belongs_to :recipe, null: false
      t.belongs_to :macro
    end
  end
end
