<?php echo $javascript->link('timer2',false);?>
<?php if ( isset($hoursSaved) && $hoursSaved != array() ) {
					$hourInt = null;
					$lastOpenHour = array_pop( $hoursSaved );
					
					foreach ($lastOpenHour['Interval'] as $lastOpenHourInt ) {
						$hourInt += $lastOpenHourInt['interval'];
					}
					
					
			} 

			

?>	

<?php $script = "
		var clockObj = new Date();
		var secInt = 0;
		var typeInt = 'rest';
		var hourDay = 0;
		var grafClass = 'graf0';
		var nextHour = 0;
					
		var workStamp = 0;
		var workDelta = 0;
		var workTotal = 0; //to restore
		var hourWork = 0;

		var restStamp = 0;
		var restDelta = 0;
		var restTotal = 0; //to restore
		var hourRest = 0;
			
		var loop = 0;
		var hourInt = ".$hourInt.";
		var graf = 0;


		var resHour,resMin, resSec;
		var sec = 0;
		var resMin = '00';
		var minut = 0;  //to restore
		var resHour = '00';
		var hour = 0;  //to restore
		var k = 0;
		var i = 0;
		
		var resHour2,resMin2, resSec2;
		var sec2 = 0;
		var resMin2 = '00';
		var minut2 = 0;  //to restore
		var resHour2 = '00';
		var hour2 = 0;  //to restore
		var k2 = 0;
		var i2 = 0;		"
?>

<?php echo $javascript->codeBlock($script,  array('allowCache'=>false,'safe'=>true,'inline'=>false));?>
<div class="intervals index clearfix">
	<?php echo $form->create('Interval');?>
	<div class="span-8">
		<div class="chessKnob work">
			<span><?php __('Work');?></span>
			<div class="plusWork">+</div>
		</div>
		<p class="clock clock1" id="clock1">00:00:00</p>
		
	</div>
	<div class="rest span-8 last">
		<div class="chessKnob rest">
			<span><?php __('Rest');?></span>
			<div class="plusRest">-</div>
		</div>
		<p class="clock clock2" id="clock2">00:00:00</p>
		
	</div>

<?php if ( isset($hoursSaved) && $hoursSaved != array() ): ?>	
	<?php foreach ( $hoursSaved as $hour ) : ?>
		<?php $work = $rest = 0;?>
		<?php foreach ( $hour['Interval'] as $interval ) {

			if ( $interval['type'] == 'work' ) {
				$work += $interval['interval'];
			} 
			if ( $interval['type'] == 'rest') {
				$rest = $interval['interval'];
			}
		}
		
		$work = floor($work/36);
		$rest = floor($rest/36);
		$title = '"Work: '.$work.'% | Rest: '.$rest.'%"';
		
		?>
		
		<div class="grafWrapper" title = <?php echo $title; ?>>
			<div class="graf0 graf span-1" style="height: 10px; border: 2px solid #ccc; margin: 2px">
				<div class="hourWork" style="width:<?php echo $work;?>%;margin: 0; height: 10px; background-color: #95ffca; float: left;" ></div>
				<div class="hourRest" style="width:<?php echo $rest;?>%;margin: 0; height: 10px; background-color: #ff7d7d; float: left;"></div>
			</div>
		</div>
	<?php endforeach ?>
<?php else: ?>

		<div class="grafWrapper">
			<div class="graf0 graf span-1" style="height: 10px; border: 2px solid #ccc; margin: 2px">
				<div class="hourWork" style="margin: 0; height: 10px; background-color: #95ffca; float: left;" ></div>
				<div class="hourRest" style="margin: 0; height: 10px; background-color: #ff7d7d; float: left;"></div>
			</div>
		</div>
		
<?php endif ?>
		
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
<div class="addInterval" style="cursor: pointer">stop</div>