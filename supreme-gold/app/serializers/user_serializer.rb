class UserSerializer < ActiveModel::Serializer
  attributes :id :username, :orders
  def orders
    ActiveModel::SerializableResource.new(object.orders,  each_serializer: OrderSerializer)
  end
end
