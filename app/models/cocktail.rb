class Cocktail < ApplicationRecord
  mount_uploader :photo, ::PhotoUploader
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
  validates :name, presence: { message: "Your cocktail must have a name" } , uniqueness: true
end
