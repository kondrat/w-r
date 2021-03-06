<?php
//uses('sanitize');
//$mrClean = new Sanitize();

class UsersController extends AppController {

	var $name = 'Users';
	var $helpers = array('Javascript');
	var $components = array( 'Security','Cookie','userReg','kcaptcha');
	var $pageTitle = 'Users data';
	var $paginate = array('limit' => 5);

//--------------------------------------------------------------------	
  function beforeFilter() {
        $this->Auth->allow( 'logout','login', 'reg','kcaptcha', 'reset', 'acoset','aroset','permset','buildAcl');
          
        //to Del:
        $this->Auth->allowedActions = array('*');
        //$this->Auth->allowedControllers = array('*');
        parent::beforeFilter(); 
        $this->Auth->autoRedirect = false;
        
        // swiching off Security component for ajax call
			if( isset($this->Security) && $this->RequestHandler->isAjax() ) {
     			$this->Security->enabled = false; 
     		}
    }
//--------------------------------------------------------------------
	function index() {
		$this->User->recursive = 2;
		$this->set('users', $this->paginate() );
	}
//--------------------------------------------------------------------
	function login() {
		$this->pageTitle = __('Login',true);

		if( !empty($this->data) ) {

			if( $this->Auth->login() ) {
					
    		$this->Session->delete('guestKey');
    		$this->Cookie->del('IniVars');
    		$this->Cookie->del('guestKey');


					if ($this->referer()=='/') {
						$this->redirect( $this->Auth->redirect() );
					} else {

						$this->redirect( $this->Auth->redirect() );
					}
			
			} else {

				$this->data['User']['password'] = null;
				$this->Session->setFlash(__('Check your login and password',true),'default', array('class' => 'er'));
			}
		} else {
			if( !is_null( $this->Session->read('Auth.User.username') ) ){

				$this->redirect( $this->Auth->redirect() );			
			}
		}
		
	}

//--------------------------------------------------------------------
    function logout() {
    	    	
    		$tempUserName = __('Good bay, ',true).$this->Session->read('Auth.User.username');
    		
    		$this->Session->delete('guestKey');
    		$this->Cookie->del('IniVars');
    		$this->Cookie->del('guestKey');
    		
    		
    		
        $this->Auth->logout();
        $this->Session->setFlash( $tempUserName, 'default', array('class' => '') );
        $this->redirect( '/',null,true);        
    }
//--------------------------------------------------------------------
	function reg() {
		
		if($this->Auth->user('id')) {
			$this->redirect('/',null,true);
		}
		
		$this->pageTitle = __('SignUp',true);
		
		if ( !empty($this->data) ) {
						
			$this->data['User']['captcha2'] = $this->Session->read('captcha');
			/*				
			if ( strtolower($this->data['User']['captcha']) == strtolower( $this->Session->read('captcha')) ) {
				echo 'ya kroot';
			} else {
				echo 'ya ne kroot';
			}
			*/
		
			//$this->data['User']['uuid'] = uniqid();

			if ( $this->User->save( $this->data) ) {
				
    		$this->Session->delete('guestKey');
    		$this->Cookie->del('IniVars');
    		$this->Cookie->del('guestKey');				
							
				$a = $this->User->read();
				$this->Auth->login($a);
				$this->Session->setFlash(__('New user\'s accout has been created',true));
				$this->redirect(array('controller' => 'intervals','action'=>'index'),null,true);
         	} else {
				$this->data['User']['captcha'] = null;
				$this->Session->setFlash(__('New user\'s accout hasn\'t been created',true) , 'default', array('class' => 'er') );
			}
		}
		
		

	}
	
//ajax staff
	//----------------------------------------------------------------
		function userNameCheck() {

			$errors = array();
			Configure::write('debug', 0);
			$this->autoRender = false;
			//don't foreget about santization and trimm
			if (!empty($this->data) && $this->data['User']['username'] != null) {
				if ($this->RequestHandler->isAjax()) {
					$this->User->set( $this->data );
					$errors = $this->User->invalidFields();
					if($errors == array()) {
						$type = 1;
						$errors['username'] = __('Login is free',true);
					} else {
						$type = 0;
					}
					echo json_encode(array('hi'=> $errors['username'], 'typ'=> $type));
					
							Configure::write('debug', 0);
							$this->autoRender = false;
				 			exit();						
						
				}
			} else {
					echo json_encode(array('hi'=> __('This field cannot be left blank',true), 'typ'=> 0));
					
							Configure::write('debug', 0);
							$this->autoRender = false;
				 			exit();	
			}		
		}
		//kcaptcha stuff
    function kcaptcha() {
        $this->kcaptcha->render(); 
    } 
    function kcaptchaReset() {
    	Configure::write('debug', 0);
    	$this->autoRender = false;
     	$this->kcaptcha->render(); 
     	exit();
    } 
//--------------------------------------------------------------------
	function thanks() {
	}
//--------------------------------------------------------------------
    function reset() {
			
    	if( empty($this->data) ) {
    		return;    		
    	}

			// Check email is correct
			$user = $this->User->find('first', array('conditions'=>array('User.email' => $this->data['User']['email']) , 'fields'=> array('User.id', 'User.username', 'User.email') ) );
			//debug($user);
			if(!$user) {
				$this->User->invalidate('email', __('Your email address does not appear to be valid',true) );
				$this->Session->setFlash(__("New password hasn't been changed",true),'default',array('class'=>'er'));
				return;
			}
		
			// Generate new password
			/*
			$password = $this->userReg->createPassword();
			$data['User']['password'] = $this->Auth->password($password);
			$this->User->id = $user['User']['id'];
			if(!$this->User->saveField('password', $this->Auth->password($password) ) ) {
				return;
			}
			*/
		
			// Send email
			//if(!$this->__sendNewPasswordEmail( $user, $password) ) {
			if( 10 > 1){
				$this->Session->setFlash(__('Internal server error during sending mail',true),'default',array('class'=>'er'));
			}
			else {
				//$this->flash('New password sent to '.$user['User']['email'].'. Please login', '/users/login', 10);
			}
			
    }
//--------------------------------------------------------------------
    /**
     * Send out an password reset email to the user email
     * 	@param Array $user User's details.
     *  @param Int $password new password.
     *  @return Boolean indicates success
    */
    function __sendNewPasswordEmail($user, $password) {

        // Set data for the "view" of the Email
        $this->set('password', $password );
        $this->set( 'username', $user['User']['username'] );
       
        $this->Email->to = $user['User']['username'].'<'.$user['User']['email'].'>';
        $this->Email->subject = env('SERVER_NAME') . ' - New password';
        $this->Email->from = 'noreply@' . env('SERVER_NAME');
        $this->Email->template = 'user_password_reset';
        $this->Email->sendAs = 'text';   // you probably want to use both :)   
        return $this->Email->send();
	}     
//--------------------------------------------------------------------
	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash('Invalid User');
			$this->redirect(array('action'=>'index'), null, true);
		}
		if (!empty($this->data)) {
			$this->cleanUpFields();
			if ($this->User->save($this->data)) 
            {
                // we might have to reset the parent aro
                $this->InheritAcl->checkAroParent('User', $this->data['User']['id'], 'User', $this->data['User']['group_id']);
				$this->Session->setFlash('The User has been saved');
				$this->redirect(array('action'=>'index'), null, true);
			} else {
				$this->Session->setFlash('The User could not be saved. Please, try again.','default',array('class'=>'er') );
			}
		}
		if (empty($this->data)) 
        {
			$this->data = $this->User->read(null, $id);
		}
		$roles = $this->User->Group->find('list');
		$this->set(compact('roles'));
	}

