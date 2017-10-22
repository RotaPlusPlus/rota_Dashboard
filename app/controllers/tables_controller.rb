class TablesController < ApplicationController
  def standard
  end

  def extended
  end

  def datatable
    @maps = Map.all.order('created_at DESC')
  end

  def jqgrid
  end
end
