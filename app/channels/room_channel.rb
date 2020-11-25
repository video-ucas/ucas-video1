class RoomChannel < ApplicationCable::Channel
  require 'json'
  def subscribed
    stream_from "room#{params[:room_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    p data
    ActionCable.server.broadcast("room#{params[:room_id]}", data)
  end
end
