Rails.application.routes.draw do
  resources :users
  resources :sessions

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  get 'videos',to:'videos#index'
  get 'player/show',to: 'player#show'
  get 'rooms/new',to:'rooms#new'
  get 'rooms/search',to:'rooms#search'
  get '/generate_device_id', :to=>"rooms#more"
  match '/player/:room_id/show',to:"player#show",via:'get',:as=>"open"
  match '/rooms/new',to:"rooms#new",via:'get',:as=>"newRoom"
  resources :rooms
end
