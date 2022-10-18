Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  namespace :api do
    
    post "/signup", to: "users#create"
    get "/me", to: "users#show"

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    
    post "/show-add-cart", to: "carts#create"
    get "/current-cart", to: "carts#show"
    patch "/carts/:id", to: "carts#update"
    patch "/carts/:id/delete_product", to: "carts#delete_product"
    delete "/carts/:id", to: "carts#destroy"
    
    post '/create-checkout-session', to: "checkout#create"
    
    resources :users, only: [:create, :index, :show]
    resources :products
    resources :orders
    resources :prices
  
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


# get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
