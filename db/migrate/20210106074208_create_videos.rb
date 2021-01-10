class CreateVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.string :name, unique: true  #视频名，唯一
      t.string :video_url, unique: true  #视频链接，唯一
      t.string :picture_url, unique: true  #封面链接，唯一
      t.integer :count  #观看次数
      t.timestamps
    end
  end
end
