class PlayerController < ApplicationController
    before_action :request_logged
    def show
        @room_id=params[:room_id]
        @room=Room.find_by(id: @room_id)
        #房间不存在
        if @room.nil?
            flash[:danger]='房间不存在'
            redirect_to videos_path

            #房间人数达到上限
        elsif @room.cur_users_num>=@room.max_users_num
            flash[:danger]='房间人数已达上限'
            redirect_to videos_path

            #无效邀请码
        elsif @room.token!=params[:token]
            flash[:danger]='Invalid Invitation Code'
            redirect_to videos_path            
        end
        @url=Rails.application.config.video_url+@room.video.video_url
    end
end
