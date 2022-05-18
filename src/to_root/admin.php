<?php

error_reporting(-1);
ini_set('display_errors', 'On');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

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
/*} else if ($action == 'update_entry') {
	updateBlogEntry($connection, $payload); */
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

	$result = $connection->query($sql);

	while ( $row = mysqli_fetch_assoc( $result ) ) {
		$row["picture"] = base64_encode($row['picture']);
		$row["picture_card"] = base64_encode($row['picture_card']);
		$row["picture_title"] = utf8_encode($row["picture_title"]);
		$row["title"] = utf8_encode($row["title"]);
		$row["text_first"] = utf8_encode($row["text_first"]);
		$row["text_second"] = utf8_encode($row["text_second"]);

		$resultArray[] = $row;
	}

	echo json_encode($resultArray);
}

function getBlogEntries($connection) {
	$sql = "SELECT
				*
			FROM
				blog_entries
			WHERE
				hidden = false;";

	$result = $connection->query($sql);

	while ( $row = mysqli_fetch_assoc( $result ) ) {
		$row["picture"] = base64_encode($row['picture']);
		$row["picture_card"] = base64_encode($row['picture_card']);
		$row["picture_title"] = utf8_encode($row["picture_title"]);
		$row["title"] = utf8_encode($row["title"]);
		$row["text_first"] = utf8_encode($row["text_first"]);
		$row["text_second"] = utf8_encode($row["text_second"]);

		$resultArray[] = $row;
	}

	echo json_encode($resultArray);
}
// listázók vége --->

// <--- insert queryk
function createNewBlogEntry($connection) {
	$sql = "INSERT INTO
						blog_entries (date, idx, is_active, picture, picture_card, picture_title, text_first, text_second, title, hidden)
					VALUES
						('', '', '', '', '', '', '', '', '', '');";

	if ($connection->query($sql) === TRUE) {
		echo $connection->insert_id;
	}
}
// insert queryk vége --->

// <--- delete queryk
function deleteBlogEntry($connection, $id) {
	$sql = "UPDATE
						blog_entries
					SET
						hidden = true
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

}
 
function closeConnection($conn) {
	$conn -> close();
}
// kapcsolódás függvények vége --->


?>