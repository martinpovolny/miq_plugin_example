class ApplicationHelper::Toolbar::DemoCenter < ApplicationHelper::Toolbar::Basic
  #custom_content('custom', :partial => 'demo/demo_toolbar')
  button_group('demo_bg', [
    button(
      :vm_ownership,
      nil, #'pficon pficon-user fa-lg',
      N_('set ownership for the selected items'),
      N_('set ownership'),
      #:url_parms => "main_div",
			:data  => {#'toggle'        => 'modal',
                 #'target'        => '#modal_param_div',
                 'function'      => 'sendDataWithRx',
                 'function-data' => '{"type": "demo", "operation": "shutdown", "timeout": 1}'}
    ),
  ])
end
