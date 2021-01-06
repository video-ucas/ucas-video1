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
        elsif @room.token!=params[:token]
            flash[:danger]='房间邀请码错误'
            redirect_to rooms_path            
        end
        @url=Rails.application.config.video_url+'/static/qbl.mp4'
    end
end
