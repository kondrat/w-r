<?php
class Hour extends AppModel {

	var $name = 'Hour';
	var $validate = array(
		'id' => array('numeric'),
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

	var $hasMany = array(
		'Interval' => array(
			'className' => 'Interval',
			'foreignKey' => 'hour_id',
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



//--------------------------------------------------------------------
	/**
	 * Sets the current user's hour
	 *
	 * @param string $userId
	 * @access public
	 */
	function getHour($userId = null) {
		
		
		$hours = array();
		if ( $userId ) {
			$hours = $this->find('first', array('conditions'=> array('Hour.user_id' => $userId, 'Hour.status' => 'open') ) );
			$this->data['Hour']['user_id'] = $userId;
			
			if ( $hours == array() ) {
				$this->data['Hour']['status'] = 'open';
			}
			$this->save($this->data);
			return $this->id;
		} else {
			return 10;
		}
		
		
	}
//--------------------------------------------------------------------

}
?>