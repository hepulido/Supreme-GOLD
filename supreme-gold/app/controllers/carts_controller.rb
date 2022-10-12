class CartsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index]
    before_action :set_current_user, only: [:show_add_cart]
    before_action :set_current_cart, only: [:show_add_cart]
    
    def index
        carts = Cart.all
        render json: carts
     end
    
     def create
        @cart = Cart.create(user_id: session[:user_id])
        session[:cart_id] = @cart.id
        render json: @cart, include: :user
    end
    
    def set_current_user
        @user = User.find_by_id(session[:user_id])
    end
    
    def set_current_cart
        
        @cart = Cart.find_by_id(session[:cart_id])
        if !@cart 
            @cart = create_cart
        end
        @cart
    end

    def current
        @cart = Cart.find(session[:cart_id])
        if @cart 
        render json: @cart.products
        else
            render json: []
        end
    end

     def show_add_cart 
       
    #   if @user 
    products = params[:newCartProducts].map {|p|  Product.find(p[:id])}
    products.each {|p| @cart.products << p}
    
    # Product.find(params[:newCartProducts][0][:id])
    #     end
        render json: @cart.products
    end


    def update
        @cart = Cart.find(session[:cart_id])
        @cart.update(qty: params[:qty])
        render json: @cart, status: :accepted
        
    end
   
    def destroy
        @cart = Cart.find(session[:cart_id])
        @cart.destroy 
        session[:cart_id]= nil
        render json: @cart, include: :user, status: :accepted
    end  
    
    private

    def set_cart
         Cart.find_by(id: session[:cart_id])
    end

    def create_cart
        @cart = Cart.create(user_id: session[:user_id])
        session[:cart_id] = @cart.id
        @cart
    end

    def render_not_found_response
        render json: { errors: ['No Cart Found'] }, status: :not_found
    end
end
