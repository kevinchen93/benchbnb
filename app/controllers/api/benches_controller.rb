class Api::BenchesController < ApplicationController
  def index
    if bounds
      @benches = Bench.in_bounds(bounds)
    else
      @benches = Bench.all
    end
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

  def bounds
    params[:bounds]
  end
end
