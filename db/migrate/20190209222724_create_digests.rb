class CreateDigests < ActiveRecord::Migration[5.2]
  def change
    create_table :digests do |t|
      t.float :daily, null: false
      t.boolean :hasRDI, default: false
      t.string :label, null: false
      t.string :schemaOrgTag, null: false
      t.string :tag, null: false
      t.float :total, null: false
      t.string :unit, null: false
      t.belongs_to :recipe, null: false
    end
  end
end
