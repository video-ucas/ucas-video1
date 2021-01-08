class CreateRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.integer :user_id
      t.integer :max_users_num
      t.integer :cur_users_num
      t.integer :video_id
      t.string :token
      t.timestamps
    end
    add_index :rooms, :user_id
  end
end
