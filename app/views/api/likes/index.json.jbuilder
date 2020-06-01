json.likes do
    @likes.each do |like|
      json.set! like.id do
        json.id like.id
        json.song_id like.song_id
        json.user_id like.user_id
      end
    end
  end