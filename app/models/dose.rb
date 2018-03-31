class Dose < ApplicationRecord
  belongs_to :ingredient
  belongs_to :cocktail
  validates :ingredient, uniqueness: { scope: :cocktail_id, message: "This ingredient is already dosed!"}
end
