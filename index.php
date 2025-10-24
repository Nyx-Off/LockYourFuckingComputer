<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LYFC - Lock Your Fucking Computer</title>
    <meta name="description" content="Créez des pranks personnalisés pour vos collègues qui oublient de verrouiller leur PC !">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>🔒 LYFC</h1>
            <p class="subtitle">Lock Your Fucking Computer</p>
            <p class="description">Créez un faux message d'erreur personnalisé pour vos collègues qui oublient de verrouiller leur PC !</p>
        </header>

        <main class="main">
            <!-- Templates Section -->
            <section class="templates-section">
                <h2>⚡ Templates pré-faits</h2>
                <p class="templates-description">Cliquez sur un template pour l'utiliser directement ou le personnaliser</p>
                
                <div class="templates-grid">
                    <div class="template-card" data-template="croissant">
                        <div class="template-icon">🥐</div>
                        <h3>Croissant Classique</h3>
                        <p>Le grand classique qui ne se démode jamais</p>
                        <button class="btn-template">Utiliser</button>
                    </div>

                    <div class="template-card" data-template="securite">
                        <div class="template-icon">🔒</div>
                        <h3>Alerte Sécurité</h3>
                        <p>Erreur critique de verrouillage</p>
                        <button class="btn-template">Utiliser</button>
                    </div>

                    <div class="template-card" data-template="cafe">
                        <div class="template-icon">☕</div>
                        <h3>Protocole Café</h3>
                        <p>Un café s'impose pour débloquer</p>
                        <button class="btn-template">Utiliser</button>
                    </div>

                    <div class="template-card" data-template="windows">
                        <div class="template-icon">💻</div>
                        <h3>Écran Bleu Windows</h3>
                        <p>Style BSOD authentique</p>
                        <button class="btn-template">Utiliser</button>
                    </div>

                    <div class="template-card" data-template="pizza">
                        <div class="template-icon">🍕</div>
                        <h3>Pizza Time</h3>
                        <p>Une part de pizza en échange</p>
                        <button class="btn-template">Utiliser</button>
                    </div>

                    <div class="template-card" data-template="urgent">
                        <div class="template-icon">🚨</div>
                        <h3>Urgence Maximale</h3>
                        <p>Alerte rouge niveau 5</p>
                        <button class="btn-template">Utiliser</button>
                    </div>
                </div>
            </section>

            <!-- Custom Form -->
            <section class="form-section-wrapper">
                <h2>🎨 Ou créez votre propre prank</h2>
                
                <form id="prankForm" class="form">
                    <div class="form-section">
                        <h3>Apparence</h3>
                        
                        <div class="form-group">
                            <label for="backgroundColor">Couleur de fond</label>
                            <div class="color-picker-wrapper">
                                <input type="color" id="backgroundColor" name="backgroundColor" value="#FF4444" required>
                                <span class="color-value">#FF4444</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Icône</label>
                            <div class="icon-type-selector">
                                <label class="radio-label">
                                    <input type="radio" name="iconType" value="default" checked>
                                    <span>Par défaut</span>
                                </label>
                                <label class="radio-label">
                                    <input type="radio" name="iconType" value="emoji">
                                    <span>Emoji</span>
                                </label>
                                <label class="radio-label">
                                    <input type="radio" name="iconType" value="url">
                                    <span>URL d'image</span>
                                </label>
                            </div>

                            <div id="emojiInput" class="icon-input" style="display: none;">
                                <input type="text" name="emoji" placeholder="Entrez un emoji (ex: 😱, 🔒, ⚠️)" maxlength="4">
                            </div>

                            <div id="urlInput" class="icon-input" style="display: none;">
                                <input type="url" name="iconUrl" placeholder="https://example.com/image.png">
                                <small>URL d'une image PNG, JPG, SVG ou WEBP</small>
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3>Contenu</h3>
                        
                        <div class="form-group">
                            <label for="title">Titre</label>
                            <input type="text" id="title" name="title" placeholder="Tu viens de te faire Croissanter !" required maxlength="200">
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Des membres de l'équipe ont décidé de vous Croissanter, car vous n'aviez pas VERROUILLÉ votre poste en le quittant." required maxlength="500"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="completionText">Texte de complétion</label>
                            <input type="text" id="completionText" name="completionText" placeholder="666% completé" value="666% completé" maxlength="50">
                        </div>

                        <div class="form-group">
                            <label for="errorCode">Code d'erreur (optionnel)</label>
                            <input type="text" id="errorCode" name="errorCode" placeholder="Ex: WIN+L" maxlength="50">
                        </div>
                    </div>

                    <div class="form-section">
                        <h3>Options avancées</h3>
                        
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" name="showQrcode" id="showQrcode" checked>
                                <span>Afficher un QR code</span>
                            </label>
                        </div>

                        <div class="form-group">
                            <label for="qrLink">Lien du QR code / lien "ici" (optionnel)</label>
                            <input type="url" id="qrLink" name="qrLink" placeholder="https://example.com ou laissez vide pour auto">
                            <small>Si vide, pointe vers la page actuelle</small>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary" id="submitBtn">
                            🚀 Générer le lien
                        </button>
                    </div>
                </form>
            </section>

            <div id="resultSection" class="result-section" style="display: none;">
                <h2>✅ Lien généré avec succès !</h2>
                <div class="result-content">
                    <div class="url-display">
                        <input type="text" id="prankUrl" readonly>
                        <button class="btn btn-secondary" id="copyBtn">📋 Copier</button>
                    </div>
                    <div class="qrcode-display" id="qrcodeDisplay"></div>
                    <div class="result-actions">
                        <a href="#" id="openLink" class="btn btn-primary" target="_blank">🔗 Ouvrir le prank</a>
                        <button class="btn btn-secondary" id="newPrankBtn">Nouveau prank</button>
                    </div>
                    <p class="result-info">Partagez ce lien avec votre victime... ou ouvrez-le sur son PC ! 😈</p>
                </div>
            </div>
        </main>

        <footer class="footer">
            <p>Made with 😈 by LYFC Team | N'oubliez jamais : WIN+L</p>
        </footer>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <script src="js/create.js"></script>
</body>
</html>
