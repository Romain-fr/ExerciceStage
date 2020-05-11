class PagesController < ApplicationController

  def index
  end

  def acknowledgements
  end

  def create
    Number.create value: params[:value]
    redirect_to "/index"
  end

  def sum
    @number=0.0
    Number.all.each do |nb|
      @number = @number + nb.value
    end
    Number.create value: @number
    redirect_to "/index"
  end

  def destroy_all
    Number.all.each do |nb|
      nb.destroy
    end
    redirect_to "/index"
  end

end
