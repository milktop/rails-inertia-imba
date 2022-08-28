class ApplicationController < ActionController::Base
  include Pagy::Backend
  include InertiaFlash

  rescue_from ActiveRecord::RecordNotFound, :with => :render_404

  def sort_params default = 'name asc'
    params[:sort].present? ? params[:sort].sub("_", " ") : default
  end

  def render_404
    render inertia: "not-found-page", props: { message: "Page not found" }
  end
  
end
