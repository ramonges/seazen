# Logo SeaZen

## Important : Placez votre logo ici

Le logo doit être nommé **`logo.png`** et placé dans ce dossier (`images/logo.png`).

### Formats acceptés
- **PNG** (recommandé) - `logo.png`
- **SVG** (vectoriel, meilleure qualité) - `logo.svg` (changez alors `logo.png` en `logo.svg` dans les fichiers HTML)

### Taille recommandée
- **Largeur** : 150-200px
- **Hauteur** : 50-60px
- **Format** : Paysage (plus large que haut)

### Comment ajouter le logo

1. **Placez votre fichier logo** dans ce dossier `images/` avec le nom `logo.png`
2. **Si votre logo est en SVG**, renommez-le `logo.svg` et modifiez les fichiers HTML :
   - Remplacez `images/logo.png` par `images/logo.svg` dans tous les fichiers HTML

Le logo apparaîtra automatiquement dans le header de toutes les pages du site.

### Localisation dans le code

Le logo est référencé dans :
- Tous les fichiers `.html` (header)
- `js/template.js` (template du header)

Le CSS pour le logo se trouve dans `css/style.css` avec la classe `.logo img`.

