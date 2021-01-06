class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create]
  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    #user = User.new

    if @user.save
      redirect_to videos_path
    else
      render 'new'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation)
  end

end