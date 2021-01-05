json.extract! room, :id, :name, :owner, :max_users_num, :cur_users_num, :public, :created_at, :updated_at
json.url room_url(room, format: :json)
