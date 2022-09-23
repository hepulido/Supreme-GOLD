class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :product_id
      t.integer :cart_id
      t.integer :total
      t.string :quantity_products

      t.timestamps
    end
  end
end
