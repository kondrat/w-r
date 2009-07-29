<?php echo $javascript->link(array('jquery.cookie','jquery.form'),false);?>

<?php echo $javascript->link('project',false);?>

<div class="projects index">
	
	<div class="newProject"><?php echo $html->link(__('New Project', true), array('action'=>'add')); ?></div>
	<div class="newProjectWrapper span-15 last hide">
	<div class="projects form">
			<?php echo $form->create('Project');?>

				<?php
					echo $form->input('name');
				?>
				
					<?php echo $this->element('color/color', array('cache' => false)); ?>
					<?php echo $form->submit('Submit',array('class'=>'projectSubmit'));?>
					<?php echo $form->end();?>

			</div>
	</div>
			<?php if( isset($this->params['paging']['Project']['pageCount']) && $this->params['paging']['Project']['pageCount'] > 1 ): ?>
					<?php echo $paginator->sort('name');?>
					<?php echo $paginator->sort('color');?>
					<?php echo $paginator->sort('created');?>
			<?php endif ?>
					<br />
					<br />
	<div class="clearfix">
		<?php if( isset($projects) && $projects != array() ):?>
			<?php $i = 0; ?>
			<?php foreach ($projects as $project): ?>
				
					<div class="projectList span-15">

								<div class="projectPreview" style="color: <?php echo $project['Project']['color']; ?>;background-color:#fff">
									<?php echo $project['Project']['name']; ?>
								</div>
							
						
							
							
							<div class="projectCreated">
								<?php echo __('Created',true).'&nbsp;'.$time->relativeTime($project['Project']['created'],array('format' =>'j/n/y','end'=>'+ 1 week'), false); ?>
								<?php //echo __('Created',true).'&nbsp;'.$time->niceShort($project['Project']['created']); ?>
							</div>	
													
							<div class="projectActions" style="float:right; margin: -32px 0 0 0;">
								<?php //echo $html->link(__('View', true), array('action'=>'view', $project['Project']['id'])); ?>
								<?php echo $html->link(__('Edit', true).'&nbsp;&nbsp;'.$html->image("icons/edit_2.png",array('class'=>'projectEditImg')), array('action'=>'edit', $project['Project']['id']),array('class'=>'projectEdit'),null,false); ?>
								&nbsp;
								<?php echo $html->link(__('Delete', true).'&nbsp;&nbsp;'.$html->image("icons/delete_2.png",array('class'=>'projectDelImg')), array('action'=>'delete', $project['Project']['id']), array('class'=>'projectDel'), sprintf(__('Are you sure you want to delete # %s?', true), $project['Project']['id']) , false); ?>
							</div>
							<div style="clear:both;"></div>
							
							<div class="projectDataEdit hide">
								<?php echo $form->create('Project',array('id'=> 'formEdit'.$i));?>
									<fieldset>
								 		<legend><?php __('Edit Project');?></legend>
								 		<div class="span-5">
											<?php
												echo $form->hidden('id', array('value'=> $project['Project']['id'], 'id'=>'projectId'.$i) );
												echo $form->input('name', array('value'=> $project['Project']['name'],'id'=>'projectName'.$i) );
												echo $form->hidden('color', array('id'=>'projectColor'.$i) );
											?>
										</div>
										<div class="span-3">
											<?php echo $form->end('Submit');?>
										</div>
									
									<?php echo $this->element('color/color', array('cache' => false)); ?>

									
									</fieldset>
								
							</div>
							
					</div>
				<?php $i++;?>
			<?php endforeach; ?>

		<?php endif ?>
	</div>
	
</div>
		<div class="page">
			<?php if( isset($this->params['paging']['Project']['pageCount']) && $this->params['paging']['Project']['pageCount'] > 1 ): ?>
				<?php echo $paginator->prev($html->image('icons/left_arrow.png',array('class'=>'pageImgPrev','alt'=>__('Prev',true) ) ), array('escape' => false ) , $html->image('icons/left_arrow_disable.png'),  array('escape' => false ,'class'=>'menuPage'));?>
  				<?php echo $paginator->numbers( array('modulus'=>'5','separator'=>' &middot; ', 'class' => 'menuPage' ), null );?>
				<?php echo $paginator->next( $html->image('icons/right_arrow.png',array('class'=>'pageImgNext','alt'=>__('Next',true) ) ), array('escape' => false ), $html->image('icons/right_arrow_disable.png'), array('escape' => false ,'class'=>'menuPage'));?>
			<?php endif ?>
		</div>