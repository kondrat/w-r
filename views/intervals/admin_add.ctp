<div class="intervals form">
<?php echo $form->create('Interval');?>
	<fieldset>
 		<legend><?php __('Add Interval');?></legend>
	<?php
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
		<li><?php echo $html->link(__('List Intervals', true), array('action'=>'index'));?></li>
	</ul>
</div>
