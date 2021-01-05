module ApplicationCable
  class Connection < ActionCable::Connection::Base
    @@i=1
    identified_by :current_user

    def connect
      
      self.current_user = @@i 
      @@i+=1
    end

  
  end
end
