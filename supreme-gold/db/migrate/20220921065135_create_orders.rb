class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :product_id
      t.integer :cart_id
      t.integer :total_amount
      t.string :quantity_products

      t.timestamps
    end
  end
end
