<div class="hours form">
<?php echo $form->create('Hour');?>
	<fieldset>
 		<legend><?php __('Add Hour');?></legend>
	<?php
		echo $form->input('user_id');
		echo $form->input('start');
	?>
	</fieldset>
<?php echo $form->end('Submit');?>
</div>
<div class="actions">
	<ul>
		<li><?php echo $html->link(__('List Hours', true), array('action'=>'index'));?></li>
	</ul>
</div>
