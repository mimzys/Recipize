require 'spec_helper'

describe UserFavorite do
  it { should belong_to(:user) }
  it { should belong_to(:recipe) }
end
