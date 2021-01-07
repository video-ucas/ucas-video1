#1.5 wzm
class VideosController < ApplicationController
  include SessionsHelper
  before_action :request_logged, :only => [:create]
  skip_before_action :verify_authenticity_token, :only => [:create]
  #返回数据库中所有视频，对应展示视频界面
  def index
    @videos = Video.all
  end

  #接收管理员上传的数据，创建视频存入videos表，对应上传视频界面
  def create
    puts params
    video=Video.new
    video.name=params["name"]
    video.picture_url=params["picture_url"]
    video.video_url=params["video_url"]
    video.count=0
    if !video.save
      flash.now[:danger]="创建失败！"
      render videos_upload_path
    else
      redirect_to videos_path
    end
  end

  #对应上传视频界面，展示表单
  def upload
    user=User.find_by(id:session[:user_id])
    if user.admin.nil?
      flash[:danger]="无上传视频权限！"
      redirect_to videos_path
    end
  end

  private
  # 从数据库获取video列表
  def video_params
    params.require(:video).permit(:vid, :name, :video_url, :picture_url)
  end
end
