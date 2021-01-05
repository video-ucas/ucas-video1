class Room < ApplicationRecord

  class << self
    def init_data
      self.create(name:'海贼王直播间',owner:"吴玉荣",max_users_num:100,cur_users_num:30,public:true)
    end
  end

end
