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
        orders  = Order.create(create_order_params)
        render json: orders, include: ['product','cart'], status: :created
     end
    
     def update 
        @order.update(set_order)
        render json: @order, include: ['product','cart' ], status: :accepted
    end

    def destroy
        @order.destroy(set_order)
     end
    
    private 

    def set_order
        @order = Order.find(params[:id])
    end

    def create_order_params
        params.permit(:total, :quantity_products)
    end
   

    def order_params
        params.permit(:status)
    end

    def render_not_found_response
        render json: { errors: ['Order Not Found'] }, status: :not_found
    end


end
