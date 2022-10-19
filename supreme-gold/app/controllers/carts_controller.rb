class CartsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index]
    before_action :set_current_user, only: [:create]
    before_action :set_current_cart, only: [:create]
    
    def index
        carts = Cart.all
        render json: carts
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

    def show
        @cart = Cart.find(session[:cart_id])
        if @cart 
        render json: @cart.products
        else
            render json: []
            
        end
        
    end

    def create  
        products = params[:newCartProducts].map {|p|  Product.find(p[:id])}
        products.each {|p| @cart.products << p}
        render json: @cart.products
    end


    def update
        @cart = Cart.find_by(params[:product_id])
        @cart.update(cart_params)
        render json: @cart, status: :accepted
    end

   def delete_product 
    @cart = Cart.find_by(params[:product_id])
    @cart.destroy
    render json: @cart, status: :accepted
   end
    
   
    def destroy
        @cart = Cart.find_by_id(session[:cart_id])
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
    
    def cart_params
    params.permit(:qty, :id, :cart, :newCartProducts, products:[:id,:title,:desc,:img,:price,:qty])
     end
    
     def render_not_found_response
        render json: { errors: ['No Cart Found'] }, status: :not_found
    end
end
