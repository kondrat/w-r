<?php 
/* SVN FILE: $Id$ */
/* Project Fixture generated on: 2009-05-16 16:05:21 : 1242478161*/

class ProjectFixture extends CakeTestFixture {
	var $name = 'Project';
	var $table = 'projects';
	var $fields = array(
		'id' => array('type'=>'integer', 'null' => false, 'default' => NULL, 'key' => 'primary'),
		'name' => array('type'=>'string', 'null' => true, 'default' => NULL, 'length' => 256),
		'user_id' => array('type'=>'integer', 'null' => false),
		'created' => array('type'=>'datetime', 'null' => true, 'default' => NULL),
		'modified' => array('type'=>'datetime', 'null' => true, 'default' => NULL),
		'indexes' => array('PRIMARY' => array('column' => 'id', 'unique' => 1), 'id' => array('column' => 'id', 'unique' => 1), 'id_2' => array('column' => 'id', 'unique' => 0))
	);
	var $records = array(array(
		'id'  => 1,
		'name'  => 'Lorem ipsum dolor sit amet',
		'user_id'  => 1,
		'created'  => '2009-05-16 16:49:21',
		'modified'  => '2009-05-16 16:49:21'
	));
}
?>