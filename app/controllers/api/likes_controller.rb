class Api::LikesController < ApplicationController
   
    def index
        @likes = Like.all
    end

    def show 
        @likes = Like.where(user_id: params[:id])
        render :show
    end

    def create 
        @like = Like.new(like_params)
        @like.artist_id = current_user.id

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    private

    def like_params
        params.require(:like).permit(:song_id, :user_id)
    end

end