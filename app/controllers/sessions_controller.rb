class SessionsController < ApplicationController
  include SessionsHelper
  def new
      redirect_to videos_path if logged_in?
  end


  def create
    user = User.find_by_name(params[:session][:name])
    if user && user.authenticate(params[:session][:password])
      if params[:session][:remember_me] == '1'
        remember(user)
      else
        forget(user)
      end
      log_in user
      redirect_to videos_path
    else
      flash.now[:danger] = "登录失败，用户名/密码错误！"
      render :new
    end
  end


  def destroy  #登出
    log_out if logged_in?
    redirect_to login_path
  end
end
