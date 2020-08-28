json.song do
  json.partial! "api/songs/song", song: @song
end

json.artist do
  json.set! @artist.id do 
    json.id @artist.id
    json.username @artist.username
  end
end