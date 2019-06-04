# MiqPluginExample
Short description and motivation.

## Usage
How to use my plugin.

## Installation
Add this line to your application's Gemfile:

```ruby
gem 'miq_plugin_example'
```

And then execute:
```bash
$ bundle
```

Or install it yourself as:
```bash
$ gem install miq_plugin_example
```

## Contributing
Contribution directions go here.

## License
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).


# Setting up ManageIQ for the plugin

To have all parts of the demo working you need to follow the steps below.


## Include the plugin into manageiq:

 1. edit `../manageiq/bundler.d/plugin_demo.rb`
 1. add the following lines lines:
```
override_gem 'manageiq-schema', :path => File.expand_path('../../manageiq-schema/', __dir__)
gem 'miq_plugin_example', :path => File.expand_path('../../miq_plugin_example/', __dir__)
```

This includes the plugin as well as overrides your `manageiq-schema`. Changes to `manageiq-schema` are needed

## Create a migration:

 1. checkout `manageiq-schema` into `../manageiq-schema`.
 1. create a migration:
```
echo <<EOD > db/migrate/20190531141045_create_demo.rb
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
```
FIXME: rails command-line to create migration
 1. run the migration `bundle exec rake db:migrate`

## Prepare a model:

 1. Under `manageiq` create `app/models/demo.rb`

echo <<EOD > app/models/demo.rb
class Demo < ApplicationRecord
end
EOD
fi

 1. Feed demo data:
```
rails runner '200.times { |i| Demo.create(:name => "Demo #{i}", :title => "Title #{i}", :vm_id => rand(10_000), :foobar => rand(2) == 1); }'
```
