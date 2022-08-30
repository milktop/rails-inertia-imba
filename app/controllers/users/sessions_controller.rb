# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  skip_before_action :verify_authenticity_token, :only => [:create]

  # GET /resource/sign_in
  def new
    render inertia: "login-page"
  end

  # POST /resource/sign_in
  def create
    user = User.find_by(email: params[:email])
    if user && user.valid_password?(params[:password])
      sign_in user
      redirect_to root_path, notice: "Logged in"
    else
      redirect_back fallback_location: new_user_session_path, inertia: { errors: { email: ["Invalid email or password"] } }
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
