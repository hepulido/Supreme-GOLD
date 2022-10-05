class CheckoutController < ApplicationController
    skip_before_action :authorize, only: :create
    
    Stripe.api_key = 'sk_test_51Ll5J2JOYhL55ByMJ5DHfzl5zrvVNjwKJyxcR9AsJTFFqbaMXyXTJmCFLDoYSF0yT5FSGnbal9Krrf0QVWJusoi900VKO2jtar'
    
    # print all products in the cart
    # @cart = Cart.find_by(id: session[:cart_id])
    # puts "Cart"
    # puts @cart
    
    cart_products = []

    # for each product in the cart, fill this info and add it to the array
    # orderItems = params[:product].collect do |product|
    #     selected_item = Cart.find_by(id: product)
    
    # {
    #   price_data: {
    #     currency: 'usd',
    #     product_data: {
    #       name: 'T-shirt',
    #     },
    #     unit_amount: 2000,
    #   },
    #   quantity: 1,
    # }

    def create
        puts "session from cookie store: #{session}"
       
        stripe_session = Stripe::Checkout::Session.create(create_stripe_obj)
      puts "session from stipe obj: #{session}"
    redirect_to stripe_session.url
  end 

  private

  def create_stripe_obj
    {
        line_items: [
              {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }
        ],
        mode: 'payment',
        # These placeholder URLs will be replaced in a following step.
        success_url: 'https://localhost:4000/success',
        cancel_url: 'https://example.com/cancel',
    }
    
  end
end