class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :desc, :img, :price, :qty
  has_one :price
end
