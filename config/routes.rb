Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :benches, only: [:index, :show, :create]
    resources :reviews, only: [:create]
  end
end
