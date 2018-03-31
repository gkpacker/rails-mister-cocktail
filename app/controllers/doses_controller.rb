class DosesController < ApplicationController
  before_action :set_cocktail, except: [:destroy]
  skip_before_action :verify_authenticity_token, only: [:destroy]
  def new
    @dose = Dose.new
  end

  def create
    @dose = Dose.new(dose_params)
    @dose.cocktail = @cocktail
    @dose.ingredient_id = Ingredient.find_by(name: params[:ingredient]).id
    if @dose.save
      flash[:success] = "Dose added!"
      redirect_to cocktail_path(@cocktail)
    else
      redirect_to cocktail_path(@cocktail)
      flash[:danger] = "#{@dose.errors.messages[:ingredient].first}"
    end
  end

  def destroy
    dose = Dose.find(params[:id])
    @cocktail = dose.cocktail
    dose.destroy
    redirect_to cocktail_path(@cocktail)
  end

  private

  def set_cocktail
    @cocktail = Cocktail.find(params[:cocktail_id])
  end

  def dose_params
    params.require(:dose).permit(:description, :ingredient_id, :cocktail_id)
  end
end
