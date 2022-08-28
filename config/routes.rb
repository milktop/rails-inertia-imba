Rails.application.routes.draw do
  resources :products
  get 'pages/home'
  root "pages#home"
end
