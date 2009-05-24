<?php echo $javascript->link('timer2',false);?>
<div class="intervals index clearfix">
	<?php echo $form->create('Interval');?>
	<div class="span-8">
		<div class="chessKnob work"> <?php __('Work');?></div>
		<p class="clock clock1" id="clock1">00:00:00</p>
		
	</div>
	<div class="span-8 last">
		<div class="chessKnob rest"> <?php __('Rest');?></div>
		<p class="clock clock2" id="clock2">00:00:00</p>
		
	</div>
	<div class="grafWrapper">
		<div class="graf0 graf span-1" style="height: 10px; border: 2px solid #ccc; margin: 2px">
			<div class="hourWork" style="margin: 0; height: 10px; background-color: #95ffca; float: left;"></div>
			<div class="hourRest" style="margin: 0; height: 10px; background-color: #ff7d7d; float: left;"></div>
		</div>
	</div>

</div>
<h2><?php __('Interval');?></h2>
<a onclick="openWin(this, 'r-w', 550, 220, 0); return false" href="http://localhost/w-r">
<?php __('In new window');?>
</a>
<div id="test1">test1</div>
<div id="test2">test2</div>
<p style="margin:0"> real </p>
<div id="test4">test4</div>
<div id="test3">test3</div>
<ul class="ultest"></ul>
<?php echo $form->end( );?>
<div class="addInterval" style="cursor: pointer">submit</div>