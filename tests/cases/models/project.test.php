<?php 
/* SVN FILE: $Id$ */
/* Project Test cases generated on: 2009-05-16 16:05:21 : 1242478161*/
App::import('Model', 'Project');

class ProjectTestCase extends CakeTestCase {
	var $Project = null;
	var $fixtures = array('app.project', 'app.user');

	function startTest() {
		$this->Project =& ClassRegistry::init('Project');
	}

	function testProjectInstance() {
		$this->assertTrue(is_a($this->Project, 'Project'));
	}

	function testProjectFind() {
		$this->Project->recursive = -1;
		$results = $this->Project->find('first');
		$this->assertTrue(!empty($results));

		$expected = array('Project' => array(
			'id'  => 1,
			'name'  => 'Lorem ipsum dolor sit amet',
			'user_id'  => 1,
			'created'  => '2009-05-16 16:49:21',
			'modified'  => '2009-05-16 16:49:21'
		));
		$this->assertEqual($results, $expected);
	}
}
?>