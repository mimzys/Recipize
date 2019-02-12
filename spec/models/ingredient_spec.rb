require 'spec_helper'

describe Ingredient do

  it { should have_valid(:text).when("anything") }
  it { should_not have_valid(:text).when(nil, "") }

  it { should have_valid(:weight).when(1, 3.4, "1.2", "10", 0) }
  it { should_not have_valid(:weight).when(nil, "", -1) }

  Recipe.new(label: "test", image: "animage.jpg", totalTime: 10, calories: 300)
  it { should have_valid(:recipe_id).when(1) }
  it { should_not have_valid(:recipe_id).when(nil, "") }

  it { should belong_to(:recipe) }
end
