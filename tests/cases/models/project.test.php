<?php 
/* SVN FILE: $Id$ */
/* Project Test cases generated on: 2009-05-19 17:05:27 : 1242738387*/
App::import('Model', 'Project');

class ProjectTestCase extends CakeTestCase {
	var $Project = null;
	var $fixtures = array('app.project', 'app.interval');

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
			'created'  => '2009-05-19 17:06:25',
			'modified'  => '2009-05-19 17:06:25'
		));
		$this->assertEqual($results, $expected);
	}
}
?>