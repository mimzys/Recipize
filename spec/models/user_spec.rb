require 'rails_helper'

RSpec.describe User, type: :model do
  context "validations" do

    context "presence" do
      it { should have_valid(:email).when("john@smith.com") }
      it { should have_valid(:encrypted_password).when("123456") }
    end

    context "invalid presence" do
      it { should_not have_valid(:email).when(nil, '', 'suzy') }
      it { should_not have_valid(:encrypted_password).when(nil, '', '12345') }
    end

    context "associations" do
      it { should have_many(:recipes) }
      it { should have_many(:user_favorites) }
    end
  end
end
