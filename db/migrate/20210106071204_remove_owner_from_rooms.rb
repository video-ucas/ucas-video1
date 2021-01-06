class RemoveOwnerFromRooms < ActiveRecord::Migration[5.1]
  def change
    remove_column :rooms, :owner, :string
  end
end
