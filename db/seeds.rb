# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all

require 'open-uri'

demo_user = User.create(username: "DemoAcc", email: "demo_account@email.com", password: "password")
bensound = User.create(username: "BenSound", email: "bens@email.com", password: "password")
dababy = User.create(username: "DaBaby", email: "baby@email.com", password: "password")
black_keys = User.create(username: "BlackKeys", email: "bk@email.com", password: "password")
destinys_child = User.create(username: "Destiny's Child", email: "bey@email.com", password: "password")

song1 = Song.create(title: "Jazzy French", genre: "jazz", description: "This song is snazzy and a lil bit jazzy", artist_id: bensound.id)
song2 = Song.create(title: "Happy Rock", genre: "rock", description: "rock n roll, baby", artist_id: bensound.id)
song3 = Song.create(title: "Badass", genre: "rock", description: "hits hard", artist_id: bensound.id)
song4 = Song.create(title: "Clear Day", genre: "pop", description: "upbeat happy", artist_id: bensound.id)
song5 = Song.create(title: "Piano Moment", genre: "classical", description: "calming piano song", artist_id: bensound.id)
song6 = Song.create(title: "The Duel", genre: "instrumental", description: "good song for dueling", artist_id: bensound.id)
song7 = Song.create(title: "Robot Gypsy", genre: "jazz", description: "just your typical robot gypsy jazzy song", artist_id: demo_user.id)
song8 = Song.create(title: "Tupac Lives", genre: "hip-hop/rap", description: "Tupac is alive", artist_id: dababy.id)
song9 = Song.create(title: "Surfing", genre: "indie", description: "makes you want to surf", artist_id: black_keys.id)
song10 = Song.create(title: "A Ghost Waltz", genre: "metal", description: "makes you want to waltz with a ghost", artist_id: black_keys.id)
song11 = Song.create(title: "I am the Coyote", genre: "electronic", description: "howl at the moon", artist_id: destinys_child.id)
song12 = Song.create(title: "Soft and Nothing", genre: "r&b", description: "funky tune", artist_id: destinys_child.id)

file1 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/bensound-jazzyfrenchy.mp3")
file2 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/bensound-happyrock.mp3")
file3 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/bensound-badass.mp3")
file4 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/bensound-clearday.mp3")
file5 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/bensound-pianomoment.mp3")
file6 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/bensound-theduel.mp3")
file7 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/John_Bartmann_-_13_-_Robot_Gypsy_Jazz.mp3")
file8 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/John_Bartmann_-_18_-_Tupac_Lives.mp3")
file9 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Komiku_-_08_-_Surfing.mp3")
file10 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Loyalty_Freak_Music_-_02_-_A_ghost_Waltz.mp3")
file11 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Monplaisir_-_11_-_I_am_the_Coyote.mp3")
file12 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Soft_and_Furious_-_02_-_Soft_and_Nothing.mp3")

photo1 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/black-cassette-tape-on-top-of-red-and-yellow.jpg")
photo2 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/bookcase-bookshelves.jpg")
photo3 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/man-wearing-yellow-jacket.jpg")
photo4 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/live-music.jpg")
photo5 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/black-record-vinyl-167092.jpg")
photo6 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/audio-e-guitars.jpg")
photo7 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/yellow-and-black-vinyl.jpg")
photo8 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/assorted-title-cassette-tapes-2796145.jpg")
photo9 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/person-gray-hoodie.jpg")
photo10 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/vintage-music.jpg")
photo11 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/macro-shot-audio-equalizer-744318.jpg")
photo12 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/black-vinyl-player-145707.jpg")

song1.song.attach(io: file1, filename: 'jazzy.mp3')
song2.song.attach(io: file2, filename: 'happyrock.mp3')
song3.song.attach(io: file3, filename: 'badass.mp3')
song4.song.attach(io: file4, filename: 'clearday.mp3')
song5.song.attach(io: file5, filename: 'pianomoment.mp3')
song6.song.attach(io: file6, filename: 'theduel.mp3')
song7.song.attach(io: file7, filename: 'Robot_Gypsy_Jazz.mp3')
song8.song.attach(io: file8, filename: 'Tupac_Lives.mp3')
song9.song.attach(io: file9, filename: 'Surfing.mp3')
song10.song.attach(io: file10, filename: 'A_ghost_Waltz.mp3')
song11.song.attach(io: file11, filename: 'I_am_the_Coyote.mp3')
song12.song.attach(io: file12, filename: 'Soft_and_Nothing.mp3')

song1.photo.attach(io: photo1, filename: 'app/assets/photos/black-cassette-tape-on-top-of-red-and-yellow.jpg')
song2.photo.attach(io: photo2, filename: 'app/assets/photos/bookcase-bookshelves.jpg')
song3.photo.attach(io: photo3, filename: 'app/assets/photos/man-wearing-yellow-jacket.jpg')
song4.photo.attach(io: photo4, filename: 'app/assets/photos/live-music.jpg')
song5.photo.attach(io: photo5, filename: 'app/assets/photos/black-record-vinyl-167092.jpg')
song6.photo.attach(io: photo6, filename: 'app/assets/photos/audio-e-guitars.jpg')
song7.photo.attach(io: photo7, filename: 'app/assets/photos/yellow-and-black-vinyl.jpg')
song8.photo.attach(io: photo8, filename: 'app/assets/photos/assorted-title-cassette-tapes-2796145.jpg')
song9.photo.attach(io: photo9, filename: 'app/assets/photos/person-gray-hoodie.jpg')
song10.photo.attach(io: photo10, filename: 'app/assets/photos/vintage-music.jpg')
song11.photo.attach(io: photo11, filename: 'app/assets/photos/macro-shot-audio-equalizer-744318.jpg')
song12.photo.attach(io: photo12, filename: 'app/assets/photos/black-vinyl-player-145707.jpg')