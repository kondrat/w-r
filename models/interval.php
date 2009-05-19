<?php
class Interval extends AppModel {

	var $name = 'Interval';
	var $validate = array(
		'hour_id' => array('numeric'),
		'period' => array('numeric'),
		'type' => array('notempty')
	);

	//The Associations below have been created with all possible keys, those that are not needed can be removed
	var $belongsTo = array(
		'Hour' => array(
			'className' => 'Hour',
			'foreignKey' => 'hour_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		),
		'Project' => array(
			'className' => 'Project',
			'foreignKey' => 'project_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);

}
?>