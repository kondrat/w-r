<?php 
/* SVN FILE: $Id$ */
/* Interval Fixture generated on: 2009-05-19 16:05:50 : 1242734810*/

class IntervalFixture extends CakeTestFixture {
	var $name = 'Interval';
	var $table = 'intervals';
	var $fields = array(
		'id' => array('type'=>'integer', 'null' => false, 'default' => NULL, 'key' => 'primary'),
		'hour_id' => array('type'=>'integer', 'null' => false, 'default' => NULL),
		'project_id' => array('type'=>'integer', 'null' => true, 'default' => NULL),
		'period' => array('type'=>'integer', 'null' => false, 'default' => NULL),
		'type' => array('type'=>'string', 'null' => false, 'default' => 'r', 'length' => 1),
		'created' => array('type'=>'datetime', 'null' => true, 'default' => NULL),
		'indexes' => array('PRIMARY' => array('column' => 'id', 'unique' => 1), 'id' => array('column' => 'id', 'unique' => 1), 'id_2' => array('column' => 'id', 'unique' => 0))
	);
	var $records = array(array(
		'id'  => 1,
		'hour_id'  => 1,
		'project_id'  => 1,
		'period'  => 1,
		'type'  => 'Lorem ipsum dolor sit ame',
		'created'  => '2009-05-19 16:06:50'
	));
}
?>