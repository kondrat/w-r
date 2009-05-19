<?php echo $javascript->link('timer',false);?>
<div class="intervals index clearfix">
	<?php echo $form->create('Interval');?>
	<div class="span-8">
		<div class="chessKnob work"> <?php __('Work');?></div>
		<p class="clock clock1" id="clock1">00:00:00</p>
		<?php echo $form->hidden('Interval.work',array('value' => '00:00:00'));?>
	</div>
	<div class="span-8 last">
		<div class="chessKnob rest"> <?php __('Rest');?></div>
		<p class="clock clock2" id="clock2">00:00:00</p>
		<?php echo $form->hidden('Interval.rest',array('value' => '00:00:00'));?>
	</div>
	<div class="span-1" style="height: 10px; border: 2px solid #ccc; margin: 2px">
		<div style="margin: 0; width: 65%;height: 10px; background-color: #95ffca; float: left;"></div>
		<div style="margin: 0; width: 35%; height: 10px; background-color: #ff7d7d; float: left;"></div>
	</div>
	<div class="span-1" style="height: 10px; border: 2px solid #ccc; margin: 2px">
		<div style="margin: 0; width: 55%;height: 10px; background-color: #95ffca; float: left;"></div>
		<div style="margin: 0; width: 45%; height: 10px; background-color: #ff7d7d; float: left;"></div>
	</div>
</div>
<h2><?php __('Interval');?></h2>
<a onclick="openWin(this, 'r-w', 550, 220, 0); return false" href="http://localhost/w-r">
<?php __('In new window');?>
</a>
<?php echo $form->button('Submit Form', array('type'=>'submit','class'=>'addInterval')); ?>

<?php echo $form->end( );?>
<div class="addInterval">submit</div>