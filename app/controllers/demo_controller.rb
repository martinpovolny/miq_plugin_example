class DemoController < ApplicationController
  before_action :check_privileges
  before_action :get_session_data
  after_action :cleanup_action
  after_action :set_session_data

  #include Mixins::GenericButtonMixin
  include Mixins::GenericListMixin
  include Mixins::GenericSessionMixin
  include Mixins::GenericShowMixin

  def textual_group_list
    [%i(properties tags), %i(relationships)]
  end
  helper_method :textual_group_list

  def self.display_methods
    %w(cloud_subnets floating_ips security_groups)
  end

  def self.table_name
    @table_name ||= 'demo'
  end

  def self.model
    'DemoVm'
  end

  def breadcrumb_name(_model)
    'Demo'
  end

  menu_section :plug
end
