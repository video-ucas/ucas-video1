module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      if user = User.find_by(id: session[:user_id])
        self.current_user = user
      else
        reject_unauthorized_connection
      end
    end

    private

      def session
        key = Rails.application.config.session_options.fetch(:key)
        cookies.encrypted[key]&.symbolize_keys || {}
      end

  
  end
end
