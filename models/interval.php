<?php
class Interval extends AppModel {
	var $name   = 'Interval';
	var $hasMany = array('User' => array('className' => 'User',
								'foreignKey' => 'group_id',
								'conditions' => '',
								'fields' => '',
								'order' => '',
								'counterCache' => '')
						);


}
?>