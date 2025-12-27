# Dossier Images

Ce dossier contient toutes les images du site SeaZen.

## Structure recommandée

Vous pouvez organiser vos images dans des sous-dossiers :

```
images/
├── team/              # Photos de l'équipe
│   ├── guillaume.jpg
│   ├── mylene.jpg
│   └── eric.jpg
├── boats/             # Photos des bateaux
│   ├── sre23-1.jpg
│   ├── sre23-2.jpg
│   └── ...
├── tours/             # Photos des tours
│   ├── beaulieu/
│   └── juan-les-pins/
├── logos/             # Logos et partenaires
│   ├── partners/
│   └── ...
└── general/           # Images générales
```

## Comment utiliser les images dans le HTML

### Exemple 1 : Image simple
```html
<img src="images/team/guillaume.jpg" alt="Guillaume Jacquet-Lagrèze" />
```

### Exemple 2 : Image avec style inline
```html
<img src="images/boats/sre23-1.jpg" alt="Bateau SeaZen SRE 23" style="width: 100%; border-radius: 12px;" />
```

### Exemple 3 : Image en arrière-plan CSS
```css
background-image: url('../images/tours/beaulieu/hero.jpg');
```

## Formats recommandés

- **Photos** : JPG ou WebP (meilleure compression)
- **Logos** : PNG (avec transparence) ou SVG (vectoriel)
- **Icônes** : SVG (recommandé)

## Taille recommandée

- **Images hero** : 1920x1080px (Full HD)
- **Photos équipe** : 800x800px minimum (carré)
- **Photos bateaux** : 1200x800px (format paysage)
- **Logos** : Selon besoin, généralement 200-400px de largeur

## Optimisation

Pour de meilleures performances, optimisez vos images avant de les mettre en ligne :
- Compressez les JPG avec [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/)
- Utilisez WebP pour de meilleures performances
- Redimensionnez les images à la taille d'affichage nécessaire

