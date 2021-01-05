Rails.application.routes.draw do
  get 'player/:room_id/show',to: 'player#show'
end
