# 🔒 LYFC - Lock Your Fucking Computer

Un outil ludique et immersif pour sensibiliser vos collègues à la sécurité informatique en créant des fausses pages d'erreur personnalisées en plein écran !

## ✨ Nouveautés v3.0

- ✅ **Plein écran multi-écrans** : Détection et activation sur TOUS les écrans disponibles
- ✅ **6 templates pré-faits** : Prêts à utiliser en 1 clic
- ✅ **Lien QR personnalisable** : Choisissez où le lien "ici" et le QR code renvoient
- ✅ **Blocage renforcé** : Plus difficile d'échapper au prank
- ✅ **Design amélioré** : Interface moderne avec cartes de templates

## 🎯 Fonctionnalités

### Templates pré-faits
- 🥐 **Croissant Classique** - Le grand classique
- 🔒 **Alerte Sécurité** - Erreur critique de verrouillage
- ☕ **Protocole Café** - Un café pour débloquer
- 💻 **Écran Bleu Windows** - Style BSOD authentique
- 🍕 **Pizza Time** - Une part de pizza en échange
- 🚨 **Urgence Maximale** - Alerte rouge niveau 5

### Personnalisation complète
- Couleur de fond au choix
- 3 types d'icônes : défaut, emoji, ou URL d'image
- Titre et message personnalisés
- Code d'erreur optionnel
- Texte de complétion
- QR code avec lien personnalisable

### Mode immersif
- **Plein écran automatique sur TOUS les écrans**
- Détection et activation multi-écrans
- Blocage de touches : Echap, F11, Alt+F4, Ctrl+W, F5, F12
- Tentative de maintien du focus
- Surveillance continue pour remettre en plein écran
- Animations fluides et professionnelles

## ⚡ Installation (1 minute)

### Prérequis
- Serveur web (Apache ou Nginx)
- PHP 7.0+

### Installation

```bash
# 1. Extraire les fichiers
unzip lyfc.zip

# 2. Placer dans votre serveur web
cp -r lyfc /var/www/html/

# 3. Accéder à l'application
http://localhost/lyfc

# C'est tout ! ✨
```

## 🚀 Utilisation

### Méthode 1 : Utiliser un template

1. Ouvrez `http://localhost/lyfc`
2. Cliquez sur un des 6 templates pré-faits
3. (Optionnel) Personnalisez le contenu
4. Cliquez sur "Générer le lien"
5. Copiez l'URL
6. Ouvrez sur le PC de votre victime ! 😈

### Méthode 2 : Créer de zéro

1. Scrollez jusqu'à "Ou créez votre propre prank"
2. Personnalisez :
   - **Couleur** : Ex. #FF4444 (rouge)
   - **Icône** : Croissant / Emoji 🔒 / URL d'image
   - **Titre** : "Tu viens de te faire Croissanter !"
   - **Message** : Votre texte personnalisé
   - **Lien QR/ici** : URL personnalisée (optionnel)
3. Générez et copiez le lien

### Options avancées

