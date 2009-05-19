<?php
class Project extends AppModel {

	var $name = 'Project';
	var $validate = array(
		'id' => array('alphanumeric'),
		'name' => array('between'),
		'user_id' => array('numeric')
	);

	//The Associations below have been created with all possible keys, those that are not needed can be removed
	var $belongsTo = array(
		'User' => array(
			'className' => 'User',
			'foreignKey' => 'user_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);

}
?>