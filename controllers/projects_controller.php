<?php
class ProjectsController extends AppController {

	var $name = 'Projects';
	var $helpers = array('Html', 'Form','Time');
	var $components = array('Cookie');
//--------------------------------------------------------------------	
  function beforeFilter() {
        $this->Auth->allow('index');
        parent::beforeFilter(); 
        $this->Auth->autoRedirect = false;
        
      // swiching off Security component for ajax call
			if( isset($this->Security) && $this->RequestHandler->isAjax() ) {
     			$this->Security->enabled = false; 
     		}
    }
//--------------------------------------------------------------------
	function index() {
		$projectUser = array();
		
		if ( $this->Auth->user('id') ) {
			$this->paginate['Project']['limit'] = 10;		
			$this->Project->bindModel( array( 'hasOne' => array('ProjectsUser'=> array('fields'=>array('ProjectsUser.id') ) ) ) );
			$this->paginate['Project']['conditions'] = array( 'ProjectsUser.user_id'=> $this->Auth->user('id') );
			$this->paginate['Project']['fields'] = array();
			$this->paginate['Project']['contain'] = 'ProjectsUser';
			$this->paginate['Project']['order'] = array('Project.modified'=>'desc');
			$this->set('projects', $this->paginate());
		} elseif( $key = $this->Cookie->read('guestKey') ) {
					if ( $this->Session->check('startTime') ) {
						$startTime = $this->Session->read('startTime');
					} else {
						$startTime = time();
					}
			$projectUser = $this->Project->Interval->Hour->find('first',array('conditions'=> array('Hour.key'=>$key),'fields'=>array('Hour.psession'),'contain'=>false ) );
			$ttt = unserialize($projectUser['Hour']['psession']);
			debug($ttt);
					/*		
					$projectUser = array( array('Project'=> array('id' => '1','name'=>'Project 1','color'=>'green','created'=> $startTime,'modified'=> $startTime )),
																array('Project'=> array('id' => '2','name'=>'Project 2','color'=>'olive','created'=> $startTime,'modified'=> $startTime)),
																array('Project'=> array('id' => '3','name'=>'Project 3','color'=>'teal','created'=> $startTime,'modified'=> $startTime)),
															);
					*/
			$this->set('projects', $ttt);	
		
		}
	}
//--------------------------------------------------------------------
	function view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid Project.', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->set('project', $this->Project->read(null, $id));
	}
//--------------------------------------------------------------------
	function add() {
		if (!empty($this->data)) {
			
			if ( $this->Auth->user('id') ) {
				$this->data['User']['User'] = $this->Auth->user('id');
			} else {
				$this->Session->setFlash(__('The Project could not be saved.Invalid user. Please, try again.', true));
				$this->redirect(array('action'=>'index'));				
			}
			
			
			
			$this->Project->create();
			if ($this->Project->save($this->data)) {
				$this->Session->setFlash(__('The Project has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The Project could not be saved. Please, try again.', true),'default',array('class' => 'er'));
				$this->redirect(array('action'=>'index'));
			}
			
		}
		
		
		$users = $this->Project->User->find('list');
		$this->set(compact('users'));
		$users2 = $this->Project->find('all');
		$this->set('user2',$users2);
		
	}
//--------------------------------------------------------------------
	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid Project', true));
			$this->redirect(array('action'=>'index'));
		}
		if (!empty($this->data)) {
			if ($this->Project->save($this->data)) {
				$this->Session->setFlash(__('The Project has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('Err... The Project could not be saved. Please, try again.', true),'default',array('class' => 'er_class'));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Project->read(null, $id);
		}
		$users = $this->Project->User->find('list');
		$this->set(compact('users'));
	}
//--------------------------------------------------------------------
	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for Project', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Project->del($id)) {
			$this->Session->setFlash(__('Project deleted', true));
			$this->redirect(array('action'=>'index'));
		}
	}


	function admin_index() {
		$this->Project->recursive = 0;
		$this->set('projects', $this->paginate());
	}

	function admin_view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid Project.', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->set('project', $this->Project->read(null, $id));
	}

	function admin_add() {
		if (!empty($this->data)) {
			$this->Project->create();
			if ($this->Project->save($this->data)) {
				$this->Session->setFlash(__('The Project has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The Project could not be saved. Please, try again.', true));
			}
		}
		$users = $this->Project->User->find('list');
		$this->set(compact('users'));
	}

	function admin_edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid Project', true));
			$this->redirect(array('action'=>'index'));
		}
		if (!empty($this->data)) {
			if ($this->Project->save($this->data)) {
				$this->Session->setFlash(__('The Project has been saved', true));
				$this->redirect(array('action'=>'index'));
			} else {
				$this->Session->setFlash(__('The Project could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Project->read(null, $id);
		}
		$users = $this->Project->User->find('list');
		$this->set(compact('users'));
	}

	function admin_delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for Project', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Project->del($id)) {
			$this->Session->setFlash(__('Project deleted', true));
			$this->redirect(array('action'=>'index'));
		}
	}

}
?>