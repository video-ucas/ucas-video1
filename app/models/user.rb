class User < ApplicationRecord
  #has_secure_password
  #validates :password, presence: true
  #validates :password_confirmation, presence: true
  #validates :name, presence: true, length: { minimum: 2, maximum: 50 }

  has_secure_password
  #attr_accessor :remember_token

  validates :password, presence: true
  validates :password_confirmation, presence: true
  validates :name, presence: true, length: { minimum: 2, maximum: 50 },uniqueness: { case_sensitive: false }
end
