class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :desc, :img, :price
  has_one :price
end
