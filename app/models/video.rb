#1.5 wzm
class Video < ApplicationRecord
  validates :name, presence: true,uniqueness: true
  validates :video_url, presence: true
  validates :picture_url, presence: true
end
