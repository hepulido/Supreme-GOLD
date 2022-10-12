Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
 
    
    post "/signup", to: "users#create"
    get "/me", to: "users#show"

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    
    post '/show-add-cart', to: "carts#show_add_cart"
    get '/current-cart', to: "carts#current"
    patch '/carts/:id', to: "carts#update"
    delete '/carts/:id', to: "carts#destroy"
    post '/create-checkout-session', to: "checkout#create"
    
    resources :users, only: [:create, :index, :show]
    resources :products
    resources :orders
    resources :prices
  
 


# get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
