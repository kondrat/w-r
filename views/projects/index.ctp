<?php echo $javascript->link('jquery.cookie',false);?>

<?php echo $javascript->link('project',false);?>

<div class="projects index">
	<p><?php echo $html->link(__('New Project', true), array('action'=>'add')); ?></p>

	

					<?php echo $paginator->sort('name');?>
					<?php echo $paginator->sort('color');?>
					<?php echo $paginator->sort('created');?>
					<br />
					<br />
	<div class="clearfix">
		<?php foreach ($projects as $project): ?>
			
				<div class="projectList span-15">
					

										
						
							<div class="projectPreview">
								<?php echo $project['Project']['name']; ?>
							</div>
						
					
						<?php echo $project['Project']['color']; ?>
						
						<div class="projectCreated">
							<?php echo __('Created',true).'&nbsp;'.$time->relativeTime($project['Project']['created'],array('format' =>'j/n/y','end'=>'+ 1 week'), false); ?>
							<?php //echo __('Created',true).'&nbsp;'.$time->niceShort($project['Project']['created']); ?>
						</div>	
												
						<div class="projectActions" style="float:right; margin: -32px 0 0 0;">
							<?php //echo $html->link(__('View', true), array('action'=>'view', $project['Project']['id'])); ?>
							<?php echo $html->link(__('Edit', true).'&nbsp;&nbsp;'.$html->image("icons/edit.png"), array('action'=>'edit', $project['Project']['id']),null,null,false); ?>
							&nbsp;
							<?php echo $html->link(__('Delete', true).'&nbsp;&nbsp;'.$html->image("icons/delete.png"), array('action'=>'delete', $project['Project']['id']), null, sprintf(__('Are you sure you want to delete # %s?', true), $project['Project']['id']) , false); ?>
						</div>
						<div style="clear:both;"></div>

						
				</div>
		
		<?php endforeach; ?>
	</div>
	
</div>
		<div class="page">
			<?php if( isset($this->params['paging']['Project']['pageCount']) && $this->params['paging']['Project']['pageCount'] > 1 ): ?>
				<?php echo $paginator->prev($html->image('icons/left_arrow.png',array('class'=>'pageImgPrev','alt'=>__('Prev',true) ) ), array('escape' => false ) , $html->image('icons/left_arrow_disable.png'),  array('escape' => false ,'class'=>'menuPage'));?>
  				<?php echo $paginator->numbers( array('modulus'=>'5','separator'=>' &middot; ', 'class' => 'menuPage' ), null );?>
				<?php echo $paginator->next( $html->image('icons/right_arrow.png',array('class'=>'pageImgNext','alt'=>__('Next',true) ) ), array('escape' => false ), $html->image('icons/right_arrow_disable.png'), array('escape' => false ,'class'=>'menuPage'));?>
			<?php endif ?>
		</div>