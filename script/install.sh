#!/bin/sh

if [ ! -f ../manageiq/app/models/demo.rb ]; then
echo <<EOD > app/models/demo.rb
class Demo < ApplicationRecord
end
EOD
fi

if [ ! -f ../manageiq-schema/db/migrate/*create_demo.rb ]; then
  echo <<EOD > db/migrate/$(date +'%Y%m%d%H%M%S')_create_demo.rb
class CreateDemo < ActiveRecord::Migration[5.0]
  def change
    create_table :demos do |t|
      t.bigint :vm_id
      t.string :name
      t.string :title
      t.boolean :foobar

      t.timestamps
    end
  end
end
EOD

if [ ! -f ../manageiq/bundler.d/plugin_demo.rb ]; then
echo <<EOD > bundler.d/plugin_demo.rb
override_gem 'manageiq-schema', :path => File.expand_path('../../manageiq-schema/', __dir__)
gem 'miq_plugin_example', :path => File.expand_path('../../miq_plugin_example/', __dir__)
EOD
fi

cd ../manageiq/
rails runner '200.times { |i| Demo.create(:name => "Demo #{i}", :title => "Title #{i}", :vm_id => rand(10_000), :foobar => rand(2) == 1); }'
