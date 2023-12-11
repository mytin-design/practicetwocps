<?php
//get data from form  

$clientEmail= htmlspecialchars($_POST['cpsdatamail']);
$clientRequest = htmlspecialchars($_POST['cpsmessage']);
$to = "info@consolataschoolnyeri.org";
$subject = "Consolata School - Nyeri:New Feedback Request!";
$txt ="Email = " . $clientEmail . "\r\n Message = " . $clientRequest;
$headers = "From: ".$clientEmail . "\r\n" .
"CC: director@consolaschoolnyeri.org";
if($clientEmail!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");

/* Prepare autoresponder subject */
$respond_subject = "Thank you for contacting us!";

/* Prepare autoresponder message */
$respond_message = "Hello! 

Thank you for contacting us! We will get back to you
as soon as possible!

Yours sincerely,

Support Team.
www.consolataschoolnyeri.org
";

/* Send the message using mail() function */
$headers = "From: info@consolataschoolnyeri.org";
mail($clientEmail, $respond_subject, $respond_message, $headers);
?>


<?php
function check_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>