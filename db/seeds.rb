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

demoUser = User.create(username: "DemoAcc", email: "demo_account@email.com", password: "password")

song1 = Song.create(title: "JazzyFrench", genre: "jazz", description: "This song is snazzy and a lil bit jazzy", artist_id: demoUser.id)

file = open("https://jaecloud-seeds.s3.us-east-2.amazonaws.com/bensound-jazzyfrenchy.mp3")

song1.song.attach(io: file, filename: 'jazzy.mp3')