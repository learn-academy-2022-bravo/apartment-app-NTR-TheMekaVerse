require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it "gets a list of apartments" do
      
      user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')
      
      user.apartments.create(
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
      )

      get '/apartments'

      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 1
    end
  end
end
