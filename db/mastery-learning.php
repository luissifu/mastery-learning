<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "mastery-learning";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

	$op = isset($_GET['op']) ? $_GET['op'] : die ("No operation specified");
	$id = isset($_GET['id']) ? $_GET['id'] : '';
	$name = isset($_GET['name']) ? $_GET['name'] : null;
	$description = isset($_GET['description']) ? $_GET['description'] : null;
	$parent = isset($_GET['parent']) ? $_GET['parent'] : null;
	$cid = isset($_GET['cid']) ? $_GET['cid'] : null;
	$title = isset($_GET['title']) ? $_GET['title'] : null;
	$type = isset($_GET['type']) ? $_GET['type'] : null;
	$link = isset($_GET['link']) ? $_GET['link'] : null;

	switch ($op) {
		case "getCourses":	
			getCourses();
			break;
		case "getCourseDescription":	
			getCourseDescription($id);
			break;
		case "getCoursesFromStudent":
			getCoursesFromStudent($id);
			break;
		case "getInteractions":
			getInteractions($id);
			break;
		case "getDomain":
			getDomain($id);
			break;
		case "getEvaluation":
			getEvaluation($id);
			break;
		case "getResource":
			getResource($id);
			break;
		case "getCompetence":
			getCompetence($id);
			break;
		case "getInteractionsFromCompetence":
			getInteractionsFromCompetence($id);
			break;
		case "getDomainsFromCompetence":
			getDomainsFromCompetence($id);
			break;
		case "getEvaluationsFromCompetence":
			getEvaluationsFromCompetence($id);
			break;
		case "getResourcesFromCompetence":
			getResourcesFromCompetence($id);
			break;
		case "createCourse":
			createCourse($name, $description);
			break;
		case "createCompetence":
			createCompetence($name, $parent, $cid);
			break;
		case "createDomain":
			createDomain($name, $description, $cid);
			break;
		case "createEvaluation":
			createEvaluation($title, $type, $description, $link, $cid);
			break;
		case "createResource":
			createResource($title, $type, $description, $link, $cid);
			break;
		case "createInteraction":
			createInteraction($type, $description, $cid);
			break;
	}


	$conn->close();

	function getJSON ($result) {
		$encode = array();
		while($row = $result->fetch_assoc()) {
			$encode[] = $row;
		}
		echo json_encode($encode);	
	}

	function getLast ($stmt) {
		$encode = array();
		$encode[] = array("id" => $stmt->insert_id);
		echo json_encode($encode);	
	}

	function getCourses() {

		$query = "SELECT * FROM Course";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function getCourseDescription ($id) {

		$query = "SELECT * FROM Course WHERE id=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function getCoursesFromStudent($id) {

		$query = "SELECT Course.id, Course.name, Course.description FROM Course INNER JOIN CourseToStudent ON Course.id = CourseToStudent.cid WHERE CourseToStudent.sid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("s", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function getInteractions($id) {

		$query = "SELECT * FROM Interaction WHERE cid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function getDomain($id) {

		$query = "SELECT * FROM Domain WHERE cid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function getEvaluation($id) {

		$query = "SELECT * FROM Evaluation WHERE cid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}
	
	function getResource($id) {

		$query = "SELECT * FROM Resource WHERE cid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function getCompetence($id) {

		$query = "SELECT * FROM Competence WHERE cid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function getInteractionsFromCompetence ($id) {

		$query = "SELECT Interaction.id, Interaction.type, Interaction.description FROM Interaction INNER JOIN CompetenceToInteraction ON Interaction.id = CompetenceToInteraction.iid WHERE CompetenceToInteraction.cid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}
		
	function getDomainsFromCompetence ($id) {

		$query = "SELECT Domain.id, Domain.name, Domain.description FROM Domain INNER JOIN CompetenceToDomain ON Domain.id = CompetenceToDomain.did WHERE CompetenceToDomain.cid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function getEvaluationsFromCompetence ($id) {

		$query = "SELECT Evaluation.id, Evaluation.title, Evaluation.type, Evaluation.descrption, Evaluation.link  FROM Evaluation INNER JOIN CompetenceToEvaluation ON Evaluation.id = CompetenceToEvaluation.eid WHERE CompetenceToEvaluation.cid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function getResourcesFromCompetence ($id) {

		$query = "SELECT Resource.id, Resource.title, Resource.type, Resource.descrption, Resource.link  FROM Resource INNER JOIN CompetenceToResource ON Resource.id = CompetenceToResource.rid WHERE CompetenceToResource.cid=?";

		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("i", $id);
			$stmt->execute();
			$result = $stmt->get_result();
			getJSON($result);
			$stmt->close();
		}
	}

	function createCourse ($name, $description) {

		$query = "INSERT INTO Course (name, description) VALUES (?, ?)";
		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("ss", $name, $description);
			$stmt->execute();
			getLast($stmt);
			$stmt->close();
		}
	}
	
	function createCompetence ($name, $parent, $cid) {

		$query = "INSERT INTO Competence (name, parent, cid) VALUES (?, ?, ?)";
		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("sii", $name, $parent, $cid);
			$stmt->execute();
			getLast($stmt);
			$stmt->close();
		}
	}

	function createDomain ($name, $description, $cid) {

		$query = "INSERT INTO Domain (name, description, cid) VALUES (?, ?, ?)";
		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("ssi", $name, $description, $cid);
			$stmt->execute();
			getLast($stmt);
			$stmt->close();
		}
	}

	function createEvaluation ($title, $type, $description, $link, $cid) {

		$query = "INSERT INTO Evaluation (title, type, descrption, link, cid) VALUES (?, ?, ?, ?, ?)";
		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("ssssi", $title, $type, $description, $link, $cid);
			$stmt->execute();
			getLast($stmt);
			$stmt->close();
		}
	}
	
	function createResource ($title, $type, $description, $link, $cid) {

		$query = "INSERT INTO Resource (title, type, descrption, link, cid) VALUES (?, ?, ?, ?, ?)";
		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("ssssi", $title, $type, $description, $link, $cid);
			$stmt->execute();
			getLast($stmt);
			$stmt->close();
		}
	}

	function createInteraction($type, $description, $cid) {

		$query = "INSERT INTO Interaction (type, description, cid) VALUES (?, ?, ?)";
		if ($stmt = $GLOBALS['conn']->prepare($query)) {
			$stmt->bind_param("ssi", $type, $description, $cid);
			$stmt->execute();
			getLast($stmt);
			$stmt->close();
		}
	}
?>

