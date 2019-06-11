#MiqPluginExample::Engine.routes.draw do
Rails.application.routes.draw do
  get '/plug', to: 'plug#show'
  get '/red_hat_cloud_services', to: 'red_hat_cloud_services#show'

  get '/demo', to: 'demo#show_list'
  get "demo/show(/:id)", controller: 'demo', action: 'show'
  get "demo/show_list(/:id)", controller: 'demo', action: 'show_list'
  get "red_hat_cloud_services/show_list", controller: 'red_hat_cloud_services', action: 'show_list'
  post "demo/report_data", controller: 'demo', action: 'report_data'

end
