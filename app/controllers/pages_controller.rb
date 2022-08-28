class PagesController < ApplicationController
  def home
    render inertia: "home-page", props: { name: "Imba" }
  end
end
