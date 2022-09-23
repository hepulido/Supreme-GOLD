class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    validates :email, {presence: true, uniqueness: true}
    has_one :cart
    has_many :orders
end