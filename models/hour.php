<?php
class Hour extends AppModel {

	var $name = 'Hour';
	var $actsAs = array('Containable');
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
	 * @param string $key
	 * @access public
	 */
	function getHour($userId = null, $key = null, $nextHour = 0, $workSession = null ) {
				
		$hours = array();
		$summ = null;

		if ( $userId !=  null ) {
			$hours = $this->find('first', array('conditions'=> array('Hour.user_id' => $userId, 'Hour.status' => 'open'),'contain' => false ) );
			$this->data['Hour']['user_id'] = $userId;
			
			if ( $hours == array() ) {
				$this->data['Hour']['status'] = 'open';
				$this->create($this->data);
				if ( $this->save() ) {
					return $this->id;	
				} else {
					return 114;
				}						
			} else {
				
				if ( $nextHour == 1 ) {
					$this->id = $hours['Hour']['id'];
					$this->saveField('type', 'closed' , false);
					
					$this->data['Hour']['key'] = $key;
					$this->data['Hour']['status'] = 'open';
					$this->create($this->data);
					if ( $this->save() ) {
						return $this->id;	
					} else {
						return 114;
					}										
				}				
				return $hours['Hour']['id'];
			}
			
		} elseif( $key != null ) {
			
			
			
			$hours = $this->find('first', array('conditions'=> array('Hour.key' => $key, 'Hour.status' => 'open'),'contain' => 'Interval' ) );			
			$this->data['Hour']['key'] = $key;
			
			if (  $hours == array() ) {
				$this->data['Hour']['worksession'] = $workSession;
				$this->data['Hour']['status'] = 'open';
				$this->create($this->data);
				if ( $this->save() ) {
					return $this->id;
				} else {
					return 114;
				}				
							
			} else {
				//checing the contol summ of hour's intervals.
				foreach ( $hours['Interval'] as $interval ) {
					$summ += $interval['interval'];
				}
				if ( $nextHour == 1 || $summ >= 3601 ) {
					
					$this->id = $hours['Hour']['id'];
					$this->saveField('status', 'closed' , false);
					
					$this->data['Hour']['worksession'] = $workSession;
					$this->data['Hour']['status'] = 'open';
					$this->data['Hour']['key'] = $key;
					$this->create($this->data);
					if ( $this->save() ) {
						return $this->id;	
					} else {
						return 114;
					}										
				}
															
				return $hours['Hour']['id'];
				
			}
			
		} else {
			return 115;
		}
		
		
	}
//--------------------------------------------------------------------

}
?>