require 'spec_helper'

describe Recipe do

  it { should have_valid(:label).when("anything") }
  it { should_not have_valid(:label).when(nil, "") }

  it { should have_valid(:source).when("anything", nil, "") }

  it { should have_valid(:totalTime).when(1, 3.4, "1.2", "10", 0) }
  it { should_not have_valid(:totalTime).when(nil, "", -1) }

  it { should have_valid(:calories).when(1, 3.4, "1.2", "10", 0) }
  it { should_not have_valid(:calories).when(nil, "", -1) }

  it { should have_valid(:yield).when(1, "10") }
  it { should_not have_valid(:yield).when(nil, "", -1, 0, 1.2, "1.2") }

  it { should have_valid(:url).when("anything", nil, "") }

  it { should have_valid(:image).when("anything") }
  it { should_not have_valid(:image).when("", nil) }

  it { should have_many(:user_favorites) }
  it { should have_many(:nutrients) }
  it { should have_many(:ingredients) }
  it { should have_many(:users) }
end
