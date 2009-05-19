<div class="hours view">
<h2><?php  __('Hour');?></h2>
	<dl><?php $i = 0; $class = ' class="altrow"';?>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('Id'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $hour['Hour']['id']; ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('User Id'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $hour['Hour']['user_id']; ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('Start'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $hour['Hour']['start']; ?>
			&nbsp;
		</dd>
		<dt<?php if ($i % 2 == 0) echo $class;?>><?php __('Created'); ?></dt>
		<dd<?php if ($i++ % 2 == 0) echo $class;?>>
			<?php echo $hour['Hour']['created']; ?>
			&nbsp;
		</dd>
	</dl>
</div>
<div class="actions">
	<ul>
		<li><?php echo $html->link(__('Edit Hour', true), array('action'=>'edit', $hour['Hour']['id'])); ?> </li>
		<li><?php echo $html->link(__('Delete Hour', true), array('action'=>'delete', $hour['Hour']['id']), null, sprintf(__('Are you sure you want to delete # %s?', true), $hour['Hour']['id'])); ?> </li>
		<li><?php echo $html->link(__('List Hours', true), array('action'=>'index')); ?> </li>
		<li><?php echo $html->link(__('New Hour', true), array('action'=>'add')); ?> </li>
	</ul>
</div>
