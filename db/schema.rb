# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_13_153019) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ingredients", force: :cascade do |t|
    t.bigint "recipe_id", null: false
    t.string "text", null: false
    t.float "weight", null: false
    t.index ["recipe_id"], name: "index_ingredients_on_recipe_id"
  end

  create_table "nutrients", force: :cascade do |t|
    t.float "daily", null: false
    t.boolean "hasRDI", default: false
    t.string "label", null: false
    t.string "schemaOrgTag"
    t.string "tag", null: false
    t.float "total", null: false
    t.string "unit", null: false
    t.bigint "recipe_id", null: false
    t.bigint "macro_id"
    t.index ["macro_id"], name: "index_nutrients_on_macro_id"
    t.index ["recipe_id"], name: "index_nutrients_on_recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "label", null: false
    t.text "url"
    t.text "image", null: false
    t.integer "yield", default: 1
    t.string "source"
    t.float "totalTime", null: false
    t.float "calories", null: false
    t.text "dietLabels", default: [], array: true
    t.text "healthLabels", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "recipe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_user_favorites_on_recipe_id"
    t.index ["user_id"], name: "index_user_favorites_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
