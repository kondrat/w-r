<?php 
/* SVN FILE: $Id$ */
/* IntervalsController Test cases generated on: 2009-05-19 16:05:35 : 1242734855*/
App::import('Controller', 'Intervals');

class TestIntervals extends IntervalsController {
	var $autoRender = false;
}

class IntervalsControllerTest extends CakeTestCase {
	var $Intervals = null;

	function startTest() {
		$this->Intervals = new TestIntervals();
		$this->Intervals->constructClasses();
	}

	function testIntervalsControllerInstance() {
		$this->assertTrue(is_a($this->Intervals, 'IntervalsController'));
	}

	function endTest() {
		unset($this->Intervals);
	}
}
?>