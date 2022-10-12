class Product < ApplicationRecord
    # belongs_to :carts
    has_many :cart_products
    has_many :carts, through: :cart_products
    has_many :orders
    
end
