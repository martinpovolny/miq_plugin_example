class TreeBuilderDemo < TreeBuilder
  def root_options
    {
      :text    => t = _('Demo'),
      :tooltip => t
    }
  end

  def x_get_tree_roots(count_only, _options)
    count_only_or_objects(count_only, Demo.all)
  end
end
