class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]
    before_action :ensure_logged_out, only: [:create]

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid username/password"], status: 422
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render "api/users/show"
        else
            render json: ["Not logged in!"], status: 404
        end
    end
end