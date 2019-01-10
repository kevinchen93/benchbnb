class Review < ApplicationRecord
  validates :rting, inclusion: { in: (1..5) }

  belongs_to :author,
    class_name: :User

  belongs_to :bench
end
