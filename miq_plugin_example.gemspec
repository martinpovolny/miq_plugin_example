$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "miq_plugin_example/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "ovirt_dashboard_test_miq_plugin"
  s.version     = MiqPluginExample::VERSION
  s.authors     = ["Martin Povolny", "Vojtech Szocs"]
  s.email       = ["mpovolny@redhat.com", "vszocs@redhat.com"]
  s.homepage    = "http://www.manageiq.org"
  s.summary     = "oVirt dashboard test ManageIQ plugin"
  s.description = "oVirt dashboard test ManageIQ plugin"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.0.0", ">= 5.0.0.1"

  s.add_development_dependency "sqlite3"
end