**Personnaliser le lien "ici" et le QR code** :
- Par défaut : Pointe vers la page du prank
- Personnalisé : Entrez une URL (ex: https://rickroll.com 😈)
- Le lien "ici" ET le QR code utiliseront cette URL

## 📂 Structure du projet

```
lyfc/
├── index.php          # Formulaire avec templates
├── display.php        # Page du prank
├── css/
│   ├── style.css      # Style formulaire et templates
│   └── display.css    # Style page prank
├── js/
│   ├── create.js      # Templates + génération URL
│   └── display.js     # Multi-écrans + blocage
├── .htaccess          # Config Apache
└── README.md          # Ce fichier
```

## 🎨 Exemples d'utilisation

### Template Croissant Classique

```
https://votre-site.com/lyfc/display.php?title=Tu+viens+de+te+faire+Croissanter+!&message=Des+membres+de+l%27%C3%A9quipe+ont+d%C3%A9cid%C3%A9+de+vous+Croissanter%2C+car+vous+n%27aviez+pas+VERROUILL%C3%89+votre+poste+en+le+quittant.&bg=%23f90000&iconType=emoji&iconValue=%F0%9F%A5%90&qr=1&errorCode=WIN%2BL&completion=666%25+complet%C3%A9&qrLink=
```

### Avec lien personnalisé

```
display.php?...&qrLink=https://example.com/security-training
```

Le lien "ici" et le QR code renverront vers `https://example.com/security-training`

## 💡 Fonctionnement multi-écrans

Le système utilise plusieurs techniques pour s'afficher sur tous les écrans :

1. **Fullscreen API standard** : Plein écran sur l'écran principal
2. **Window Management API** : Détection des écrans multiples
3. **Popups automatiques** : Ouverture sur chaque écran secondaire
4. **Maximisation** : Fallback si plein écran refusé
5. **Surveillance continue** : Réactivation automatique toutes les 2 secondes

**Note** : Les navigateurs peuvent bloquer certaines fonctionnalités pour des raisons de sécurité. Le système fait de son mieux pour être le plus immersif possible.

## 🔧 Personnalisation des templates

Les templates sont définis dans `js/create.js` :

```javascript
const templates = {
    croissant: {
        title: "Tu viens de te faire Croissanter !",
        message: "Votre message...",
        bg: "#f90000",
        iconType: "emoji",
        iconValue: "🥐",
        qr: true,
        errorCode: "WIN+L",
        completion: "666% completé",
        qrLink: ""
    },
    // Ajoutez vos propres templates ici !
};
```

## 🛡️ Sortir du prank

Plusieurs méthodes :
- **Alt + Tab** : Changer d'application
- **Alt + F4** : Fermer la fenêtre
- **Ctrl + Alt + Suppr** : Gestionnaire des tâches
- **Gestionnaire des tâches** : Fermer le navigateur
- **Redémarrer l'ordinateur** : Solution ultime

*Le prank n'est qu'une page web, il ne peut pas vraiment bloquer l'ordinateur !*

## 🎨 Couleurs suggérées

```
Rouge classique : #FF4444
Rouge vif :       #f90000
Orange :          #FF6B35
Marron café :     #8B4513
Bleu Windows :    #0078D4
Noir :            #000000
Rose :            #FF1493
Vert :            #10b981
```

## 😄 Emojis populaires

```
🔒 🔐 🗝️   Sécurité
⚠️ 🚨 ⛔   Alerte
🥐 ☕ 🍕 🍔 Nourriture
😱 💀 👻   Peur
💻 🖥️ ⌨️   Tech
```

## 🐛 Dépannage

### Le plein écran ne se lance pas automatiquement
→ Normal, certains navigateurs bloquent l'action automatique. L'utilisateur peut appuyer sur F11.

### Les popups multi-écrans sont bloquées
→ Les navigateurs bloquent souvent les popups. Le plein écran fonctionnera au moins sur l'écran principal.

### Les emojis s'affichent mal
→ Utilisez un navigateur récent (Chrome, Firefox, Edge, Safari).

### L'URL est trop longue
→ Utilisez un raccourcisseur : bit.ly, tinyurl.com

## ⚖️ Utilisation responsable

**À FAIRE** ✅
- Utiliser dans un contexte d'équipe détendu
- Sensibiliser à la sécurité
- Offrir vraiment le croissant/café
- Révéler le prank rapidement
- S'amuser ensemble

**À NE PAS FAIRE** ❌
- Sur des postes de travail critiques
- De manière répétée ou harcelante
- Sans l'accord implicite du groupe
- Pour bloquer vraiment le travail
- Avec des personnes qui n'apprécient pas

### Règle d'or
Si quelqu'un n'apprécie pas, arrêtez immédiatement et présentez vos excuses.

## 📊 Paramètres URL

| Paramètre | Description | Exemple |
|-----------|-------------|---------|
| `title` | Titre principal | `Tu+viens+de+te+faire+Croissanter` |
| `message` | Message du prank | `N%27oubliez+pas+de+verrouiller` |
| `bg` | Couleur fond (hex) | `%23FF4444` (= #FF4444) |
| `iconType` | Type d'icône | `default`, `emoji`, `url` |
| `iconValue` | Valeur icône | `%F0%9F%94%92` (= 🔒) |
| `qr` | Afficher QR code | `1` (oui) ou `0` (non) |
| `errorCode` | Code d'erreur | `WIN%2BL` |
| `completion` | Texte complétion | `666%25` (= 666%) |
| `qrLink` | Lien QR/ici personnalisé | `https%3A%2F%2Fexample.com` |

## 🤝 Contribution

Des idées pour de nouveaux templates ? Des améliorations ?
- Proposez vos templates
- Partagez vos pranks créatifs
- Signalez les bugs
- Améliorez la doc

## 📝 Changelog

### v3.0 (Actuelle)
- ➕ Plein écran multi-écrans
- ➕ 6 templates pré-faits
- ➕ Lien QR personnalisable
- ➕ Design amélioré
- ➕ Surveillance continue plein écran

### v2.0
- ➕ Suppression de la base de données
- ➕ Génération d'URL directe
- ➕ QR code automatique

### v1.0
- 🎉 Version initiale

## 📜 Licence

Projet open source - Utilisez-le librement et responsablement !

---

## 🎉 Et n'oubliez jamais...

# 🔒 LOCK YOUR FUCKING COMPUTER !
## WIN + L

---

**Version** : 3.0 (Multi-écrans + Templates)  
**Taille** : ~60 KB  
**Prérequis** : Serveur web + PHP 7.0+  
**Installation** : 1 minute  
**Configuration** : 0 ✨

**Bon prank ! 😈**
