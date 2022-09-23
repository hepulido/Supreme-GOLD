class AddPriceIdToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :price_id, :integer
  end
end
