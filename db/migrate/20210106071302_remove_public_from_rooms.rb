class RemovePublicFromRooms < ActiveRecord::Migration[5.1]
  def change
    remove_column :rooms, :public, :boolean
  end
end
