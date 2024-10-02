<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $location = $_POST["location"];
    $message = trim($_POST["message"]);

    // Validate inputs
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        http_response_code(400);
        echo "Veuillez remplir tous les champs correctement.";
        exit;
    }

    // Email content
    $subject = "Nouveau message de $name";
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$email>";

    if (mail($location, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Votre message a été envoyé avec succès.";
    } else {
        http_response_code(500);
        echo "Erreur lors de l'envoi du message. Veuillez réessayer.";
    }
} else {
    http_response_code(403);
    echo "Il y a eu un problème avec votre soumission.";
}
?>
