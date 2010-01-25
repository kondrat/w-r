<?php
	if ( $workSession != array() ) {
		echo $html->scriptBlock( 'var hs2 = '.$workSession['Hour']['wsession'] ,array('allowCache' => false,'safe'=>true,'inline'=>false));
	}
	echo $html->script(array('jquery/jquery.cookie','json2','vars','func','timer2','project','correction'),false);	
?>
<div class="intervals index clearfix" style=" margin:0;">
	<?php //echo $form->create('Interval');?>
		<div class="timerControl clearfix">
			<div class="projectTitle span-3"><?php __('switch projects');?></div>
			<div class="currentProject">
				<span><?php __('Work');?></span>
				<div class="currentProjectBg"></div>
			</div>
		</div>
    <div class="span-16 last topChessWrapper">
    	
	    	<div class="stopStart span-1">
					<div class="stopInterval"></div>
					<div class="startInterval"></div>
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
                <div class="minusRestData hide">-20sec</div>
            </div>
        </div>
    </div>   
        <div class="projectWrapper span-12 prepend-2">
	      	<div class="projectMain">
	      		<div class="projectSelect"><?php __('Which project You are working on?');?></div>
	      		<div class="closeProjectSelect"></div>
						<div class="projectsNameWrpapper clearfix">
							<?php if ( isset( $projectUser ) && $projectUser != array() ): ?>
								<?php $i = 0;?>
								<?php foreach ( $projectUser as $project ): ?>
									
									<div class="span-3 myProject projectPreview " style="background-color:#fff;color:<?php echo $project['Project']['color'];?>;" id="<?php echo 'project_'.$project['Project']['id'];?>">
										<span><?php echo $project['Project']['name'];?></span>
										<div class="projectPreviewBg" style="background-color:<?php echo $project['Project']['color']; ?>"></div>
									</div>
								<?php $mm = ($i == 0)? '<hr style="margin-bottom: 10px;" />':null;?>
								<?php echo $mm;?>
								<?php $i++;?>
								<?php endforeach ?>
								
							<?php else: ?>
								<!--toDel-->
								<div class="span-2 myProject" style="background-color:#fff;color:green;" id="project_1">Work</div>
								<div class="span-2 myProject" style="background-color:#fff;color:olive;" id="project_2">Work</div>
								<div class="span-2 myProject" style="background-color:#fff;color:teal;" id="project_3">Work</div>
								
							<?php endif ?>
						</div>
	        	<div style="margin: 10px;"><?php echo $html->link(__('My projects',true),array('controller'=>'projects','action'=>'index')); ?></div>
	       	</div>
        </div>


    
    <!-- my projects block -->
    

      
        <div class="span-7 prepend-1">
            <div class="clock clock1" id="clock1">
            	<span>00:00:00</span>
            	<div class="clockBackground"></div>
            	<div class="clock1Current">00:00:00</div>
            </div>
            
        </div>
        <div class="span-7 last">
            <div class="clock clock2" id="clock2">
            	<span>00:00:00</span>
            	<div class="clockBackground"></div>
            	<div class="clock2Current">00:00:00</div>
            </div>
            
        </div>
      



		<div class="grafWrapper span-14 last prepend-1">
			<div class="span-2  graf ">
				<div class="grafConnector1"></div>
				<div class="grafConnector"></div>
			</div>
		</div>
		

		

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

		<div class="span-5 prepend-1 reg">
			<?php echo $html->link(__('Get Started—Join!',true), array('controller'=>'users','action'=>'reg') );?>
		</div>
	<?php endif ?>
	


</div><!--last-->

