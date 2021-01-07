class Room < ApplicationRecord
  belongs_to :video
  validates :name,presence:true
  validates :user_id,presence:true
  validates :max_users_num,presence:true
  validates :cur_users_num,presence:true
  validates :token,presence:true
end
