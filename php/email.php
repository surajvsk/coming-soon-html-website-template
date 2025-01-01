<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the email from the POST data
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

    if ($email) {
        // Email details
        $to = $email; // The email of the subscriber
        $subject = "Subscription Notification";
        $message = "Thank you for subscribing! We will notify you with updates.";
        $headers = "From: no-reply@yourwebsite.com" . "\r\n";

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            // Success message
            echo "<script>alert('Subscription successful! Check your email for confirmation.');</script>";
        } else {
            // Failure message
            echo "<script>alert('Failed to send the email. Please try again later.');</script>";
        }
    } else {
        // Invalid email message
        echo "<script>alert('Invalid email address. Please enter a valid email.');</script>";
    }
}
?>