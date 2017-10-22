# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 100.times do
#   User.create(name: Forgery('internet').user_name , age: Faker::Number.between(1, 24), family_number: Faker::Number.between(1, 10), gender: Forgery('personal').gender)
# end

500.times do
  Map.create(user_id: Faker::Number.between(201, 300), longitude: Forgery('geo').longitude, latitude: Forgery('geo').latitude, dehydration_degree: Faker::Number.between(0, 2), region: Faker::Number.between(1, 10), day: Faker::Number.between(1, 7)) 
end