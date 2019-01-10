json.review do
  json.partial! 'api/reviews/review', review: @review
end

json.author do
  json.partial! 'api/userss/user', user: @review.author
end

json.average_rating @review.bench.average_rating
