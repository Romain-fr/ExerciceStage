Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

root 'pages#index'
get 'index' => 'pages#index'
get 'acknowledgements' => 'pages#acknowledgements'

post 'stage' => 'pages#create'
patch 'stage' => 'pages#sum'
delete 'stage' => 'pages#destroy_all'

delete 'stage/:id' => 'pages#destroy'

end
