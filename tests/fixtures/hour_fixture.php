<?php 
/* SVN FILE: $Id$ */
/* Hour Fixture generated on: 2009-05-19 16:05:14 : 1242734594*/

class HourFixture extends CakeTestFixture {
	var $name = 'Hour';
	var $table = 'hours';
	var $fields = array(
		'id' => array('type'=>'integer', 'null' => false, 'default' => NULL, 'key' => 'primary'),
		'user_id' => array('type'=>'integer', 'null' => false, 'default' => NULL),
		'start' => array('type'=>'datetime', 'null' => true, 'default' => NULL),
		'created' => array('type'=>'datetime', 'null' => true, 'default' => NULL),
		'indexes' => array('PRIMARY' => array('column' => 'id', 'unique' => 1), 'id' => array('column' => 'id', 'unique' => 0))
	);
	var $records = array(array(
		'id'  => 1,
		'user_id'  => 1,
		'start'  => '2009-05-19 16:03:14',
		'created'  => '2009-05-19 16:03:14'
	));
}
?>