<?php
// Récupérer les paramètres de l'URL
$title = isset($_GET['title']) ? htmlspecialchars($_GET['title']) : 'Vous avez été croissanté !';
$message = isset($_GET['message']) ? htmlspecialchars($_GET['message']) : 'N\'oubliez pas de verrouiller votre PC !';
$backgroundColor = isset($_GET['bg']) ? htmlspecialchars($_GET['bg']) : '#FF4444';
$iconType = isset($_GET['iconType']) ? htmlspecialchars($_GET['iconType']) : 'default';
$iconValue = isset($_GET['iconValue']) ? htmlspecialchars($_GET['iconValue']) : '';
$showQrcode = isset($_GET['qr']) && $_GET['qr'] === '1';
$errorCode = isset($_GET['errorCode']) ? htmlspecialchars($_GET['errorCode']) : '';
$completionText = isset($_GET['completion']) ? htmlspecialchars($_GET['completion']) : '666% completé';
$qrLink = isset($_GET['qrLink']) ? htmlspecialchars($_GET['qrLink']) : '';

// Valider la couleur (format hexadécimal)
if (!preg_match('/^#[0-9A-F]{6}$/i', $backgroundColor)) {
    $backgroundColor = '#FF4444';
}

// URL actuelle pour le QR code (si pas de lien personnalisé)
$currentUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

// Utiliser le lien personnalisé si fourni, sinon l'URL actuelle
$finalQrLink = !empty($qrLink) ? $qrLink : $currentUrl;
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/display.css">
    <style>
        :root {
            --bg-color: <?php echo $backgroundColor; ?>;
        }
    </style>
</head>
<body>
    <div class="prank-container">
        <div class="icon-container">
            <?php
            if ($iconType === 'emoji' && $iconValue) {
                echo '<div class="icon-emoji">' . $iconValue . '</div>';
            } elseif ($iconType === 'url' && $iconValue) {
                echo '<img src="' . $iconValue . '" alt="Icon" class="icon-image" onerror="this.style.display=\'none\'">';
            } else {
                // Icône croissant par défaut (SVG)
                echo '<svg class="icon-default" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 50C20 50 30 20 50 20C70 20 80 50 80 50C80 50 70 80 50 80C30 80 20 50 20 50Z" fill="white" stroke="white" stroke-width="4"/>
                    <circle cx="35" cy="45" r="4" fill="var(--bg-color)"/>
                    <circle cx="50" cy="40" r="4" fill="var(--bg-color)"/>
                </svg>';
            }
            ?>
        </div>

        <h1 class="title"><?php echo nl2br($title); ?></h1>
        
        <p class="message"><?php echo nl2br($message); ?></p>
        
        <div class="completion"><?php echo $completionText; ?></div>
        
        <?php if ($showQrcode): ?>
        <div class="qr-section">
            <div class="qr-text">
                Pour vous cyber-éduquer, scannez le QR code ou cliquez <a href="<?php echo htmlspecialchars($finalQrLink); ?>" class="qr-link" target="_blank">ici</a>. 
                <?php if ($errorCode): ?>
                    <br>Et n'oubliez pas, quelqu'un attend un <strong>pain au chocolat</strong> demain sur son bureau.
                    <br>Error code : <?php echo $errorCode; ?>
                <?php endif; ?>
            </div>
            <div class="qrcode" id="qrcode"></div>
        </div>
        <?php else: ?>
            <?php if ($errorCode): ?>
            <div class="error-code">
                Error code : <?php echo $errorCode; ?>
            </div>
            <?php endif; ?>
        <?php endif; ?>
        
        <div class="hashtag">#LYFC</div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <script>
        const prankData = {
            showQrcode: <?php echo $showQrcode ? 'true' : 'false'; ?>,
            url: <?php echo json_encode($finalQrLink); ?>
        };
    </script>
    <script src="js/display.js"></script>
</body>
</html>
