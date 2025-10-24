// Templates pré-définis
const templates = {
    croissant: {
        title: "Tu viens de te faire Croissanter !",
        message: "Des membres de l'équipe ont décidé de vous Croissanter, car vous n'aviez pas VERROUILLÉ votre poste en le quittant.",
        bg: "#f90000",
        iconType: "emoji",
        iconValue: "🥐",
        qr: true,
        errorCode: "WIN+L",
        completion: "666% completé",
        qrLink: ""
    },
    securite: {
        title: "ERREUR CRITIQUE DE SÉCURITÉ",
        message: "Votre poste de travail a été laissé sans surveillance et non verrouillé. Protocole de sécurité activé : un croissant est maintenant requis pour débloquer.",
        bg: "#DC143C",
        iconType: "emoji",
        iconValue: "🔒",
        qr: true,
        errorCode: "SECURITY_BREACH",
        completion: "100% compromis",
        qrLink: ""
    },
    cafe: {
        title: "☕ PROTOCOLE CAFÉ ACTIVÉ",
        message: "Système de détection : Poste non verrouillé. Pour restaurer l'accès, veuillez fournir 1 (un) café à votre collègue vigilant.",
        bg: "#8B4513",
        iconType: "emoji",
        iconValue: "☕",
        qr: true,
        errorCode: "COFFEE_REQUIRED",
        completion: "300% caféiné",
        qrLink: ""
    },
    windows: {
        title: "Windows a rencontré un problème",
        message: "Votre PC a rencontré un problème et doit redémarrer. Nous collectons des informations sur l'erreur, puis nous redémarrerons pour vous.\n\nSi vous souhaitez en savoir plus, vous pouvez rechercher cette erreur en ligne : UNLOCK_FAILED",
        bg: "#0078D4",
        iconType: "emoji",
        iconValue: "💻",
        qr: true,
        errorCode: "0x000000CROISSANT",
        completion: "42% completé",
        qrLink: ""
    },
    pizza: {
        title: "🍕 PIZZA TIME 🍕",
        message: "Alerte ! Votre négligence a été détectée. Une part de pizza est maintenant due lors de la prochaine commande d'équipe.",
        bg: "#FF6B35",
        iconType: "emoji",
        iconValue: "🍕",
        qr: true,
        errorCode: "PIZZA_DEBT",
        completion: "200% affamé",
        qrLink: ""
    },
    urgent: {
        title: "🚨 ALERTE ROUGE NIVEAU 5 🚨",
        message: "ATTENTION : Incident de sécurité de classe A détecté. Votre poste n'était pas verrouillé. Tous les agents disponibles sont mobilisés pour acquérir des croissants de compensation immédiate.",
        bg: "#FF0000",
        iconType: "emoji",
        iconValue: "🚨",
        qr: true,
        errorCode: "DEFCON_CROISSANT",
        completion: "999% ALERTE",
        qrLink: ""
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Éléments du DOM
    const form = document.getElementById('prankForm');
    const submitBtn = document.getElementById('submitBtn');
    const resultSection = document.getElementById('resultSection');
    const prankUrlInput = document.getElementById('prankUrl');
    const copyBtn = document.getElementById('copyBtn');
    const openLink = document.getElementById('openLink');
    const newPrankBtn = document.getElementById('newPrankBtn');
    const colorInput = document.getElementById('backgroundColor');
    const colorValue = document.querySelector('.color-value');
    
    // Gestion des templates
    const templateCards = document.querySelectorAll('.template-card');
    templateCards.forEach(card => {
        const templateBtn = card.querySelector('.btn-template');
        templateBtn.addEventListener('click', function() {
            const templateName = card.dataset.template;
            loadTemplate(templateName);
            
            // Scroll vers le formulaire
            document.querySelector('.form-section-wrapper').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Charger un template
    function loadTemplate(name) {
        const template = templates[name];
        if (!template) return;
        
        // Remplir le formulaire
        document.getElementById('title').value = template.title;
        document.getElementById('message').value = template.message;
        document.getElementById('backgroundColor').value = template.bg;
        document.querySelector('.color-value').textContent = template.bg.toUpperCase();
        document.getElementById('completionText').value = template.completion;
        document.getElementById('errorCode').value = template.errorCode;
        document.getElementById('showQrcode').checked = template.qr;
        document.getElementById('qrLink').value = template.qrLink || '';
        
        // Sélectionner le type d'icône
        const iconTypeRadios = document.querySelectorAll('input[name="iconType"]');
        iconTypeRadios.forEach(radio => {
            if (radio.value === template.iconType) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change'));
            }
        });
        
        // Remplir la valeur de l'icône
        if (template.iconType === 'emoji') {
            document.querySelector('input[name="emoji"]').value = template.iconValue;
        } else if (template.iconType === 'url') {
            document.querySelector('input[name="iconUrl"]').value = template.iconValue;
        }
    }
    
    // Gestion du sélecteur de type d'icône
    const iconTypeRadios = document.querySelectorAll('input[name="iconType"]');
    const emojiInput = document.getElementById('emojiInput');
    const urlInput = document.getElementById('urlInput');
    
    iconTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            emojiInput.style.display = 'none';
            urlInput.style.display = 'none';
            
            if (this.value === 'emoji') {
                emojiInput.style.display = 'block';
            } else if (this.value === 'url') {
                urlInput.style.display = 'block';
            }
        });
    });
    
    // Mise à jour de la valeur de couleur affichée
    colorInput.addEventListener('input', function() {
        colorValue.textContent = this.value.toUpperCase();
    });
    
    // Soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs
        const formData = new FormData(form);
        const title = formData.get('title');
        const message = formData.get('message');
        const backgroundColor = formData.get('backgroundColor');
        const iconType = formData.get('iconType');
        const showQrcode = document.getElementById('showQrcode').checked ? '1' : '0';
        const errorCode = formData.get('errorCode') || '';
        const completionText = formData.get('completionText') || '666% completé';
        const qrLink = formData.get('qrLink') || '';
        
        // Récupérer la valeur de l'icône selon le type
        let iconValue = '';
        if (iconType === 'emoji') {
            iconValue = formData.get('emoji') || '';
            if (!iconValue) {
                alert('Veuillez entrer un emoji');
                return;
            }
        } else if (iconType === 'url') {
            iconValue = formData.get('iconUrl') || '';
            if (!iconValue) {
                alert('Veuillez entrer une URL d\'image');
                return;
            }
            // Valider l'URL
            try {
                new URL(iconValue);
            } catch {
                alert('URL invalide. Veuillez entrer une URL complète (ex: https://example.com/image.png)');
                return;
            }
        }
        
        // Construire l'URL
        const baseUrl = window.location.origin + window.location.pathname.replace('index.php', '') + 'display.php';
        const params = new URLSearchParams({
            title: title,
            message: message,
            bg: backgroundColor,
            iconType: iconType,
            iconValue: iconValue,
            qr: showQrcode,
            errorCode: errorCode,
            completion: completionText,
            qrLink: qrLink
        });
        
        const prankUrl = baseUrl + '?' + params.toString();
        
        // Afficher le résultat
        showResult(prankUrl);
    });
    
    // Afficher le résultat
    function showResult(url) {
        prankUrlInput.value = url;
        openLink.href = url;
        resultSection.style.display = 'block';
        document.querySelector('.form-section-wrapper').style.display = 'none';
        document.querySelector('.templates-section').style.display = 'none';
        
        // Générer le QR code
        const qrcodeDisplay = document.getElementById('qrcodeDisplay');
        qrcodeDisplay.innerHTML = ''; // Clear previous QR code
        
        new QRCode(qrcodeDisplay, {
            text: url,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // Scroller vers le résultat
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Copier l'URL
    copyBtn.addEventListener('click', function() {
        prankUrlInput.select();
        prankUrlInput.setSelectionRange(0, 99999); // Pour mobile
        
        // Utiliser l'API moderne si disponible
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(prankUrlInput.value).then(() => {
                showCopyFeedback();
            }).catch(() => {
                // Fallback
                document.execCommand('copy');
                showCopyFeedback();
            });
        } else {
            // Fallback pour anciens navigateurs
            document.execCommand('copy');
            showCopyFeedback();
        }
    });
    
    function showCopyFeedback() {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ Copié !';
        copyBtn.style.background = '#10b981';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }
    
    // Créer un nouveau prank
    newPrankBtn.addEventListener('click', function() {
        document.querySelector('.form-section-wrapper').style.display = 'block';
        document.querySelector('.templates-section').style.display = 'block';
        resultSection.style.display = 'none';
        form.reset();
        colorValue.textContent = '#FF4444';
        
        // Réinitialiser les champs d'icône
        emojiInput.style.display = 'none';
        urlInput.style.display = 'none';
        
        // Scroller vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Empêcher la soumission par Entrée dans les champs texte (sauf textarea)
    const textInputs = form.querySelectorAll('input[type="text"], input[type="url"]');
    textInputs.forEach(input => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    });
});
