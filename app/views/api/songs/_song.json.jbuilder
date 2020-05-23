json.extract! song, :id, :title, :genre, :description, :tags, :artist_id
json.songUrl url_for(song.song) if song.song.attached?