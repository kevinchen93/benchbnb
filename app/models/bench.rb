class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  has_many :reviews

  def self.in_bounds(bounds)
    self.where(lat: bounds["southWest"]["lat"].to_f..bounds["northEast"]["lat"].to_f)
        .where(lng: bounds["southWest"]["lng"].to_f..bounds["northEast"]["lng"].to_f)
  end

  def average_rating
    reviews.average(:rating)
  end
end
