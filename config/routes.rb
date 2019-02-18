Rails.application.routes.draw do
  root 'homes#index'
  def checkSearch(route)
    if route[-2] == '/'
      bindgin.pry
      return route[0..-2]
    end
    return route
  end

  # def checkView(route)
  #   if
  # end
  get '/search', to: 'homes#index'
  get '/search:search', to: 'homes#index'
  get '/search:search/:id', to: 'homes#index'
  get '/profile', to: 'homes#index'
  devise_for :users
  resources :recipes, only: [:index, :show, :new, :create] do
    resources :digests, only: [:new, :create]
    resources :ingredients, only: [:new, :create]
  end

  # constraints Constraint::Authenticated.new do
  #   get '/search', to: 'homes#index'
  # end

  namespace :api do
    namespace :v1 do
      resources :recipes, only: [:index, :show, :new, :create]
    end
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
