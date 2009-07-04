
	<?php echo $form->create('User', array('action' => 'login' ) ); ?>
	
	<fieldset>
	<legend><?php __('Login');?></legend>
		<?php echo $form->input('username', array('type' => 'text', 'size' => 20,'class' => 'form',  'label' => false) );?>
		<?php echo $form->error( 'username', array('class' => 'error', 'style' => 'color: red') ); ?>

		<?php echo $form->input('password', array( 'size' => 20,'class' => 'form',  'label' => false) );?>
		

		<div class="span-3">
	    <?php echo $form->checkbox('remember_me', array('class' => 'remember_me') );
						echo $form->label(__('remember_me',true),__('Pls rem me',true), array('class' => 'choice') );
			?>
		</div>
		<?php echo $form->submit( __('Login',true), array('div'=>array('class'=>'quickLiginSubmit, span-2') ) ); ?>
		<?php echo $form->end( ); ?>
		<p class="quickLoginForPas clear"><?php echo $html->link(__('Forgot your password?',true), array('admin'=> false, 'action' => 'reset'), array('class' => '' ) ); ?></p>

	</fieldset>
	<br />
	
	



