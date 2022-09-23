class Cart < ApplicationRecord
    belongs_to :user
    has_many :orders dependent: :destroy
    has_many :products, through: :orders
end