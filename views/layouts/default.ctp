<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<?php echo $html->charset(); ?>
	<title>
		<?php __('pvr:'); ?>
		<?php echo $title_for_layout; ?>
	</title>
	<?php

	
		echo $html->meta('icon');
		echo $html->css('w-r');
		echo $html->css('w-r-u');
		echo $html->css('screen');
		//echo $html->css('print');
		echo '<!--[if IE]>';
		echo $html->css('ie');
		echo '<![endif]-->';

		echo $javascript->codeBlock('var path = "'.Configure::read('path').'";' );
		echo $javascript->link(array('jquery-1.3.2.min','jquery.form','ui.core','ui.draggable','common'));


		//echo $javascript->link('dbg/prettyPrint');

		echo $scripts_for_layout;
	?>
</head>
<body>
	<div class="container showgrid.">

			<div class="span-24">

		    	<p>
		    		<?php 

		    			echo $html->link(__('Home',true),array('controller'=>'intervals','action'=>'index')).'&nbsp';

		    			if ( $session->check('Auth.User.id') ){
		    				echo $html->link(__('Logout',true),array('controller'=>'users','action'=>'logout','admin'=>false)).'&nbsp';
		    			} else {
		    				echo $html->link(__('Login',true),array('controller'=>'users','action'=>'login')).'&nbsp';
		    			}
		    			echo $html->link(__('Albums',true),array('controller'=>'times','action'=>'index')).'&nbsp';
		    			echo $html->link(__('Images',true),array('controller'=>'images','action'=>'index')).'&nbsp';
		    			echo $html->link("Eng",array('lang'=>'en')).'&nbsp';
		    			echo $html->link("Рус",array('lang'=>'ru')).'&nbsp';
		    				if ($session->read('Auth.User.group_id') == '1') {
		    					echo $html->link(__('Admin Zone',true),array('controller'=>'pages','action'=>'index','admin'=>true),array('style'=>'color:#ffaeae;font-weight:bold') );
		    				}
		    		?>
		    	</p>
		    </div>
		    <div class="span-4">
		        Left sidebar
		        <hr />
		        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
		    </div>
		
		    <div class="span-16">
			        <div class="span-8">
			            <div class="rounded." style="background-color: #ccc; padding-left: 20px;">
										<?php
											if ($session->check('Auth.User.username')) {
												echo '<b>&laquo;'.$session->read('Auth.User.username').'&raquo;</b>';
											} elseif ( $session->check('guestKey') ) {
												echo '<b>&laquo;'.$session->read('guestKey').'&raquo;</b>';
											} else {
												echo 'Username';
											}
										?>
									</div>
			      	</div>
			        <div class="span-4">
			       		<?php echo date("l dS \of F"); ?>
			        </div>
			        <div class="span-4 last">
			            <?php __('Week'); 
			            echo ' '.date("W"); ?>
			        </div>
		        <div class="span-16 clear last myrr">
							<div class="fl span-16 last" style="font-weight:bold; position:relative;">
									<?php $session->flash(); ?>
							</div>
							<?php echo $content_for_layout; ?>
		        </div>
		    </div>
		    <div class="span-4 last">
		        Right sidebar
		        <hr />
						<div id="hourstat" style="position:absolute; top:50px;left:5px;">hourstat</div>
						<div id="test1">test1</div>
						<p class="margin:0;"> Data from app</p>
						<div id="test2"></div>
						<p style="margin:0"> real </p>
						
						<div id="test3">test3</div>
						
						<!--<div class="delCookie" style="cursor: pointer">delCookie</div>-->
						<div class="delWorkSession">
							<?php echo $html->link('Delete workSession',array('controller'=>'intervals','action'=>'delWorkSession'));?>
						</div>



		    </div>


	

		    <div class="span-24" style="border-top: 1px solid #eee; margin-top: 10px;color:#ccc;font-weight: bold">
		       work-rest &copy;<?php echo date('Y');?>
		    </div>
		
	</div>
	<?php echo $cakeDebug; ?>
</body>
</html>