# SeaZen - Site Web

Site internet pour SeaZen, entreprise de bateaux électriques solaires basée en région PACA.

## Structure du Site

### Navigation Principale

Le site est organisé selon une structure claire avec 4 menus principaux :

1. **Accueil** - Page d'accueil avec présentation de l'offre
2. **À propos** (menu déroulant)
   - Qui sommes-nous ?
   - TV, radio, presse
   - Actualité
   - Aide & contact

3. **Tours et location** (menu déroulant)
   - Tours privés
     - Entre Monaco et Nice
     - Entre Antibes et Cannes
   - Location Boat Club
   - Dispersion des Cendres

4. **Construction** (menu déroulant)
   - Bateaux solaires
     - SEAZEN SRE 23
   - Accompagnement
     - Utilisation
     - Partenariat
     - Retrofit
     - Stratégie

### Sélecteur de Langues

Le site inclut un sélecteur de langues (FR/EN/ES/IT) accessible depuis le header.

## Fonctionnalités

- **Système de réservation** : Formulaires de réservation pour les tours privés
- **Système de vente** : Formulaires de demande d'information pour les bateaux
- **Design responsive** : Adaptation mobile, tablette et desktop
- **Menu mobile** : Navigation optimisée pour mobile avec menu hamburger

## Structure des Fichiers

```
seazen/
├── index.html                    # Page d'accueil
├── css/
│   └── style.css                 # Styles principaux
├── js/
│   ├── main.js                   # JavaScript principal
│   └── template.js               # Templates réutilisables
├── qui-sommes-nous.html
├── media.html
├── actualite.html
├── contact.html
├── tours-monaco-nice.html
├── tours-antibes-cannes.html
├── boat-club.html
├── dispersion-cendres.html
├── bateaux-sre23.html
├── accompagnement-utilisation.html
├── accompagnement-partenariat.html
├── accompagnement-retrofit.html
└── accompagnement-strategie.html
```

## Utilisation

1. Ouvrez `index.html` dans un navigateur web pour voir le site
2. Pour un développement local, vous pouvez utiliser un serveur HTTP simple :
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (avec http-server)
   npx http-server
   ```

## Technologies Utilisées

- HTML5
- CSS3 (avec variables CSS et Grid/Flexbox)
- JavaScript (vanilla)
- Google Fonts (Inter)

## Notes de Développement

- Les formulaires de réservation et de contact sont fonctionnels côté client (validation JavaScript)
- Pour une mise en production, il sera nécessaire d'implémenter un backend pour traiter les formulaires
- Le sélecteur de langues est prêt mais nécessite l'implémentation d'un système de traduction pour le contenu
- Les images sont actuellement des placeholders et doivent être remplacées par les images réelles

## Personnalisation

Pour modifier les couleurs du site, éditez les variables CSS dans `css/style.css` :

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a8e8;
    --accent-color: #ff6b35;
    /* ... */
}
```

