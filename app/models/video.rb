#1.5 wzm
class Video < ApplicationRecord
  validates :name, presence: true,uniqueness: true  #确保视频名不重复
  validates :video_url, presence: true,uniqueness: true  #确保视频链接唯一
  validates :picture_url, presence: true,uniqueness: true  #确保封面链接唯一
end
