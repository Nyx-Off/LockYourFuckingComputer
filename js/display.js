document.addEventListener('DOMContentLoaded', function() {
    // Passer en mode plein écran sur TOUS les écrans disponibles
    enterFullscreenAllScreens();
    
    // Générer le QR code si nécessaire
    if (prankData.showQrcode) {
        generateQRCode();
    }
    
    // Bloquer certaines touches
    blockKeyboardShortcuts();
    
    // Bloquer le menu contextuel
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // Empêcher la fermeture accidentelle
    window.addEventListener('beforeunload', function(e) {
        e.preventDefault();
        e.returnValue = '';
    });
    
    // Désactiver le clic droit
    document.addEventListener('contextmenu', e => e.preventDefault());
});

// Fonction pour passer en plein écran sur TOUS les écrans
async function enterFullscreenAllScreens() {
    const elem = document.documentElement;
    
    try {
        // Méthode 1 : Fullscreen API standard
        if (elem.requestFullscreen) {
            await elem.requestFullscreen({ navigationUI: "hide" });
        } else if (elem.webkitRequestFullscreen) {
            await elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            await elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            await elem.mozRequestFullScreen();
        }
        
        // Ajouter la classe pour les styles
        document.body.classList.add('fullscreen');
        
        // Méthode 2 : Tenter d'étendre sur tous les écrans avec Window Management API
        if ('getScreenDetails' in window) {
            try {
                const screenDetails = await window.getScreenDetails();
                
                // Si plusieurs écrans détectés
                if (screenDetails.screens.length > 1) {
                    console.log(`${screenDetails.screens.length} écrans détectés`);
                    
                    // Ouvrir des fenêtres popup en plein écran sur chaque écran
                    screenDetails.screens.forEach((screen, index) => {
                        if (index === 0) return; // On garde l'écran principal
                        
                        const features = [
                            `left=${screen.left}`,
                            `top=${screen.top}`,
                            `width=${screen.width}`,
                            `height=${screen.height}`,
                            'toolbar=no',
                            'location=no',
                            'directories=no',
                            'status=no',
                            'menubar=no',
                            'scrollbars=no',
                            'resizable=no',
                            'copyhistory=no'
                        ].join(',');
                        
                        const popup = window.open(window.location.href, `_blank_${index}`, features);
                        
                        if (popup) {
                            // Tenter de mettre la popup en plein écran
                            setTimeout(() => {
                                if (popup.document && popup.document.documentElement.requestFullscreen) {
                                    popup.document.documentElement.requestFullscreen().catch(err => {
                                        console.log('Erreur plein écran popup:', err);
                                    });
                                }
                            }, 100);
                        }
                    });
                }
            } catch (err) {
                console.log('Window Management API non disponible:', err);
            }
        }
        
        // Méthode 3 : Maximiser la fenêtre (si possible)
        if (window.moveTo && window.resizeTo) {
            try {
                window.moveTo(0, 0);
                window.resizeTo(screen.width, screen.height);
            } catch (err) {
                console.log('Impossible de maximiser:', err);
            }
        }
        
    } catch (err) {
        console.log('Impossible d\'activer le plein écran:', err);
        
        // Fallback : au moins maximiser la fenêtre
        try {
            window.moveTo(0, 0);
            window.resizeTo(screen.availWidth, screen.availHeight);
        } catch (e) {
            console.log('Impossible de maximiser la fenêtre');
        }
    }
    
    // Forcer le plein écran après un délai (au cas où)
    setTimeout(() => {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            enterFullscreenAllScreens();
        }
    }, 500);
}

// Générer le QR code
function generateQRCode() {
    const qrcodeDiv = document.getElementById('qrcode');
    
    if (qrcodeDiv && typeof QRCode !== 'undefined') {
        new QRCode(qrcodeDiv, {
            text: prankData.url,
            width: 150,
            height: 150,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

// Bloquer les raccourcis clavier
function blockKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // F11 (Plein écran)
        if (e.key === 'F11') {
            e.preventDefault();
            enterFullscreenAllScreens();
        }
        
        // Echap (Sortie plein écran)
        if (e.key === 'Escape' || e.key === 'Esc') {
            e.preventDefault();
            enterFullscreenAllScreens();
        }
        
        // Alt + F4 (Fermer fenêtre)
        if (e.altKey && e.key === 'F4') {
            e.preventDefault();
        }
        
        // Ctrl + W (Fermer onglet)
        if (e.ctrlKey && e.key === 'w') {
            e.preventDefault();
        }
        
        // Ctrl + Q (Quitter)
        if (e.ctrlKey && e.key === 'q') {
            e.preventDefault();
        }
        
        // Alt + Tab (Changer fenêtre)
        if (e.altKey && e.key === 'Tab') {
            e.preventDefault();
        }
        
        // F5 et Ctrl + R (Actualiser)
        if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
            e.preventDefault();
        }
        
        // Ctrl + Shift + I et F12 (DevTools)
        if ((e.ctrlKey && e.shiftKey && e.key === 'I') || e.key === 'F12') {
            e.preventDefault();
        }
        
        // Windows + L (verrouiller - on peut pas bloquer mais on peut tenter)
        if (e.metaKey && e.key === 'l') {
            e.preventDefault();
        }
        
        // Ctrl + Alt + Suppr (impossible à bloquer vraiment)
        if (e.ctrlKey && e.altKey && e.key === 'Delete') {
            e.preventDefault();
        }
    });
}

// Réactiver le plein écran si l'utilisateur sort
document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
        setTimeout(() => {
            enterFullscreenAllScreens();
        }, 100);
    }
});

document.addEventListener('webkitfullscreenchange', function() {
    if (!document.webkitFullscreenElement) {
        setTimeout(() => {
            enterFullscreenAllScreens();
        }, 100);
    }
});

document.addEventListener('mozfullscreenchange', function() {
    if (!document.mozFullScreenElement) {
        setTimeout(() => {
            enterFullscreenAllScreens();
        }, 100);
    }
});

document.addEventListener('MSFullscreenChange', function() {
    if (!document.msFullscreenElement) {
        setTimeout(() => {
            enterFullscreenAllScreens();
        }, 100);
    }
});

// Empêcher le zoom
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
}, { passive: false });

document.addEventListener('gesturechange', function(e) {
    e.preventDefault();
}, { passive: false });

document.addEventListener('gestureend', function(e) {
    e.preventDefault();
}, { passive: false });

// Empêcher le zoom tactile
document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

// Désactiver le zoom par double-tap sur mobile
let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Bloquer la sélection de texte
document.onselectstart = function() { return false; };

// Tenter de garder le focus sur la fenêtre
window.addEventListener('blur', function() {
    setTimeout(() => {
        window.focus();
    }, 10);
});

// Surveillance continue pour remettre en plein écran
setInterval(() => {
    if (!document.fullscreenElement && 
        !document.webkitFullscreenElement && 
        !document.mozFullScreenElement && 
        !document.msFullscreenElement) {
        enterFullscreenAllScreens();
    }
}, 2000);