//-------------------------------------------------------------------- 
	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash('Invalid id for User','default',array('class'=>'er'));
			$this->redirect(array('action'=>'index'), null, true);
		}
		if ( $this->User->del($id) ) {
			$this->Session->setFlash('User #'.$id.' deleted');
			$this->redirect(array('action'=>'index'), null, true);
		}
	}
//--------------------------------------------------------------------
	function view($id = null) {

		if (!$id) {
			$this->Session->setFlash('Invalid User.');
			$this->redirect(array('action'=>'index'), null, true);
		}
		$this->set('user', $this->User->read(null, $id));
//		$temp = $this->User->read(null, $id);


	}
//--------------------------------------------------------------------
	function admin_index() {
		if (!$id) {
			$this->Session->setFlash('Invalid User.');
			$this->redirect(array('action'=>'index'), null, true);
		}
		$this->set('user', $this->User->read(null, $id));

	}
//--------------------------------------------------------------------
	function admin_edit($id = null) {
		$id = $this->Auth->user('id');
		if (!$id && empty($this->data)) {
			$this->Session->setFlash('Invalid User');
			$this->redirect(array('action'=>'index'), null, true);
		}
		if (!empty($this->data)) {
			$this->User->create();
			if ($this->User->save($this->data)) {
				$this->Session->setFlash('Данные были сохранены');
				$this->redirect(array('controller' => 'pages', 'action'=>'index'), null, true);
			} else {
				$this->Session->setFlash('Данные не могут быть сохранены. попробуйте еще раз');
			}
		}
		if (empty($this->data)) {
			$this->data = $this->User->read(null, $id);
		}

	}

