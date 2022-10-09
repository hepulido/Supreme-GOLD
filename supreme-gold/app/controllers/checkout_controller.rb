class CheckoutController < ApplicationController
    skip_before_action :authorize, only: :create
    
    Stripe.api_key = 'sk_test_51Ll5J2JOYhL55ByMJ5DHfzl5zrvVNjwKJyxcR9AsJTFFqbaMXyXTJmCFLDoYSF0yT5FSGnbal9Krrf0QVWJusoi900VKO2jtar'

    def create
  
        payment_intent = Stripe::PaymentIntent.create(
            amount: params[:total],
            currency: 'usd',
            automatic_payment_methods: {
              enabled: true,
            },
        )  
    #             
    puts payment_intent
    render json: {
      clientSecret: payment_intent["client_secret"],
    }
  end
end

