require 'spec_helper'

describe Nutrient do

  it { should have_valid(:daily).when(1, 3.4, "1.2", "10", 0) }
  it { should_not have_valid(:daily).when(nil, "", -1) }

  it { should have_valid(:hasRDI).when(false, true) }
  it { should_not have_valid(:hasRDI).when(nil, "") }

  it { should have_valid(:label).when("anything") }
  it { should_not have_valid(:label).when(nil, "") }

  it { should have_valid(:schemaOrgTag).when("anything", nil, "") }

  it { should have_valid(:tag).when("anything") }
  it { should_not have_valid(:tag).when(nil, "") }

  it { should have_valid(:total).when(1, 3.4, "1.2", "10", 0) }
  it { should_not have_valid(:total).when(nil, "", -1) }

  it { should have_valid(:unit).when("anything") }
  it { should_not have_valid(:unit).when(nil, "") }

  Recipe.new(label: "test", image: "animage.jpg", totalTime: 10, calories: 300)
  it { should have_valid(:recipe_id).when(1) }
  it { should_not have_valid(:recipe_id).when(nil, "") }

  it { should belong_to(:recipe) }

  Nutrient.new(daily: 34, hasRDI: true, label: "macro", tag: "banana", total: 542, unit: "mg", recipe_id: 1)
  it { should have_valid(:macro_id).when(1, nil) }
  it { should_not have_valid(:recipe_id).when("") }

  it { should belong_to(:macro) }
  it { should have_many(:subs) }
end
