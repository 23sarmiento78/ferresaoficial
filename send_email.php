<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Configurar el correo
    $to = "ferre.savzla@gmail.com";
    $subject = "Nueva Solicitud de Cotización - Ferre.Sa";
    
    // Crear el cuerpo del mensaje
    $email_content = "Has recibido una nueva solicitud de cotización:\n\n";
    $email_content .= "Nombre: $name\n";
    $email_content .= "Teléfono: $phone\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";
    
    // Cabeceras del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Enviar el correo
    if (mail($to, $subject, $email_content, $headers)) {
        $response = array(
            "status" => "success",
            "message" => "¡Mensaje enviado con éxito!"
        );
    } else {
        $response = array(
            "status" => "error",
            "message" => "Hubo un error al enviar el mensaje."
        );
    }
    
    // Devolver respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?> 