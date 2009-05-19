<div class="intervals index">
<h2><?php __('Intervals');?></h2>
<p>
<?php
echo $paginator->counter(array(
'format' => __('Page %page% of %pages%, showing %current% records out of %count% total, starting on record %start%, ending on %end%', true)
));
?></p>
<table cellpadding="0" cellspacing="0">
<tr>
	<th><?php echo $paginator->sort('id');?></th>
	<th><?php echo $paginator->sort('hour_id');?></th>
	<th><?php echo $paginator->sort('project_id');?></th>
	<th><?php echo $paginator->sort('period');?></th>
	<th><?php echo $paginator->sort('type');?></th>
	<th><?php echo $paginator->sort('created');?></th>
	<th class="actions"><?php __('Actions');?></th>
</tr>
<?php
$i = 0;
foreach ($intervals as $interval):
	$class = null;
	if ($i++ % 2 == 0) {
		$class = ' class="altrow"';
	}
?>
	<tr<?php echo $class;?>>
		<td>
			<?php echo $interval['Interval']['id']; ?>
		</td>
		<td>
			<?php echo $interval['Interval']['hour_id']; ?>
		</td>
		<td>
			<?php echo $interval['Interval']['project_id']; ?>
		</td>
		<td>
			<?php echo $interval['Interval']['period']; ?>
		</td>
		<td>
			<?php echo $interval['Interval']['type']; ?>
		</td>
		<td>
			<?php echo $interval['Interval']['created']; ?>
		</td>
		<td class="actions">
			<?php echo $html->link(__('View', true), array('action'=>'view', $interval['Interval']['id'])); ?>
			<?php echo $html->link(__('Edit', true), array('action'=>'edit', $interval['Interval']['id'])); ?>
			<?php echo $html->link(__('Delete', true), array('action'=>'delete', $interval['Interval']['id']), null, sprintf(__('Are you sure you want to delete # %s?', true), $interval['Interval']['id'])); ?>
		</td>
	</tr>
<?php endforeach; ?>
</table>
</div>
<div class="paging">
	<?php echo $paginator->prev('<< '.__('previous', true), array(), null, array('class'=>'disabled'));?>
 | 	<?php echo $paginator->numbers();?>
	<?php echo $paginator->next(__('next', true).' >>', array(), null, array('class'=>'disabled'));?>
</div>
<div class="actions">
	<ul>
		<li><?php echo $html->link(__('New Interval', true), array('action'=>'add')); ?></li>
	</ul>
</div>
