class Product < ApplicationRecord
    belongs_to :price
    has_many :orders
    has_many :carts, through: :orders
end
