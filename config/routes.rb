Rails.application.routes.draw do
  get 'qa/show'

  resources :users
  #resources :sessions
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  get 'videos',to:'videos#index'
  get 'videos/upload',to:'videos#upload'
  post 'videos/upload',to:'videos#create'

  get 'player/show',to: 'player#show'
  get 'rooms/new',to:'rooms#new'
  get 'rooms/search',to:'rooms#search'
  get '/generate_device_id', :to=>"rooms#more"
  match '/player/:room_id/show',to:"player#show",via:'get',:as=>"open"
  match '/rooms/new',to:"rooms#new",via:'get',:as=>"newRoom"
  match '/users/new',to:"users#new",via:'get',:as=>"newUser"
  match '/sessions/new',to:"sessions#new",via:'get',:as=>"newSeesion"
  resources :rooms
end
