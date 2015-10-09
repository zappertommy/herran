<?php
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);

  ini_set ("SMTP", "localhost");
  ini_set("smtp_port", "25");
  ini_set("sendmail_from", $request->email);

  $headers = "Content-Type: text/html; charset=UTF-8 \r\n";
  $headers .= "From: ".$request->name." <".$request->email."> \r\n";

  $sent = mail('castillo_tomasiii@yahoo.com', 'Herran Bread Website', $request->comment, $headers);

  if ($sent) {
    $ret = array(
      'status'  => 1,
      'message' => 'Feedback sent!'
    );
  } else {
    $ret = array(
      'status'  => 0,
      'message' => 'Unable to send feedback, please try again later.'
    );
  }

  echo json_encode($ret);
?>