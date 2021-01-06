#1.5 wzm
class VideosController < ApplicationController
  def index
    @videos = Video.limit(8)
  end

  private
  # 从数据库获取video列表
  def video_params
    params.require(:video).permit(:vid, :name, :video_url, :picture_url)
  end
end
