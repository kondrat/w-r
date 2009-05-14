<?php echo $javascript->link('timer',false);?>
<div class="intervals index clearfix">
	<div class="span-8">
		<div class="chessKnob work"> <?php __('Work');?></div>
		<p class="clock clock1" id="clock1">00:00:00</p>
		<p id="t"></p>
		<p id="sec"></p>
		<p id="k"></p>
	</div>
	<div class="span-8 last">
		<div class="chessKnob rest"> <?php __('Rest');?></div>
		<p class="clock clock2" id="clock2">00:00:00</p>
	</div>

</div>
<h2><?php __('Interval');?></h2>
<a onclick="openWin(this, 'r-w', 550, 220, 0); return false" href="http://localhost/w-r">
<?php __('In new window');?>
</a>