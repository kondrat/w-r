<?php
class Interval extends AppModel {

	var $name = 'Interval';
	var $actsAs = array('Containable');
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


//--------------------------------------------------------------------
	/**
	 * Sets the current hour's interval
	 *
	 * @param string $interval
	 * @param string $hourId
	 * @param string $type
	 * @access public
	 */
		function saveInterval($interval = null, $hourId = null, $projectId = null, $type = null) {
					
						$checkInt = $this->find('first', array('conditions'=> array('Interval.hour_id' => $hourId, 'Interval.type' => $type),'contain' => false ) );
						
						if ( $checkInt == array() && $hourId != null ) {
							
							$this->data['Interval']['hour_id'] = $hourId;
							$this->data['Interval']['interval'] = $interval;
							$this->data['Interval']['type'] = $type;
							
							$this->create($this->data);
							$this->save();
							
						} else {		
										
							$newWorkInt = $checkInt['Interval']['interval'] + $interval;					
							$this->id = $checkInt['Interval']['id'];
							$this->saveField('interval', $newWorkInt , $validate = false);
							
						}
			
			
		}
//--------------------------------------------------------------------


}
?>