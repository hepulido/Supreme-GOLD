class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :desc
      t.string :img
      t.integer :price
      t.integer :likes

      t.timestamps
    end
  end
end
