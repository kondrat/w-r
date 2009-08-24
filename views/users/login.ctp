<div class="inner_page">
	
	<fieldset class="fildsetReg">
		<legend><?php __('Login');?></legend>
		<?php echo $form->create('User', array('action' => 'login' ) ); ?>
		
		<?php echo $form->input('username', array('div'=>array("id"=>"usernameWrap","class"=>"formWrap"),'label'=>__('Username',true)	) ); ?>		

		<?php echo $form->input('password' , array('type' => 'password','div'=>array("id"=>"passWrap","class"=>"formWrap"), 'label'=>__('Password',true)	) ); ?>

		<?php echo $form->input('auto_login', array('type' => 'checkbox', 'label' => __('Remember Me',true),'div'=>array('class'=>'formWrap') ) ); ?>
		
				
		<p style="margin: 0 0 0 12em;"><?php echo $html->link(__('Forgot your password?',true), array('admin'=> false, 'action' => 'reset'), array('class' => 'dm' ) ); ?></p>
	</fieldset>
				<div class="submit clearfix">	
					<?php echo $form->button( __('Submit',true), array('type'=>'submit', 'id'=>'logSubmit','class'=>'span-3') ); ?>
				</div>
		<?php echo $form->end(); ?>
		<div class="reg" style="position:absolute; left:420px;top:30px;">
			<?php echo $html->link( __('Get Started - Join!',true), array( 'action' => 'reg' ), array('class' => '' ) ); ?>
		</div>
</div>



