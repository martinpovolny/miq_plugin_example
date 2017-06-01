module MiqPluginExample
  class Engine < ::Rails::Engine
    isolate_namespace MiqPluginExample

    initializer 'plugin' do
      Menu::CustomLoader.register(
        Menu::Section.new(:spike, N_('Plugin'), 'fa fa-map-pin', [
          Menu::Item.new('plug', N_('Test'), 'miq_report', {:feature => 'miq_report', :any => true}, '/plug')
        ])
      )
    end
  end
end
