<div class="quickLoginInner">
	<?php echo $form->create('User', array('action' => 'login' ) ); ?>
	

	<h3><?php __('Login');?></h3>
		<?php echo $form->input('username', array('type' => 'text', 'size' => 20,'class' => 'form',  'label' => false) );?>
		<?php echo $form->error( 'username', array('class' => 'error', 'style' => 'color: red') ); ?>

		<?php echo $form->input('password', array( 'size' => 20,'class' => 'form',  'label' => false) );?>
		

		<div class="span-3">
	    <?php echo $form->input('auto_login', array('type' => 'checkbox', 'label' => __('Pls rem me',true))); ?>
		</div>
		<?php echo $form->submit( __('Login',true), array('div'=>array('class'=>'quickLiginSubmit'),'class'=>'span-3' ) ); ?>
		<?php echo $form->end( ); ?>
		<p class="quickLoginForPas clear"><?php echo $html->link(__('Forgot your password?',true), array('admin'=> false, 'controller'=>'users','action' => 'reset'), array('class' => '' ) ); ?></p>
</div>
	
	



