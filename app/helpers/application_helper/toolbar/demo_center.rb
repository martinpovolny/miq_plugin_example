class ApplicationHelper::Toolbar::DemoCenter < ApplicationHelper::Toolbar::Basic
  #custom_content('custom', :partial => 'demo/demo_toolbar')
  button_group('demo_bg', [
    button(
      :vm_ownership,
      nil, #'pficon pficon-user fa-lg',
      N_('Trigger angular1 component'),
      N_('angular.js'),
      #:url_parms => "main_div",
      :data  => {#'toggle'        => 'modal',
                 #'target'        => '#modal_param_div',
                 'function'      => 'sendDataWithRx',
                 'function-data' => '{"type": "demo", "operation": "angular1"}'}
    ),
    button(
      :angular2_demo,
      nil,
      N_('Trigger angular2+ component'),
      N_('angular'),
      :data  => {'function'      => 'sendDataWithRx',
                 'function-data' => '{"type": "demo", "operation": "angular"}'},
      :klass => ApplicationHelper::Button::ButtonWithoutRbacCheck
    ),
  ])
end
