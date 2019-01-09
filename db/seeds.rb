# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bench.destroy_all

User.create([
  { username: 'demo', password: '123456' },
  { username: 'kevin', password: '123456' }
]);

Bench.create([
  { description: 'Bryant Park Bench', lat: 40.753708, lng: -73.984111 },
  { description: 'Central Park Bench - watch the boats & stuff', lat: 40.774417, lng: -73.967578 },
  { description: 'St. Marks Bench - spin the cube!', lat: 40.729744, lng: -73.990657 },
]);
