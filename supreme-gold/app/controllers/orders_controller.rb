class OrdersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index]

    def index 
        orders = Order.all.order(:created_at) 
        render json: orders, include: ['product','cart' ], status: :ok
    end


    def show
        orders = Order.find(params[:id]) 
        render json: orders, include: ['product','cart' ], status: :ok
     end

     def create 
        orders  = Order.create(user_id: session[:user_id])
        render json: orders,  include: :user
     end

    private 

    def set_order
        @order = Order.find(params[:id])
    end

    def create_order_params
        params.permit(:total, :quantity_products)
    end

    def render_not_found_response
        render json: { errors: ['Order Not Found'] }, status: :not_found
    end


end
