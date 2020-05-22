json.partial! "api/songs/song", song: @song

json.artist do
  json.set! @artist.id do 
    json.id @artist.id
    json.username @artist.username
  end
end