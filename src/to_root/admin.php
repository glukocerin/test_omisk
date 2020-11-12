<?php

error_reporting(-1);
ini_set('display_errors', 'On');

$postParams = json_decode(file_get_contents('php://input'), 1);

$action = $postParams['action'];
$payload = $postParams['payload'];

$connection = connect();

if ($action == 'get_entry') {
	getBlogEntry($connection, $payload['id']);
} else if ($action == 'get_entries') {
	getBlogEntries($connection);
} else if ($action == 'add_entry') {
	createNewBlogEntry($connection);
} else if ($action == 'delete_entry') {
	deleteBlogEntry($connection, $payload['id']);
} else if ($action == 'update_entry') {
	updateBlogEntry($connection, $payload);
} else {
	echo 'Bad command or file name ^^';
}

closeConnection($connection);

// <--- listázók
function getBlogEntry($connection, $id) {
	$sql = "SELECT
						*
					FROM
						blog_entries
					WHERE id=$id;";

	$result = mysqli_fetch_all(mysqli_query($connection, $sql), MYSQLI_ASSOC);

	$result[0]['picture'] = base64_encode($result[0]['picture']);

	echo json_encode($result[0]);
}

function getBlogEntries($connection) {
	$sql = "SELECT
						*
					FROM
						blog_entries;";

	$result = mysqli_fetch_all(mysqli_query($connection, $sql), MYSQLI_ASSOC);

	foreach($result as $key=>$value){
		$result[$key]['picture'] = base64_encode($result[$key]['picture']);
	}

	echo json_encode($result);
}
// listázók vége --->

// <--- insert queryk
function createNewBlogEntry($connection) {
	$sql = "INSERT INTO
						blog_entries (title, nav_index, picture, picture_title, text, date)
					VALUES
						('', '', '', '', '', '');";

	if ($connection->query($sql) === TRUE) {
		echo $connection->insert_id;
	}
}
// insert queryk vége --->

// <--- delete queryk
function deleteBlogEntry($connection, $id) {
	$sql = "DELETE
					FROM
						blog_entries
					WHERE
						id = $id;";

	$result = mysqli_query($connection, $sql);
}
// delete queryk vége --->

// <--- update queryk
function updateBlogEntry($connection, $parameters) {
	$sql = "UPDATE
						blog_entries
					SET
						title = '".$parameters['title']."',
						nav_index = '".$parameters['nav_index']."',
						picture = '".$parameters['picture']."',
						picture_title = '".$parameters['picture_title']."',
						text = '".$parameters['text']."',
						date = '".$parameters['date']."'
					WHERE
						id = '".$parameters['id']."';";

	$result = mysqli_query($connection, $sql);
}
// update queryk vége --->

// <--- kapcsolódás függvények
function connect() {
	$dbhost = "localhost";
	$dbuser = "root";
	$dbpass = "Munchen1986!";
	$db = "omisk";
	
	$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

	return $conn;
}
 
function closeConnection($conn) {
	$conn -> close();
}
// kapcsolódás függvények vége --->


?>