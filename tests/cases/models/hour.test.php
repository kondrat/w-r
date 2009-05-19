<?php 
/* SVN FILE: $Id$ */
/* Hour Test cases generated on: 2009-05-19 16:05:14 : 1242734594*/
App::import('Model', 'Hour');

class HourTestCase extends CakeTestCase {
	var $Hour = null;
	var $fixtures = array('app.hour', 'app.user', 'app.interval');

	function startTest() {
		$this->Hour =& ClassRegistry::init('Hour');
	}

	function testHourInstance() {
		$this->assertTrue(is_a($this->Hour, 'Hour'));
	}

	function testHourFind() {
		$this->Hour->recursive = -1;
		$results = $this->Hour->find('first');
		$this->assertTrue(!empty($results));

		$expected = array('Hour' => array(
			'id'  => 1,
			'user_id'  => 1,
			'start'  => '2009-05-19 16:03:14',
			'created'  => '2009-05-19 16:03:14'
		));
		$this->assertEqual($results, $expected);
	}
}
?>