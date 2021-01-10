class Mood < ApplicationRecord
  validates :id, presence: true
  validates :name, presence: true

end