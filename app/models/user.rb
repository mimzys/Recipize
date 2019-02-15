class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates_presence_of :email, :encrypted_password
  validates_length_of :encrypted_password, minimum: 6
  has_many :user_favorites
  has_many :recipes, through: :user_favorites
end
