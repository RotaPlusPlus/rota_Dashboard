class ChartsController < ApplicationController
  def flot
  end

  def radial
  end

  def chartjs
  end

  def chartist
  end

  def morris
    gon.array = []
    for day in 1..7 do
      for degree in 0..2 do
        gon.array << Map.where(day: day).where(dehydration_degree: degree).count
      end
    end
  end

  def rickshaw
  end
end
