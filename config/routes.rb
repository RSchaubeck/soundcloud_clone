Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resources :users, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :index, :show, :destroy]
    resources :likes, only: [:index, :show, :create, :destroy]

  end

  root "static_pages#root"
end
