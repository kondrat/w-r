<?php
	echo $javascript->link(array('jquery.cookie','json2','vars','func','timer2','project','correction'));
?>
<div class="intervals index clearfix" style=" margin:0;">
	<?php //echo $form->create('Interval');?>
		<div class="timerControl clearfix">
			<div class="projectTitle span-3"><?php __('switch projects');?></div>
		</div>
    <div class="span-16 last topChessWrapper">
    	
	    	<div class="stopStart span-1">
					<!--	<div class="stopInterval" style="cursor: pointer;"><?php __('Press to stop');?></div>-->
					<!--<div class="startInterval" style="cursor: pointer;"><?php __('Press to start');?></div>-->
					<div class="stopInterval">Stop</div>
					<div class="startInterval">Go</div>
				</div>
				
        <div class="work span-7 prepend-1">
            <div class="chessKnob work2">           		
                <span><?php __('Work');?></span>                            
                <div class="minusWork"></div>
                <div class="minusWorkUndo"></div>
            </div>
        </div>

        <div class="rest span-7 last">
            <div class="chessKnob rest2">         	
                <span><?php __('Rest');?></span>              
                <div class="minusRest"></div>
                <div class="minusRestUndo"></div>
            </div>
        </div>
    </div>   
        <div class="projectWrapper span-12 prepend-2">
	      	<div class="projectMain">
						<div class="projectsNameWrpapper clearfix">
							<?php if ( isset( $projectUser ) && $projectUser != array() ): ?>
								<?php foreach ( $projectUser as $project ): ?>
									<div class="span-2 myProject" style="background-color:<?php echo $project['Project']['color'];?>;color:#000;" id="<?php echo 'project_'.$project['Project']['id'];?>"><?php echo $project['Project']['name'];?></div>
								<?php endforeach ?>
							<?php else: ?>
								<div class="span-2 myProject" style="background-color:#D2FFE9;color:green;" id="project_1">Work</div>
								<div class="span-2 myProject" style="background-color:#ffffae;color:olive;" id="project_2">Work2</div>
								<div class="span-2 myProject" style="background-color:#ddffff;color:teal;" id="project_3">Work3</div>
							<?php endif ?>
						</div>
	        	<div style="margin: 10px;"><?php echo $html->link(__('My projects',true),array('controller'=>'projects','action'=>'index')); ?></div>
	       	</div>
        </div>


    
    <!-- my projects block -->
    

      
        <div class="span-7 prepend-1">
            <div class="clock clock1" id="clock1">
            	<span>00:00:00</span>
            	<div class="clockBackground" ></div>
            </div>
            
        </div>
        <div class="span-7 last">
            <div class="clock clock2" id="clock2">
            	<span>00:00:00</span>
            	<div class="clockBackground" ></div>
            </div>
            
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
		
			<div class="grafWrapper span-14 last prepend-1">
				<div class="span-2  graf">
					<div class="grafConnector1"></div>
					<div class="grafConnector"></div>
				</div>
			</div>

	<?php endforeach ?>
	</div><!--grafWrapper-->
<?php else: ?>

		<div class="grafWrapper span-14 last prepend-1">
			<div class="span-2  graf ">
				<div class="grafConnector1"></div>
				<div class="grafConnector"></div>
			</div>
		</div>
		
<?php endif ?>
		

<?php //echo $form->end( );?>
	<div class="span-3 clear" style="margin: 5px 0;">
		<a onclick="openWin(this, 'r-w', 550, 220, 0); return false" href="http://localhost/w-r">
			<?php __('In small window');?>
		</a>
	</div>

	<div class="clear"></div>
	<?php if( !$session->check('Auth.User.id') ): ?>
	<!--ToDel-->
	<div style="background-color: #6CFFB6; display:none; border: 1px solid;">Green</div>
	<div style="background-color: #FF6666;display:none; border: 1px solid;">Red</div>
	<div id="testCorrection">correction test</div>
		
		<hr />
		<div class="quickLogin span-7 prepend-1">
			<?php echo $this->element('user/quickLogin', array( "cache" => false ) ); ?>
		</div>
		<div class="span-7 reg">
			<?php echo $html->link(__('Get Started—Join!',true), array('controller'=>'users','action'=>'reg') );?>
		</div>
	<?php endif ?>
	


</div><!--last-->

