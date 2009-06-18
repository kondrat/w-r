<?php echo $javascript->link('jquery.cookie',false);?>
<?php echo $javascript->link('json2',false);?>

<?php echo $javascript->link('timer2',false);?>
<?php echo $javascript->link('project',false);?>

<?php 
	/*
	$hourInt = 0;
	if ( isset($hoursSaved) && $hoursSaved != array() ) {

					$lastOpenHour = array_pop( $hoursSaved );
					
					foreach ($lastOpenHour['Interval'] as $lastOpenHourInt ) {
						$hourInt += $lastOpenHourInt['interval'];
					}
					
					
			} 
		*/
?>	
<?php //echo $html->link('test ext link','http://mail.ru' );?>
<div class="intervals index clearfix">
	<?php echo $form->create('Interval');?>
    <div class="span-16 last topChessWrapper">
        <div class="span-8">
            <div class="chessKnob work">
                <span><?php __('Work');?></span>
                <div class="plusWork">+</div>
            </div>
        </div>

        <div class="rest span-8 last">
            <div class="chessKnob rest">
                <span><?php __('Rest');?></span>
                <div class="minusRest">-</div>
            </div>
        </div>
        <div class="projectTitle"><?php __(' switch projects');?></div>
        <div class="projectWrapper span-14 prepend-1">
            <div class="projectMain">
				<div class="projectsNameWrpapper clearfix">
					<?php if ( isset( $projectUser ) && $projectUser != array() ): ?>
						<?php foreach ( $projectUser as $project ): ?>
							<div class="span-2 myProject"><?php echo $project['Project']['name'];?></div>
						<?php endforeach ?>
					<?php else: ?>
						<div class="span-2 myProject">Work</div>
						<div class="span-2 myProject">Work2</div>
						<div class="span-2 myProject">Work3</div>
					<?php endif ?>
				</div>
                <div style="margin: 10px;"><?php echo $html->link(__('My projects',true),array('controller'=>'projects','action'=>'index')); ?></div>
            </div>
        </div>


	</div>
    
    <!-- my projects block -->
    

      
        <div class="span-8">
            <p class="clock clock1" id="clock1">00:00:00</p>
        </div>
        <div class="span-8 last">
            <p class="clock clock2" id="clock2">00:00:00</p>
        </div>
      

<?php if ( isset($hoursSaved) && $hoursSaved != array() ): ?>	
	<div class="grafWrapper" >
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
		if ( ($work + $rest) == 99 ) {
			$rest = 100 - $work;
		}
		$title = '"Work: '.$work.'% | Rest: '.$rest.'%"';
		
		?>
		
		<!--
			<div class="graf span-2" style="height: 10px; border: 2px solid #ccc; margin: 2px" title = <?php echo $title; ?>>
				<div class="hourWork" style="width:<?php echo $work;?>%;margin: 0; height: 10px; background-color: #95ffca; float: left;" ></div>
				<div class="hourRest" style="width:<?php echo $rest;?>%;margin: 0; height: 10px; background-color: #ff7d7d; float: left;"></div>
			</div>
		-->
			<div class="grafWrapper">
				<div class=" graf span-2" style="height: 10px; border: 2px solid #ccc; margin: 2px">
					<div class="interval hourRest" style="margin: 0; height: 10px; background-color: #ff7d7d; float: left;"></div>
				</div>
			</div>

	<?php endforeach ?>
	</div>
<?php else: ?>

		<div class="grafWrapper">
			<div class=" graf span-2" style="height: 10px; border: 2px solid #ccc; margin: 2px">
				<div class="interval hourRest" style="margin: 0; height: 10px; background-color: #ff7d7d; float: left;"></div>
			</div>
		</div>
		
<?php endif ?>
		
</div>
<?php echo $form->end( );?>

	<?php //echo $form->create('Project');?>
		<?php //echo $form->input('name');?>
	<?php //echo $form->end(__('Submit',true));?>


<a onclick="openWin(this, 'r-w', 550, 220, 0); return false" href="http://localhost/w-r">
<?php __('In new window');?>
</a>
<div id="test1">test1</div>
<div id="test2">test2</div>
<p style="margin:0"> real </p>
<div id="test4">test4</div>
<div id="test3">test3</div>
<ul class="ultest"></ul>

<div class="stopInterval" style="cursor: pointer">stop</div>
<div class="startInterval" style="cursor: pointer">start</div>
<div class="addPlus" style="cursor: pointer">Plus</div>
<div class="addMinus" style="cursor: pointer">Minus</div>
<div class="delCookie" style="cursor: pointer">delCookie</div>