<?php 
/* SVN FILE: $Id$ */
/* ProjectsController Test cases generated on: 2009-05-19 17:05:49 : 1242740929*/
App::import('Controller', 'Projects');

class TestProjects extends ProjectsController {
	var $autoRender = false;
}

class ProjectsControllerTest extends CakeTestCase {
	var $Projects = null;

	function startTest() {
		$this->Projects = new TestProjects();
		$this->Projects->constructClasses();
	}

	function testProjectsControllerInstance() {
		$this->assertTrue(is_a($this->Projects, 'ProjectsController'));
	}

	function endTest() {
		unset($this->Projects);
	}
}
?>