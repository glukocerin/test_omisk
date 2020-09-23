<?php

	$data = json_decode(file_get_contents('php://input'));

	$msg = $data->msg;
	$subject = $data->subject;
	$to = $data->to;

	$result = mail($to,$subject,$msg);

	if(!$result) {   
		http_response_code(404);
	} else {
		http_response_code(200);
	}

?>