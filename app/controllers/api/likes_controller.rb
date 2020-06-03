class Api::LikesController < ApplicationController
   
    def index
        @likes = Like.where(user_id: current_user.id)
    end

    def show 
        @likes = Like.where(user_id: params[:id])
        render :show
    end

    def create 
        @like = Like.new(like_params)

        if @like.save!
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy 
        @like = Like.find(params[:id])
        @like.destroy
        render :show
    end

    private

    def like_params
        params.require(:like).permit(:song_id, :user_id)
    end

end