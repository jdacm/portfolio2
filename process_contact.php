<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "jarvillanueva077@gmail.com";  // Replace with your email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message could not be sent. Please try again later.";
    }
}
?>
