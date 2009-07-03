
	<?php echo $form->create('User', array('action' => 'login' ) ); ?>
	
	<fieldset>
	<legend><?php __('Login');?></legend>
		<?php echo $form->input('username', array('type' => 'text', 'size' => 20,'class' => 'form',  'label' => false) );?>
		<?php echo $form->error( 'username', array('class' => 'error', 'style' => 'color: red') ); ?>

		<?php echo $form->input('password', array( 'size' => 20,'class' => 'form',  'label' => false) );?>

		<p class="quickLoginForPas"><?php echo $html->link(__('Forgot your password?',true), array('admin'=> false, 'action' => 'reset'), array('class' => 'dm' ) ); ?></p>
		
		<?php //echo $html->link( 'Регистрация', array( 'action' => 'reg' ), array('class' => 'dm' ) ); ?>
		<?php echo $form->submit( __('Login',true), array('div'=>array('class'=>'quickLiginSubmit') ) ); ?>
		<?php echo $form->end( ); ?>
	</fieldset>
	<br />
	
	



