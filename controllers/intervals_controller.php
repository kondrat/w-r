<?php
class IntervalsController extends AppController {

	var $name = 'Intervals';
	var $helpers = array('Html', 'Form','Gravatar');
	var $components = array('Security','Cookie');
//--------------------------------------------------------------------	
	function beforeFilter() {
		$this->Auth->allow('index','add','delWorkSession');
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
			$projectUser = array();

			$key = null;
								
			if( !$this->Cookie->read('guestKey') && !$this->Auth->user('id') ) {//looks like new user is tring us.	
				$key = md5(uniqid(rand(), true));
				$this->Cookie->write('guestKey',$key, false, '360 days');		
				$this->Session->write('guestKey', $key );
				
				$this->data['Hour']['key'] = $key;
				
				if ( $this->Session->check('startTime') ) {
					$startTime = $this->Session->read('startTime');
				} else {
					$startTime = time();
				}
					
				$this->data['Hour']['psession'] = serialize(	
																											array(	array('Project'=> array('id' => '1','name'=>'Project 1','color'=>'green','created'=> $startTime,'modified'=> $startTime )),
																															array('Project'=> array('id' => '2','name'=>'Project 2','color'=>'olive','created'=> $startTime,'modified'=> $startTime)),
																															array('Project'=> array('id' => '3','name'=>'Project 3','color'=>'teal','created'=> $startTime,'modified'=> $startTime)),
																														)													
																											);
				//debug($this->data);
				$this->Interval->Hour->save($this->data);
				
				
				
			} elseif( ($key = $this->Cookie->read('guestKey')) && !$this->Auth->user('id')) {
				$this->Session->write('guestKey', $this->Cookie->read('guestKey') );
				$conditions = array('Hour.key'=> $key,'Hour.status'=>'open');
			} elseif ( $key = $this->Auth->user('id') ) {
				$conditions = array('Hour.user_id'=> $key,'Hour.status'=>'open' );
			}

			$currentWorkSession = $this->Interval->Hour->find('first', array( 'conditions'=> $conditions, 'fields' => array( 'Hour.wsession','Hour.psession','Hour.created','Hour.modified'), 'order' => array('Hour.created DESC'),'contain' => false ) );

				/*
				if ( $currentHour != array() ) {
					$conditions = array( 'Hour.wsession' => $currentHour['Hour']['wsession'] );			
					//$hoursSaved = $this->Interval->Hour->find('all', array('conditions' => $conditions, 'contain'=> array('Interval'=> array('fields'=> array('Interval.type', 'Interval.interval') ) ) ) );
				
					$datetime = new DateTime($currentHour['Hour']['modified']);			 
					if ( ( Date('U') - $datetime->format('U') ) > 10000 ) {
						$workSession = md5(uniqid(rand(), true));
						//$this->Session->write('workSession', $workSession );
						//to close opend hour, to start new hour;	
						$hoursSaved = array();
					} else {
						$this->Session->write('workSession', $currentHour['Hour']['worksession'] );
					}					
				}
				*/
				
			//finding of the user's projects
			if ( $this->Auth->user('id') ) {
					$projectUser = $this->Interval->Hour->User->Project->findUserProject( $this->Auth->user('id') );					
			} else {
				

				if ( $this->Cookie->read('Projects') ) {
					$projectUser = $this->Cookie->read('Projects');
				} else {
					$projectUser = array( array('Project'=> array('id' => '1','name'=>'Project 1','color'=>'green')),
																array('Project'=> array('id' => '2','name'=>'Project 2','color'=>'olive')),
																array('Project'=> array('id' => '3','name'=>'Project 3','color'=>'teal')),
															);
				}
			}
			

			
			
			



			$this->set('projectUser', $projectUser);
			$this->set('workSession', $currentWorkSession);
			
	}
//--------------------------------------------------------------------
	function add() {
		
		$hourId = null;
		$key = null;
		$workInt = array();
		$projectId = null;
		$workHoursArray = array();
		
		
				Configure::write('debug', 0);
				$this->autoRender = false;
							
		if (!empty($this->data)) {
			
			App::import('Sanitize');
			
			if ($this->RequestHandler->isAjax()) {
				
				if ($this->Auth->user('id')) {
					$this->data['Hour']['user_id'] = $this->Auth->user('id');
					$conditions = array('Hour.user_id' => $this->data['Hour']['user_id'],'Hour.status'=>'open');
				} else {
					$this->data['Hour']['key'] = $this->Session->read('guestKey');
					$conditions = array('Hour.key' => $this->data['Hour']['key'],'Hour.status'=>'open');
				}
				
				
				$currentWorkSession = $this->Interval->Hour->find('first',array('conditions'=> $conditions,'order' => array('Hour.created DESC') ) );
				if ($currentWorkSession != array() ) {
					$this->data['Hour']['id'] = $currentWorkSession['Hour']['id'];
				}
				
				
				$this->data['Hour']['wsession'] = Sanitize::paranoid($this->data['work'], array(' ','_', ',','{','}','[',']',':','"'));
				$idTemp = 'ok';
				if($this->data['Hour']['wsession'] == 'del' && $this->data['Hour']['id'] != null) {
					$this->Interval->Hour->delete($this->data['Hour']['id']);
					$idTemp = ($this->data['Hour']['id']);
				} else {
					$idTemp = $this->data['Hour']['wsession'];//'notOk';
					$idTemp = $this->data['work'];
					//$this->data = null;
				}
				
				$this->Interval->Hour->save($this->data);
				$this->data = null;
				echo json_encode( array('hi'=> $idTemp) );
				exit;					
				
				/*
				$this->Interval->create();
				if ($this->Interval->save($this->data)) {
					$this->Session->setFlash(__('The Interval has been saved', true));
					$this->redirect(array('action'=>'index'));
				} else {
					$this->Session->setFlash(__('The Interval could not be saved. Please, try again.', true));
				}
				*/
			}
			
			
			
		}
		//$hours = $this->Interval->Hour->find('list');
		//$projects = $this->Interval->Project->find('list');
		//$this->set(compact('hours', 'projects'));
	}
//--------------------------------------------------------------------
	function delWorkSession() {
		
				if ($this->Auth->user('id')) {
					$this->data['Hour']['user_id'] = $this->Auth->user('id');
					$conditions = array('Hour.user_id' => $this->data['Hour']['user_id'],'Hour.status'=>'open');
				} else {
					$this->data['Hour']['key'] = $this->Session->read('guestKey');
					$conditions = array('Hour.key' => $this->data['Hour']['key'],'Hour.status'=>'open');
				}
				
				
				$currentWorkSession = $this->Interval->Hour->find('first',array('conditions'=> $conditions,'order' => array('Hour.created DESC') ) );
				if ($currentWorkSession != array() ) {
					$this->data['Hour']['id'] = $currentWorkSession['Hour']['id'];
				}		
				$this->data['Hour']['status'] = 'closed';
		
		if ($this->Interval->Hour->save($this->data)) {
			$this->Session->setFlash(__('work session cleared', true).$this->Cookie->read('iniVars'));
			$this->redirect(array('action'=>'index'));
		}
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