	<br />
	<?php echo $form->create('User', array('action' => 'login' ) ); ?>
	
	<fieldset>
	<legend><?php __('Login');?></legend>
		<?php echo $form->input('username', array('type' => 'text', 'size' => 20,'class' => 'form',  'label' => false) );?>
		<?php echo $form->error( 'username', array('class' => 'error', 'style' => 'color: red') ); ?>

		<?php echo $form->input('password', array( 'size' => 20,'class' => 'form',  'label' => false) );?>
		<?php echo $form->input('auto_login', array('type' => 'checkbox', 'label' => __('Remember me',true))); ?>
		<?php echo $form->end( __('Login',true) ); ?>
		<p><?php echo $html->link(__('Forgot your password?',true), array('admin'=> false, 'action' => 'reset'), array('class' => 'dm' ) ); ?></p>
	</fieldset>
	<br />

			<?php echo $html->link( __('Join Us',true), array( 'action' => 'reg' ), array('class' => 'dm' ) ); ?>



