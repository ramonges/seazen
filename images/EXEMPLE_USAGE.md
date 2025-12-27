# Exemples d'utilisation des images

## Comment remplacer un placeholder par une vraie image

### Dans qui-sommes-nous.html - Photos de l'équipe

**Avant (placeholder) :**
```html
<div class="image-placeholder" style="height: 200px; margin-bottom: 1rem;">
    <span>Photo Guillaume</span>
</div>
```

**Après (avec image) :**
```html
<img src="images/team/guillaume.jpg" alt="Guillaume Jacquet-Lagrèze" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem;" />
```

### Exemple complet pour une photo d'équipe

Remplacez :
```html
<div style="background: var(--light-gray); padding: 2rem; border-radius: 12px;">
    <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Guillaume Jacquet-Lagrèze</h3>
    <p style="font-weight: 600; margin-bottom: 1rem;">Fondateur de seazen</p>
    <div class="image-placeholder" style="height: 200px; margin-bottom: 1rem;">
        <span>Photo Guillaume</span>
    </div>
    <p>...</p>
</div>
```

Par :
```html
<div style="background: var(--light-gray); padding: 2rem; border-radius: 12px;">
    <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Guillaume Jacquet-Lagrèze</h3>
    <p style="font-weight: 600; margin-bottom: 1rem;">Fondateur de seazen</p>
    <img src="images/team/guillaume.jpg" alt="Guillaume Jacquet-Lagrèze" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem;" />
    <p>...</p>
</div>
```

## Chemins relatifs

Quand vous êtes dans un fichier HTML à la racine (comme `index.html`), utilisez :
```html
<img src="images/team/guillaume.jpg" alt="..." />
```

Quand vous êtes dans un sous-dossier, utilisez :
```html
<img src="../images/team/guillaume.jpg" alt="..." />
```

## Structure de dossiers recommandée

Créez ces dossiers dans le dossier `images/` :

```
images/
├── team/
│   ├── guillaume.jpg
│   ├── mylene.jpg
│   └── eric.jpg
├── boats/
│   ├── sre23-1.jpg
│   └── sre23-2.jpg
├── tours/
│   ├── beaulieu-1.jpg
│   └── juan-les-pins-1.jpg
└── logos/
    └── partners/
```

## Notes importantes

1. **Nommez vos fichiers** en minuscules avec des tirets (ex: `guillaume-jacquet.jpg`)
2. **Ne mettez pas d'espaces** dans les noms de fichiers
3. **Utilisez des formats modernes** : JPG pour les photos, PNG pour les logos, SVG pour les icônes
4. **Optimisez vos images** avant de les ajouter (compression, redimensionnement)

