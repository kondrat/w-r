<?php
class Project extends AppModel {

	var $name = 'Project';
	var $actsAs = array('Containable');
	
	var $validate = array(
		'user_id' => array('numeric'),
		'name'=> array('alphaNumeric'),
	);
//--------------------------------------------------------------------
	//The Associations below have been created with all possible keys, those that are not needed can be removed
	var $hasMany = array(
		'Interval' => array(
			'className' => 'Interval',
			'foreignKey' => 'project_id',
			'dependent' => false,
			'conditions' => '',
			'fields' => '',
			'order' => '',
			'limit' => '',
			'offset' => '',
			'exclusive' => '',
			'finderQuery' => '',
			'counterQuery' => ''
		)
	);

	var $hasAndBelongsToMany = array(
		'User' => array(
			'className' => 'User',
			'joinTable' => 'projects_users',
			'foreignKey' => 'project_id',
			'associationForeignKey' => 'user_id',
			'unique' => true,
			'conditions' => '',
			'fields' => '',
			'order' => '',
			'limit' => '',
			'offset' => '',
			'finderQuery' => '',
			'deleteQuery' => '',
			'insertQuery' => ''
		)
	);
//--------------------------------------------------------------------
	function findUserProject( $userId = null ) {
		$projectUser = array();
		
		if ( $userId != null ) {
			$this->bindModel( array( 'hasOne' => array('ProjectsUser') ) );
			$projectUser = $this->find('all', array( 'conditions'=> array( 'ProjectsUser.user_id'=> $userId ), 'fields' => array('Project.id','Project.name'), 'contain'=> array('ProjectsUser')  ) );
		}
		if ( $projectUser != array() ) {
			return $projectUser;
		} else {
			return 40;
		}
		
	}


}
?>