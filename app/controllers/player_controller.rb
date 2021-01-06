class PlayerController < ApplicationController
    def show
        @room_id=params[:room_id]
        @room=Room.find_by(id: @room_id)
        p @room
        if @room.nil?
            flash[:danger]='房间不存在'
            redirect_to rooms_path
        elsif @room.cur_users_num>=@room.max_users_num
            flash[:danger]='房间人数已达上限'
            redirect_to rooms_path
        end

    end
end
