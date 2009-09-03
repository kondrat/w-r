<?php
class IntervalsController extends AppController {

	var $name = 'Intervals';
	var $helpers = array('Javascript','Html', 'Form','Gravatar');
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
		
			$currentWorkSession = array();
			$conditions = array();
			$fields = array();
			$projectUser = array();
			$key = null;
			$auth = false;
			$guestId = null;
			
			if($key = $this->Auth->user('id'))$auth=true;
						
			if( !$auth && !$this->Cookie->read('guestKey') ) {//looks like new user is tring us.	
				
				$key = md5(uniqid(rand(), true));
				$this->Cookie->write('guestKey',$key, false, '360 days');		
				//$this->Session->write('guestKey', $key );
	

				$startTime = time();

				$projectUser = array(	
															array('Project'=> array('id' => '1','name'=>'Project 1','color'=>'green','created'=> $startTime,'modified'=> $startTime )),
															array('Project'=> array('id' => '2','name'=>'Project 2','color'=>'olive','created'=> $startTime,'modified'=> $startTime)),
															array('Project'=> array('id' => '3','name'=>'Project 3','color'=>'teal','created'=> $startTime,'modified'=> $startTime)),
														);	

				
				$this->data['User']['key'] = $key;
				
					
				//$this->data['Hour']['psession'] = serialize( $projectUser );
				/*
				if( !$this->Interval->Hour->User->save( $this->data, array('validate' => false,'fieldList' => array('User.key') ) ) ){
					$this->Session->setFlash(__('We have an problem with a server.', true),'default',array('class'=>'er'));
				} else {
					$guestId = $this->Interval->Hour->User->id;
				}
				*/
				
			} elseif ( !$auth && ($key = $this->Cookie->read('guestKey')) ) {
				//debug($key);
				//$this->Session->write('guestKey', $key );
				$conditions = array('Hour.key'=> $key,'Hour.status'=>'open');
				$fields = array( 'Hour.wsession','Hour.psession','Hour.created','Hour.modified');

				$currentWorkSession = $this->Interval->Hour->find('first', array( 'conditions'=> $conditions, 'fields' => $fields, 'order' => array('Hour.created DESC'),'contain' => false ) );
				
				if ( $currentWorkSession['Hour']['psession'] != null) {
					$projectUser = unserialize($currentWorkSession['Hour']['psession']);
				}else{
					$startTime = time();
					$projectUser = 	array(	array('Project'=> array('id' => '1','name'=>'Project 1','color'=>'green','created'=> $startTime,'modified'=> $startTime )),
																	array('Project'=> array('id' => '2','name'=>'Project 2','color'=>'olive','created'=> $startTime,'modified'=> $startTime)),
																	array('Project'=> array('id' => '3','name'=>'Project 3','color'=>'teal','created'=> $startTime,'modified'=> $startTime)),
																);
				}						
				
			} elseif ( $auth ) {
				
				$conditions = array('Hour.user_id'=> $key,'Hour.status'=>'open' );
				$fields = array( 'Hour.wsession','Hour.created','Hour.modified');
				//finding of the user's projects
				$projectUser = $this->Interval->Hour->User->Project->findUserProject( $key );
				
				$currentWorkSession = $this->Interval->Hour->find('first', array( 'conditions'=> $conditions, 'fields' => $fields, 'order' => array('Hour.created DESC'),'contain' => false ) );

				
			}


				/*
				//what will we do if worksession is to old?
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
			$this->set('guestId', $guestId);
			
				
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
				
				//reged user
				if ($this->Auth->user('id')) {
					
					
					
					$this->data['Hour']['user_id'] = $this->Auth->user('id');
					$conditions = array('Hour.user_id' => $this->data['Hour']['user_id'],'Hour.status'=>'open');
					
					
					
				// not reged user	
				} else {
					

					
					
					
					if( $this->Session->check('guestKey2.id') ) {
						
						$this->data['Hour']['id'] = $this->Session->check('guestKey2.id');
						
					} else {
						
						$key = $this->Cookie->read('guestKey');
						if($key) {
							
								$currentWorkSession = $this->Interval->Hour->User->find('first',array('conditions'=> array('User.key'=> $key) ) );
								if ($currentWorkSession != array() ) {
									$this->Session->write('guestKey2.id', $currentWorkSession['User']['id']);
								}
								
						} else {
							
						}

					}
					
					
					if ( !$this->Session->check('guestKey2.id') ) {
						
						$this->data['User']['username'] = uniqid();
						$this->data['User']['key'] = $key;
						
						$this->Session->write('guestKey2.key', $key );
						
						if ( $this->Interval->Hour->User->save($this->data, array('validate' => false,'fieldList' => array('username','key') ) ) ) {
							$guestId = $this->Interval->Hour->User->id;
							$this->Session->write('guestKey2.id', $guestId );
						}
						
					} elseif() {
						$this->data['Hour']['wsession'] = 
					}
						
					
					
					
					
						$conditions = array('Hour.key' => $this->data['Hour']['key'],'Hour.status'=>'open');
					
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
				echo json_encode( array('hi'=> $tttt) );
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