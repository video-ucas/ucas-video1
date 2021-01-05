Rails.application.routes.draw do
  get 'player/show',to: 'player#show'
  get 'rooms/new',to:'rooms#new'
  get 'rooms/search',to:'rooms#search'
  get '/generate_device_id', :to=>"rooms#more"
  match '/player/:room_id/show',to:"player#show",via:'get',:as=>"open"
  resources :rooms
end
