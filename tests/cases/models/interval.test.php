<?php 
/* SVN FILE: $Id$ */
/* Interval Test cases generated on: 2009-05-19 16:05:50 : 1242734810*/
App::import('Model', 'Interval');

class IntervalTestCase extends CakeTestCase {
	var $Interval = null;
	var $fixtures = array('app.interval', 'app.hour', 'app.project');

	function startTest() {
		$this->Interval =& ClassRegistry::init('Interval');
	}

	function testIntervalInstance() {
		$this->assertTrue(is_a($this->Interval, 'Interval'));
	}

	function testIntervalFind() {
		$this->Interval->recursive = -1;
		$results = $this->Interval->find('first');
		$this->assertTrue(!empty($results));

		$expected = array('Interval' => array(
			'id'  => 1,
			'hour_id'  => 1,
			'project_id'  => 1,
			'period'  => 1,
			'type'  => 'Lorem ipsum dolor sit ame',
			'created'  => '2009-05-19 16:06:50'
		));
		$this->assertEqual($results, $expected);
	}
}
?>