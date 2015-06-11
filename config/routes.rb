Rails.application.routes.draw do
  root to: "static_pages#root"

  get "/auth/:provider/callback", to: "sessions#omniauth"
  resource :session, only: [:new, :destroy]
  resources :profiles, only: [:new, :create, :update, :show]
  namespace :api, defaults: { format: :json } do
    get "/cover_letters/:id/generate_pdf", to: "cover_letters#generate_pdf"
    resources :profiles, only: [:create, :show, :update]
    resources :cover_letters

    resources :users, only: [:show]
    resources :blurbs, only: [:create, :destroy, :show, :index]
    resources :companies, only: [:create, :show, :index]
  end
end
