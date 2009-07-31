<?php echo $javascript->link(array('jquery.limit-1.2','jquery.cookie','jquery.form'),false);?>

<?php echo $javascript->link('project',false);?>

<div class="projects index">
	
	<div class="newProject"><?php echo $html->link(__('New Project', true), array('action'=>'add')); ?></div>



			<div class="newProjectWrapper hide">
				<?php $i=1000;?>
				<?php echo $form->create('Project',array('id'=> 'formEdit'.$i));?>
					<fieldset class="projectDataEditFileds">
				 		<legend><?php __('Add Project');?></legend>

						<div class="projectPreview span-3 push-5" style="color: green">
							<?php echo __("Work",true); ?>
							<div class="projectPreviewBg" style="background-color:green"></div>
						</div>
						
				 		<div class="span-5 clear">
							<?php
								echo $form->input('name', array('value'=> __('Work',true), 'id'=>'MyInput') );
								echo $form->hidden('color');
							?>
							<span id="charsLeft" class="span-1" ></span>&nbsp;Left		
						</div>
					
					<?php echo $this->element('color/color', array('cache' => false)); ?>
						<div class="span-3">
							<?php echo $form->end('Submit');?>
						</div>
					
					</fieldset>
				
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
				<?php $stl=( $i == 4  && $this->params['paging']['Project']['page'] == 1 )?'5px':'1px'; ?>
					<div class="projectList span-15" style="border-bottom:<?php echo $stl;?> solid green;">

								<div class="projectPreview span-3" style="color: <?php echo $project['Project']['color']; ?>;">
									<?php echo $project['Project']['name']; ?>
									<div class="projectPreviewBg" style="background-color:<?php echo $project['Project']['color']; ?>"></div>
								</div>

							<div class="projectCreated clear">
								<?php echo __('Created',true).'&nbsp;'.$time->relativeTime($project['Project']['created'],array('format' =>'j/n/y','end'=>'+ 1 week'), false); ?>
								<?php //echo __('Created',true).'&nbsp;'.$time->niceShort($project['Project']['created']); ?>
							</div>	
													
							<div class="projectActions" style="float:right; margin: -32px 0 0 0;">
								<?php echo $html->link(__('Edit', true).'&nbsp;&nbsp;'.$html->image("icons/edit_2.png",array('class'=>'projectEditImg')), array('action'=>'edit', $project['Project']['id']),array('class'=>'projectEdit'),null,false); ?>
								&nbsp;
								<?php echo $html->link(__('Delete', true).'&nbsp;&nbsp;'.$html->image("icons/delete_2.png",array('class'=>'projectDelImg')), array('action'=>'delete', $project['Project']['id']), array('class'=>'projectDel'), sprintf(__('Are you sure you want to delete # %s?', true), $project['Project']['id']) , false); ?>
							</div>
							<div style="clear:both;"></div>
							
							<div class="projectDataEdit hide">
								<?php echo $form->create('Project',array('id'=> 'formEdit'.$i));?>
									<fieldset class="projectDataEditFileds">
								 		<legend><?php __('Edit Project');?></legend>

										<div class="projectPreview span-3 push-5" style="color: <?php echo $project['Project']['color']; ?>;">
											<?php echo $project['Project']['name']; ?>
											<div class="projectPreviewBg" style="background-color:<?php echo $project['Project']['color']; ?>"></div>
										</div>
										<span id="charsLeft<?php echo $i;?>" class="span-1" ></span>&nbsp;Left
										
										<script type="text/javascript">
    									$("#<?php echo 'projectName'.$i;?>").limit('140');
										</script>

								 		<div class="span-5 clear">
											<?php
												echo $form->hidden('id', array('value'=> $project['Project']['id'], 'id'=>'projectId'.$i) );
												echo $form->input('name', array('value'=> $project['Project']['name'],'id'=>'projectName'.$i) );
												echo $form->hidden('color', array('id'=>'projectColor'.$i) );
											?>
										</div>
									
									<?php echo $this->element('color/color', array('cache' => false)); ?>
										<div class="span-3">
											<?php echo $form->end('Submit');?>
										</div>
									
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