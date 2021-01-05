class CreateRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :owner
      t.integer :max_users_num
      t.integer :cur_users_num
      t.boolean :public

      t.timestamps
    end
  end
end
