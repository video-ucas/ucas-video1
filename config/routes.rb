Rails.application.routes.draw do
  get 'videos',to:'videos#index'
  get 'player/:room_id/show',to: 'player#show'
  get 'rooms/new',to:'rooms#new'
  get 'rooms/search',to:'rooms#search'
  get '/generate_device_id', :to=>"rooms#more"
  match '/player/:room_id/show',to:"player#show",via:'get',:as=>"open"
  match '/rooms/new',to:"rooms#new",via:'get',:as=>"newRoom"
  resources :rooms
end
