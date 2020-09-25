# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.destroy_all
User.destroy_all
Song.destroy_all

require 'open-uri'

demo_user = User.create(username: "DemoAcc", email: "demo_account@email.com", password: "password")
bensound = User.create(username: "BenSound", email: "bens@email.com", password: "password")
dababy = User.create(username: "DaBaby", email: "baby@email.com", password: "password")
black_keys = User.create(username: "Black Keys", email: "bk@email.com", password: "password")
destinys_child = User.create(username: "Destiny's Child", email: "bey@email.com", password: "password")
scott_holmes = User.create(username: "Scott Holmes", email: "scott@email.com", password: "password")
jae = User.create(username: "Jae Song", email: "jae@hotmail.com", password: "password")
ravage = User.create(username: "22 Ravage", email: "savage@email.com", password: "password")

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
song13 = Song.create(title: "Chad Crouch", genre: "metal", description: "not bad not good", artist_id: scott_holmes.id)
song14 = Song.create(title: "Cyclical Memory", genre: "rock", description: "this song bumps", artist_id: scott_holmes.id)
song15 = Song.create(title: "Echos", genre: "indie", description: "hello hello hello...", artist_id: dababy.id)
song16 = Song.create(title: "Faster Faster", genre: "jazz", description: "slower slower", artist_id: dababy.id)
song17 = Song.create(title: "Lately", genre: "r&b", description: "what a bop", artist_id: jae.id)
song18 = Song.create(title: "Little Idea", genre: "hip-hop/rap", description: "this song is definitely a song", artist_id: jae.id)
song19 = Song.create(title: "Lobo Loco", genre: "instrumental", description: "crazy ol wolf", artist_id: ravage.id)
song20 = Song.create(title: "Radio", genre: "classical", description: "radio is dead", artist_id: ravage.id)
song21 = Song.create(title: "Rain", genre: "pop", description: "beautiful song", artist_id: jae.id)
song22 = Song.create(title: "Stomps and Claps", genre: "electronic", description: "tippy toes and taps", artist_id: destinys_child.id)
song23 = Song.create(title: "Tay Ploops", genre: "r&b", description: "amazing song", artist_id: black_keys.id)
song24 = Song.create(title: "The Rhine", genre: "hip-hop/rap", description: "lots of instruments making noise", artist_id: demo_user.id)

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
file13 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Stomps_and_Claps.mp3")
file14 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Little_Idea.mp3")
file15 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Cyclical_Memory.mp3")
file16 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/tay_ploops.mp3")
file17 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Lately.mp3")
file18 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Rain.mp3")
file19 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Radio.mp3")
file20 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Echos.mp3")
file21 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Lobo_Loco.mp3")
file22= open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Chad_Crouch.mp3")
file23 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/Faster_Faster.mp3")
file24 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/The_Rhine.mp3")

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
photo13 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/red-vinyl-record-3552948.jpg")
photo14 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/close-up-photo-of-gold-colored-and-black-condenser-682082.jpg")
photo15 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/amplifier-analogue-audio-bass-302871.jpg")
photo16 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/low-angle-view-of-lighting-equipment-on-shelf-257904.jpg")
photo17 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/close-up-photography-of-microphone-144429.jpg")
photo18 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/black-headphones-with-mobile-smartphone-6320.jpg")
photo19 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/black-and-white-cassette-tape-164727.jpg")
photo20 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/asian-black-and-white-boys-children-298297.jpg")
photo21 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/macro-photo-of-piano-keys-191240.jpg")
photo22 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/aluminum-audio-close-up-design-373632.jpg")
photo23 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/woman-holding-vinyl-record-2272854.jpg")
photo24 = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/man-in-black-top-wearing-headphones-showing-his-tattoos-838696.jpg")

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
song13.song.attach(io: file13, filename: 'Chad_Crouch.mp3')
song14.song.attach(io: file14, filename: 'Cyclical_Memory.mp3')
song15.song.attach(io: file15, filename: 'Echos.mp3')
song16.song.attach(io: file16, filename: 'Faster_Faster.mp3')
song17.song.attach(io: file17, filename: 'Lately.mp3')
song18.song.attach(io: file18, filename: 'Little_Idea.mp3')
song19.song.attach(io: file19, filename: 'Lobo_Loco.mp3')
song20.song.attach(io: file20, filename: 'Radio.mp3')
song21.song.attach(io: file21, filename: 'Rain.mp3')
song22.song.attach(io: file22, filename: 'Stomps_and_Claps.mp3')
song23.song.attach(io: file23, filename: 'tay_ploops.mp3')
song24.song.attach(io: file24, filename: 'The_Rhine.mp3')

song1.photo.attach(io: photo1, filename: 'black-cassette-tape-on-top-of-red-and-yellow.jpg')
song2.photo.attach(io: photo2, filename: 'bookcase-bookshelves.jpg')
song3.photo.attach(io: photo3, filename: 'man-wearing-yellow-jacket.jpg')
song4.photo.attach(io: photo4, filename: 'live-music.jpg')
song5.photo.attach(io: photo5, filename: 'black-record-vinyl-167092.jpg')
song6.photo.attach(io: photo6, filename: 'audio-e-guitars.jpg')
song7.photo.attach(io: photo7, filename: 'yellow-and-black-vinyl.jpg')
song8.photo.attach(io: photo8, filename: 'assorted-title-cassette-tapes-2796145.jpg')
song9.photo.attach(io: photo9, filename: 'person-gray-hoodie.jpg')
song10.photo.attach(io: photo10, filename: 'vintage-music.jpg')
song11.photo.attach(io: photo11, filename: 'macro-shot-audio-equalizer-744318.jpg')
song12.photo.attach(io: photo12, filename: 'black-vinyl-player-145707.jpg')
song13.photo.attach(io: photo13, filename: 'aluminum-audio-close-up-design-373632.jpg')
song14.photo.attach(io: photo14, filename: 'amplifier-analogue-audio-bass-302871.jpg')
song15.photo.attach(io: photo15, filename: 'asian-black-and-white-boys-children-298297.jpg')
song16.photo.attach(io: photo16, filename: 'black-and-white-cassette-tape-164727.jpg')
song17.photo.attach(io: photo17, filename: 'black-headphones-with-mobile-smartphone-6320.jpg')
song18.photo.attach(io: photo18, filename: 'close-up-photo-of-gold-colored-and-black-condenser-682082.jpg')
song19.photo.attach(io: photo19, filename: 'low-angle-view-of-lighting-equipment-on-shelf-257904.jpg')
song20.photo.attach(io: photo20, filename: 'macro-photo-of-piano-keys-191240.jpg')
song21.photo.attach(io: photo21, filename: 'close-up-photography-of-microphone-144429.jpg')
song22.photo.attach(io: photo22, filename: 'red-vinyl-record-3552948.jpg')
song23.photo.attach(io: photo23, filename: 'woman-holding-vinyl-record-2272854.jpg')
song24.photo.attach(io: photo24, filename: 'man-in-black-top-wearing-headphones-showing-his-tattoos-838696.jpg')

like1 = Like.create(user_id: demo_user.id, song_id: song1.id)
like2 = Like.create(user_id: demo_user.id, song_id: song17.id)
like3 = Like.create(user_id: demo_user.id, song_id: song23.id)