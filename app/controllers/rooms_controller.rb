class RoomsController < ApplicationController
  include SessionsHelper
  require 'securerandom'
  before_action :request_logged
  before_action :set_room, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token, :only => [:create]

  # GET /rooms/new
  def new
    video_id = params["video_id"]
    if video_id==nil
      redirect_to videos_path
    else
      @room = Room.new
    end
  end


  def create
    name=params["name"]
    max =params["max_users_num"]
    video_id = params["video_id"]
    token=SecureRandom.uuid
    room = Room.new
    room.name=name
    room.user_id=session[:user_id]
    room.max_users_num=max
    room.cur_users_num=0
    room.token = token
    room.video_id=video_id
    room.save
    id =Room.last.id
    v=Video.find_by_id(video_id)
    v.count+=1
    v.save
    redirect_to player_show_path(:room_id => id,:token => token)
  end

  def search
    invitation = params[:id]
    data = invitation.split('/')
    id = data[0]
    token = data[1]
    @room = Room.find_by_id(id)
    if @room!=nil and@room.token==token and @room.cur_users_num<@room.max_users_num
      redirect_to player_show_path(:room_id => id,:token => token)
    else
      flash[:danger]='Invalid Invitation Code'
      redirect_to videos_path
    end
  end

end
