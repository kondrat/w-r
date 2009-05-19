<div class="hours form">
<?php echo $form->create('Hour');?>
	<fieldset>
 		<legend><?php __('Edit Hour');?></legend>
	<?php
		echo $form->input('id');
		echo $form->input('user_id');
		echo $form->input('start');
	?>
	</fieldset>
<?php echo $form->end('Submit');?>
</div>
<div class="actions">
	<ul>
		<li><?php echo $html->link(__('Delete', true), array('action'=>'delete', $form->value('Hour.id')), null, sprintf(__('Are you sure you want to delete # %s?', true), $form->value('Hour.id'))); ?></li>
		<li><?php echo $html->link(__('List Hours', true), array('action'=>'index'));?></li>
	</ul>
</div>
