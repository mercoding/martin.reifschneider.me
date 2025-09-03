<?php
// sendMail.php - KORRIGIERT

// Error Reporting für Debug (später entfernen)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS Headers zuerst setzen
header("Access-Control-Allow-Origin: https://martin.reifschneider.me"); // ✅ Spezifische Domain
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json");

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        // Preflight Response
        http_response_code(200);
        exit;
        
    case "POST":
        try {
            // ✅ Input Validation
            $json = file_get_contents('php://input');
            
            if (empty($json)) {
                throw new Exception('No data received');
            }
            
            $params = json_decode($json, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new Exception('Invalid JSON: ' . json_last_error_msg());
            }
            
            // ✅ Validate required fields
            if (empty($params['email']) || empty($params['name']) || empty($params['message'])) {
                throw new Exception('Missing required fields');
            }
            
            // ✅ Sanitize input
            $email = filter_var($params['email'], FILTER_SANITIZE_EMAIL);
            $name = htmlspecialchars($params['name'], ENT_QUOTES, 'UTF-8');
            $message = htmlspecialchars($params['message'], ENT_QUOTES, 'UTF-8');
            
            // ✅ Validate email
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                throw new Exception('Invalid email address');
            }
            
            // ✅ Email configuration
            $recipient = 'martin@reifschneider.me';
            $subject = "Website Contact from: " . $name . " <" . $email . ">";
            
            // ✅ HTML Email body
            $emailBody = "
            <html>
            <head>
                <title>New Contact Form Submission</title>
            </head>
            <body>
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> " . $name . "</p>
                <p><strong>Email:</strong> " . $email . "</p>
                <p><strong>Message:</strong></p>
                <div style='border: 1px solid #ccc; padding: 10px; margin: 10px 0;'>
                    " . nl2br($message) . "
                </div>
                <hr>
                <p><small>Sent from martin.reifschneider.me contact form</small></p>
            </body>
            </html>";
            
            // ✅ Email headers
            $headers = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';
            $headers[] = 'From: Website Contact Form <noreply@reifschneider.me>';
            $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
            $headers[] = 'X-Mailer: PHP/' . phpversion();
            
            // ✅ Send email
            $mailSent = mail($recipient, $subject, $emailBody, implode("\r\n", $headers));
            
            if ($mailSent) {
                echo json_encode([
                    'success' => true, 
                    'message' => 'Email sent successfully'
                ]);
            } else {
                throw new Exception('Failed to send email');
            }
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false, 
                'error' => $e->getMessage()
            ]);
        }
        break;
        
    default:
        http_response_code(405);
        echo json_encode([
            'success' => false, 
            'error' => 'Method not allowed'
        ]);
        exit;
}
?>