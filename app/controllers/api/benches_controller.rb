class Api::BenchesController < ApplicationController
  def index
    benches = bounds ? Bench.in_bounds(bounds) : Bench.all

    if params[:minSeating] && params[:maxSeating]
      benches = benches.where(seating: seating_range)
    end

    @benches = benches.includes(:reviews)
    render :index
  end

  def create
    @bench = Bench.create!(bench_params)
    render :show
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

  def seating_range
    (params[:minSeating]..params[:maxSeating])
  end

  def bounds
    params[:bounds]
  end
end
