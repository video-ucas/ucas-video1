class RoomsController < ApplicationController
  require 'securerandom'
  before_action :set_room, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token, :only => [:create]
  # GET /rooms
  # GET /rooms.json
  def index
    @rooms = Room.all
  end

  # GET /rooms/1
  # GET /rooms/1.json
  def show
  end

  # GET /rooms/new
  def new
    @room = Room.new
  end

  # GET /rooms/1/edit
  def edit
  end

  def more
    @rooms = Room.where(public: true)
    render :index
    # redirect_to(@rooms)
  end
  # POST /rooms
  # POST /rooms.json

  def create
    name=params["name"]
    max =params["max_users_num"]
    token=SecureRandom.uuid
    room = Room.new
    room.name=name
    room.user_id=0
    room.max_users_num=max
    room.cur_users_num=0
    room.token = token
    room.video_id=0
    room.save
    id =Room.last.id
    redirect_to player_show_path(:room_id => id,:token => token)
  end

  def search
    id = params[:id]
    @room = Room.find_by_id(id)
    puts @room.name
    if @room!=nil and @room.cur_users_num<@room.max_users_num
      redirect_to player_show_path(:id => id)
    else

    end
  end

  # PATCH/PUT /rooms/1
  # PATCH/PUT /rooms/1.json
  def update
    respond_to do |format|
      if @room.update(room_params)
        format.html { redirect_to @room, notice: 'Room was successfully updated.' }
        format.json { render :show, status: :ok, location: @room }
      else
        format.html { render :edit }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rooms/1
  # DELETE /rooms/1.json
  def destroy
    @room.destroy
    respond_to do |format|
      format.html { redirect_to rooms_url, notice: 'Room was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_room
      @room = Room.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def room_params
      params.require(:room).permit(:name, :owner, :max_users_num, :cur_users_num, :public)
    end

end
