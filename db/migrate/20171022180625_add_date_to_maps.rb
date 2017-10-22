class AddDateToMaps < ActiveRecord::Migration[5.1]
  def change
    add_column :maps, :date, :date
  end
end
