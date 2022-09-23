class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.integer :price
      t.string :desc
      t.string :img

      t.timestamps
    end
  end
end
