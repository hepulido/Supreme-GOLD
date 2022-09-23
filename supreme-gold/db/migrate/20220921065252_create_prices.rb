class CreatePrices < ActiveRecord::Migration[6.1]
  def change
    create_table :prices do |t|
      t.integer :product_price

      t.timestamps
    end
  end
end
