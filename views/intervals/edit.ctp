<div class="intervals form">
<?php echo $form->create('Interval');?>
	<fieldset>
 		<legend><?php __('Edit Interval');?></legend>
	<?php
		echo $form->input('id');
		echo $form->input('hour_id');
		echo $form->input('project_id');
		echo $form->input('period');
		echo $form->input('type');
	?>
	</fieldset>
<?php echo $form->end('Submit');?>
</div>
<div class="actions">
	<ul>
		<li><?php echo $html->link(__('Delete', true), array('action'=>'delete', $form->value('Interval.id')), null, sprintf(__('Are you sure you want to delete # %s?', true), $form->value('Interval.id'))); ?></li>
		<li><?php echo $html->link(__('List Intervals', true), array('action'=>'index'));?></li>
	</ul>
</div>
