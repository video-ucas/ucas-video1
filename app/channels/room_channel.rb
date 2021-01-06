class RoomChannel < ApplicationCable::Channel
  require 'json'
  def subscribed
    stream_from "room#{params[:room_id]}"
    ActionCable.server.broadcast("room#{params[:room_id]}", {'body':'enter','user':self.current_user})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    p "leave room#{params[:room_id]}"
    room=Room.find_by(id: params[:room_id])
    room.cur_users_num-=1
    room.save
  end

  def receive(data)
    p data
    data['user']=self.current_user
    ActionCable.server.broadcast("room#{params[:room_id]}", data)
  end
end
