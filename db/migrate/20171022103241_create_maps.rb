class CreateMaps < ActiveRecord::Migration[5.1]
  def change
    create_table :maps do |t|
      t.integer :user_id
      t.float :latitude
      t.float :longitude
      t.integer :dehydration_degree
      t.integer :region

      t.timestamps
    end
  end
end
