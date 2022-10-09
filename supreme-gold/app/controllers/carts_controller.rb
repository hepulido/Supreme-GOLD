class CartsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index]
    
    def index
        carts = Cart.all
        render json: carts
     end
    
     def show 
        if session[:cart_id]
            @cart = Cart.find_by(id: session[:cart_id])
        else
           @cart =  create_cart
        end
        # byebug
        render json: @cart, include: :user
    end


    def update
        @cart.update(set_cart)
        render json: @cart, status: :accepted
    end
   
    def destroy
        @cart = Cart.find(session[:cart_id])
        @cart.destroy 
        session[:cart_id]= null
        render json: @cart, include: :user, status: :accepted
    end  
    
    private

    def set_cart
         Cart.find_by(id: session[:cart_id])
    end

    def create_cart
        
        puts " session #{session[:user_id]}"
        @cart = Cart.create(user_id: session[:user_id])
        session[:cart_id] = @cart.id
        puts "session cart #{session[:cart_id]}"
        byebug
         @cart
    end

    def render_not_found_response
        render json: { errors: ['No Cart Found'] }, status: :not_found
    end
end
