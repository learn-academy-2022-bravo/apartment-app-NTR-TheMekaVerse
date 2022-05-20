# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

# --------------------------------------------------


apartments = [
  {
   street: '123 Luxury Avenue',
   city: 'Dirty South',
   state: 'NC',
   manager: 'Alexander Cumberbatch',
   email: 'test1@test.net',
   price: '$ 1875.00',
   bedrooms: 2,
   bathrooms: 1.5,
   pets: 'Nope',
   image: 'https://images.unsplash.com/photo-1550514920-7bd08149411d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674'
  },
  {
   street: '123 Rico Suave Lane',
   city: 'Dirt Road',
   state: 'SC',
   manager: 'Alexander Cumberbatch',
   email: 'test1@test.net',
   price: '$ 2775.00',
   bedrooms: 4,
   bathrooms: 2,
   pets: 'Nope',
   image: 'https://images.unsplash.com/photo-1516357355532-5a2aea76364b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771'
  },
  {
   street: '825 Wasteofmoney Street',
   city: 'Anywhere',
   state: 'SC',
   manager: 'Shirley Templeton',
   email: 'test2@test.net',
   price: '$ 9075.00',
   bedrooms: 8,
   bathrooms: 2.5,
   pets: 'Sure',
   image: 'https://images.unsplash.com/photo-1572806100014-03625fce5a5f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674'
  },
]

apartments.each do |each_apartment|
  user.apartments.create each_apartment
  puts "creating apartment #{each_apartment}"
end



