<?php
class IntervalsController extends AppController {

	var $name = 'Intervals';
	var $helpers = array('Html', 'Form');
	var $components = array('Security','Cookie');
//--------------------------------------------------------------------	
  function beforeFilter() {
        $this->Auth->allow('*');
        parent::beforeFilter(); 
        $this->Auth->autoRedirect = false;
        
      // swiching off Security component for ajax call
			if( isset($this->Security) && $this->RequestHandler->isAjax() ) {
     			$this->Security->enabled = false; 
     		}
    }
//--------------------------------------------------------------------
	function index() {
		
			$hoursSaved = array();
			$conditions = array();
			
			$key = md5(uniqid(rand(), true));
			
			$workSession = md5(uniqid(rand(), true));
			$this->Session->write('workSession', $workSession );	
			
			
			
			
					
			if( !$this->Cookie->read('guestKey')) {												
				$this->Cookie->write('guestKey',$key, false, '360 days');		
				
				if( !$this->Session->check('guestKey') ) {				
					$this->Session->write('guestKey', $key );			
				}	
										
			} else {
				$this->Session->write('guestKey', $this->Cookie->read('guestKey') );
			}
			

			
			
			
			$currentHour = $this->Interval->Hour->find('first', array( 'conditions'=> array('Hour.key'=> $this->Session->read('guestKey'), 'Hour.worksession' => array(1,3,5) ), 'fields' => array( 'Hour.worksession','Hour.created'), 'order' => array('Hour.created DESC'),'contain' => false ) );
			$conditions = array( 'Hour.worksession' => $currentHour['Hour']['worksession'] );			
			$hoursSaved = $this->Interval->Hour->find('all', array('conditions' => $conditions, 'contain'=> array('Interval'=> array('fields'=> array('Interval.type', 'Interval.interval') ) ) ) );
			
			$datetime = new DateTime($currentHour['Hour']['created']);			 
			if ( ( Date('U') - $datetime->format('U') ) > 500 ) {
				$workSession = md5(uniqid(rand(), true));
				$this->Session->write('workSession', $workSession );	
			}


			
			$this->set('hoursSaved', $hoursSaved);
			
		//$this->Interval->recursive = 0;
		//$this->set('intervals', $this->paginate());
	}
//--------------------------------------------------------------------
	function add() {
		
		$hourId = null;
		$key = null;
		$workInt = array();
		$projectId = null;
		
		
				Configure::write('debug', 0);
				$this->autoRender = false;
					//print_r($this->data);		
		if (!empty($this->data)) {
			
			App::import('Sanitize');
			
			if ($this->RequestHandler->isAjax()) {
								
				$userId= null;
				if ($this->Auth->user('id')) {
					$userId = $this->Auth->user('id');
				} else {
					$key = $this->Session->read('guestKey');
				}
				
				$this->data['work'] = Sanitize::paranoid($this->data['work']);
				$this->data['rest'] = Sanitize::paranoid($this->data['rest']);
				$this->data['nextHour'] = Sanitize::paranoid($this->data['nextHour']);
				
				$nextHour = $this->data['nextHour'];
				
				if ( $key != null || $userId != null ) {
					$hourId = $this->Interval->Hour->getHour($userId, $key, $nextHour, $workSession);
				} else {
					$hourId = 1000;
				}
									
				if ( isset( $this->data['work']) && $this->data['work'] != 0 ) {
									
					$this->Interval->saveInterval( $this->data['work'] , $hourId, $projectId, 'work');
					
				} 
				
				if ( isset( $this->data['rest']) && $this->data['rest'] != 0 ) {
					
					$this->Interval->saveInterval($this->data['rest'], $hourId, $projectId, 'rest');
					
				} 
			
				$ii = 0;
				if ( !$this->Session->check('ii') ) {					
					$this->Session->write('ii', $ii);
				} else {
					$ii = $ii + $this->Session->read('ii');
					$this->Session->write('ii', $ii);
				}
				
				
				
				
				
				
				
				echo json_encode( array('hi'=> $this->data['work'], 'hi2'=> $this->data['rest'], 'hi3'=> $this->data['nextHour'] ) );
				exit;				
				
				
				$this->Interval->create();
				if ($this->Interval->save($this->data)) {
					$this->Session->setFlash(__('The Interval has been saved', true));
					$this->redirect(array('action'=>'index'));
				} else {
					$this->Session->setFlash(__('The Interval could not be saved. Please, try again.', true));
				}
			}
			
			
			
		}
		//$hours = $this->Interval->Hour->find('list');
		//$projects = $this->Interval->Project->find('list');
		//$this->set(compact('hours', 'projects'));
	}
//--------------------------------------------------------------------
	function view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid Interval.', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->set('interval', $this->Interval->read(null, $id));
	}



	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid Interval', true));
			$this->redirect(array('action'=>'index'));
		}
		if (!empty($this->data)) {
			if ($this->Interval->save($this->data)) {
				$this->Session->setFlash(__('The Interval has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The Interval could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Interval->read(null, $id);
		}
		$hours = $this->Interval->Hour->find('list');
		$projects = $this->Interval->Project->find('list');
		$this->set(compact('hours','projects'));
	}

	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for Interval', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Interval->del($id)) {
			$this->Session->setFlash(__('Interval deleted', true));
			$this->redirect(array('action'=>'index'));
		}
	}


	function admin_index() {
		$this->Interval->recursive = 0;
		$this->set('intervals', $this->paginate());
	}

	function admin_view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid Interval.', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->set('interval', $this->Interval->read(null, $id));
	}

	function admin_add() {
		if (!empty($this->data)) {
			$this->Interval->create();
			if ($this->Interval->save($this->data)) {
				$this->Session->setFlash(__('The Interval has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The Interval could not be saved. Please, try again.', true));
			}
		}
		$hours = $this->Interval->Hour->find('list');
		$projects = $this->Interval->Project->find('list');
		$this->set(compact('hours', 'projects'));
	}

	function admin_edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid Interval', true));
			$this->redirect(array('action'=>'index'));
		}
		if (!empty($this->data)) {
			if ($this->Interval->save($this->data)) {
				$this->Session->setFlash(__('The Interval has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The Interval could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Interval->read(null, $id);
		}
		$hours = $this->Interval->Hour->find('list');
		$projects = $this->Interval->Project->find('list');
		$this->set(compact('hours','projects'));
	}

	function admin_delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for Interval', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Interval->del($id)) {
			$this->Session->setFlash(__('Interval deleted', true));
			$this->redirect(array('action'=>'index'));
		}
	}

}
?>