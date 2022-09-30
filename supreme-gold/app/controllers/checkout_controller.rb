class CheckoutController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        product = Product.find(params[:id])
        @sessions = Stripe::Checkout::Session.create({
            payment_method_types: ['card'],
            line_items: [{
                amount: params[:amount],
                currency: params[:charge][:currency],
                automatic_payment_methods: {
                  enabled: true,
                },
            }],
                mode: 'payment',
                success_url: 'root_url',
                cancel_url: 'root_url',
                
        })
        respond_to do |format|
            format.js
        end
    end
end