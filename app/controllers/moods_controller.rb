class MoodsController < ApplicationController
  def index
    @moods = Mood.all
  end
  def show
    @mood = Mood.find(params[:id])
  end
  def new
  end
  def create
    Mood.create(:name=>params[:name])
    redirect_to moods_path
  end
  def edit
  end
  def update
    mood = Mood.find(params[:id])
    mood.update(name:params[:name])
    redirect_to moods_path
  end
  def destroy
    mood = Mood.find(params[:id])
    mood.delete
    redirect_to moods_path
  end
end
