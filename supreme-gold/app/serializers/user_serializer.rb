class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :username, :orders
  def orders
    ActiveModel::SerializableResource.new(object.orders,  each_serializer: OrderSerializer)
  end
end
