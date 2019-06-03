module MiqPluginExample
  module ToolbarOverrides
    class XVmCenter < ::ApplicationHelper::Toolbar::Override
      def self.record_valid?(record)
        true
      end

      button_group('custom_monitoring', [
        select(
          :vm_monitoring_choice,
          'ff ff-monitoring fa-lg',
          t = N_('Custom Monitoring'),
          t,
          :items => [
            button(
              :vm_perf,
              'ff ff-monitoring fa-lg',
              N_('Show Capacity & Utilization data for this VM'),
              N_('Custom Utilization'),
              :url_parms => "?display=performance",
              :klass     => ApplicationHelper::Button::VmPerf),
            button(
              :vm_timeline,
              'ff ff-timeline fa-lg',
              N_('Show Timelines for this VM'),
              N_('Custom Timelines'),
              :url_parms => "?display=timeline",
              :klass     => ApplicationHelper::Button::VmTimeline),
            button(
              :vm_chargeback,
              'fa fa-file-text-o fa-lg',
              N_('Show Chargeback preview'),
              N_('Custom Chargeback Preview')
            ),
          ]
        ),
      ])
    end
  end
end
