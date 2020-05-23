class Api::SongsController < ApplicationController
    def index
        @songs = Song.all 
        if @songs
            render :index
        else
            render json: ["No songs to display"], status: 404
        end
    end

    def show
        @song = Song.find(params[:id])
        @artist = User.find(@song.artist_id)
        if @song 
            render :show
        else
            render json: ["Could not find song"], status: 404
        end
    end

    def create
        @song = Song.new(song_params)
        @artist = User.find(@song.artist_id)
        if @song.save
            render `api/songs/show`
        else
            render json: @song.errors.full_messages, status: 422
        end  
    end

    def destroy
        @song = Song.find(params[:id])
        if @song
            @song.destroy
            render "api/songs/show"
        else
            render json: ["Could not find song"], status: 404
        end
    end

    private

    def song_params
        params.require(:song).permit(:title, :genre, :description, :tags, :artist_id, :song)
    end
end