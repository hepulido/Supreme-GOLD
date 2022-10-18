class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :user_id
      t.integer :total_amount
      t.integer :qty, :default => 0, :null => false
      t.timestamps
    end
  end
end
