class RoomsController < ApplicationController
  before_action :set_room, only: [:show, :edit, :update, :destroy,:search]

  # GET /rooms
  # GET /rooms.json
  def index
    @rooms = Room.where(public:true).limit(8)
  end

  # GET /rooms/1
  # GET /rooms/1.json
  def show
  end

  # GET /rooms/new
  def new
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
    @room = Room.new(room_params)
    respond_to do |format|
      if @room.save
        format.html { redirect_to @room, notice: 'Room was successfully created.' }
        format.json { render :show, status: :created, location: @room }
      else
        format.html { render :new }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  def search
    # if params[:id].blank?
    #   puts params[:id]
    #   redirect_to rooms_path
    # else
    #   puts "nihao"
    # end
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
