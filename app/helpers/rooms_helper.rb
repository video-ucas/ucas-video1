module RoomsHelper
  def isFull(room)
    if room.cur_users_num<room.max_users_num
      return false
    else
      return true
    end
  end
end
