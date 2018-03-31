class Dose < ApplicationRecord
  belongs_to :ingredient
  belongs_to :cocktail
  validates_uniqueness_of :ingredient, scope: :cocktail_id, message: "This ingredient is already dosed!"
  # validates :ingredient, uniqueness: { scope: :cocktail_id, message: "This ingredient is already dosed!"}
end
