class AddDayToMaps < ActiveRecord::Migration[5.1]
  def change
    add_column :maps, :day, :integer
  end
end
