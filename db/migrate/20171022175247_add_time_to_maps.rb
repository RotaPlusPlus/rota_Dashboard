class AddTimeToMaps < ActiveRecord::Migration[5.1]
  def change
    add_column :maps, :time, :timestanp
  end
end
