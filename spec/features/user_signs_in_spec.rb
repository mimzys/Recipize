require 'rails_helper'

feature 'user signs in', %Q{
  As a signed up user
  I want to sign in
  So that I can regain access to my account
} do
  scenario 'specify valid credentials' do
    user = FactoryBot.create(:user)

    visit '/'

    fill_in 'user_email', with: user.email
    fill_in 'user_password', with: user.password

    click_button 'Log In'

    expect(page).to have_content('Signed in successfully')
    expect(page).to have_content('Sign Out')
  end

  scenario 'specify invalid credentials' do
    visit '/'

    click_button 'Log In'
    expect(page).to have_content('Invalid Email or password')
    expect(page).to_not have_content('Sign Out')
  end
end
