#MiqPluginExample::Engine.routes.draw do
Rails.application.routes.draw do
  get '/plug', to: 'plug#show'
end