//-------------------------------------------------------------------- 
	function admin_delete($id = null) {
		if (!$id) {
			$this->Session->setFlash('Invalid id for User');
			$this->redirect(array('action'=>'index'), null, true);
		}
		if ( $this->User->del($id) ) {
			$this->Session->setFlash('User #'.$id.' deleted');
			$this->redirect(array('action'=>'index'), null, true);
		}
	}
//--------------------------------------------------------------------
	function admin_view($id = null) {
		$id = $this->Auth->user('id');
		if (!$id) {
			$this->Session->setFlash('Invalid User.');
			$this->redirect(array('action'=>'index'), null, true);
		}
		$this->set('user', $this->User->read(null, $id));
	}
//-------------------------------------------------------------------
	function acoset() {
		exit;
		//$this->Acl->Aco->create(array('parent_id' => 30, 'alias' => 'Album::'.'4','model'=>'Album','foreign_key' => '4' ));
		$this->Acl->Aco->create(array('parent_id' => 41, 'alias' => 'admin_add_demo','model'=>null,'foreign_key' => null ));
		//$this->Acl->Aco->create(array('parent_id' => 110, 'alias' => 'admin_index','model'=>null,'foreign_key' => null ));
		$this->Acl->Aco->save();
		echo 'aro ok';
		die;
	}
	
	function aroset() {
		exit;
		$this->Acl->Aro->create( array('parent_id' => 1, 'foreign_key' => 1, 'model'=> 'User') );
		$this->Acl->Aro->save();
		echo 'aro ok';
		die;
	}
	function permset() {
		exit;
		$this->Acl->allow(array( 'foreign_key' => 4, 'model'=> 'Group'),'Albums/add' );

		echo 'prem ok';
		die;
	}
	/**
 * Rebuild the Acl based on the current controllers in the application
 *
 * @return void
 */
    function buildAcl() {
    	exit;
        $log = array();
 
        $aco =& $this->Acl->Aco;
        $root = $aco->node('controllers');
        if (!$root) {
            $aco->create(array('parent_id' => null, 'model' => null, 'alias' => 'controllers'));
            $root = $aco->save();
            $root['Aco']['id'] = $aco->id; 
            $log[] = 'Created Aco node for controllers';
        } else {
            $root = $root[0];
        }   
 
        App::import('Core', 'File');
        //$Controllers = Configure::listObjects('controller');
        $Controllers = array('Pages');
        /*
        							[0] => App
    								[1] => Pages
    								[2] => Catalogs
    								[3] => Categories
    								[4] => Datas
    								[5] => Gifts
    								[6] => LineItems
    								[7] => News
    								[8] => Orders
    								[9] => Uploads
    								[10] => Users
    								[11] => Xmlpars
    								[12] => Xmltest
    								[13] => Zends
		*/
        //my modification. taking array of controllers from my application;
        //debug($Controllers);
        //die;
        $appIndex = array_search('App', $Controllers);
        if ($appIndex !== false ) {
            unset($Controllers[$appIndex]);
        }
        $baseMethods = get_class_methods('Controller');
        $baseMethods[] = 'buildAcl';
 
        // look at each controller in app/controllers
        foreach ($Controllers as $ctrlName) {
            App::import('Controller', $ctrlName);
            $ctrlclass = $ctrlName . 'Controller';
            $methods = get_class_methods($ctrlclass);
 
            // find / make controller node
            $controllerNode = $aco->node('controllers/'.$ctrlName);
            if (!$controllerNode) {
                $aco->create(array('parent_id' => $root['Aco']['id'], 'model' => null, 'alias' => $ctrlName));
                $controllerNode = $aco->save();
                $controllerNode['Aco']['id'] = $aco->id;
                $log[] = 'Created Aco node for '.$ctrlName;
            } else {
                $controllerNode = $controllerNode[0];
            }
 
            //clean the methods. to remove those in Controller and private actions.
            foreach ($methods as $k => $method) {
                if (strpos($method, '_', 0) === 0) {
                    unset($methods[$k]);
                    continue;
                }
                if (in_array($method, $baseMethods)) {
                    unset($methods[$k]);
                    continue;
                }
                $methodNode = $aco->node('controllers/'.$ctrlName.'/'.$method);
                if (!$methodNode) {
                    $aco->create(array('parent_id' => $controllerNode['Aco']['id'], 'model' => null, 'alias' => $method));
                    $methodNode = $aco->save();
                    $log[] = 'Created Aco node for '. $method;
                }
            }
        }
        debug($log);
    }
//-----------------------------
}
?>