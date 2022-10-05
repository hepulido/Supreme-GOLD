class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :desc
      t.string :img
      t.float :price

      t.timestamps
    end
  end
end
