<?php 
/* SVN FILE: $Id$ */
/* HoursController Test cases generated on: 2009-05-19 16:05:49 : 1242734689*/
App::import('Controller', 'Hours');

class TestHours extends HoursController {
	var $autoRender = false;
}

class HoursControllerTest extends CakeTestCase {
	var $Hours = null;

	function startTest() {
		$this->Hours = new TestHours();
		$this->Hours->constructClasses();
	}

	function testHoursControllerInstance() {
		$this->assertTrue(is_a($this->Hours, 'HoursController'));
	}

	function endTest() {
		unset($this->Hours);
	}
}
?>