<div class="quickLoginInner span-11 push-1" style="margin-top:50px; padding:10px 30px;">
	<?php echo $form->create('User', array('action' => 'reset','class' => 'styled account_form') ); ?>         			
          			<?php echo $form->input('email', array('id'=>'UserEmailReset','size' => 60,'label'=>__('Enter your E-mail',true).":",'div'=>array('class'=>'resetInput'),'error'=>array('class'=>'err') ) ); ?>	
          			<?php echo $form->submit(__('Send me new password',true), array ('class' => 'submit1') ); ?>
	<?php echo $form->end(); ?>
</div>




