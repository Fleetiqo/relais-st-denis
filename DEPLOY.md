# Instructions de Déploiement GitHub Pages

## Étape 1: Créer un dépôt GitHub

1. Allez sur GitHub.com et créez un nouveau dépôt nommé `relais-st-denis`
2. Ne cochez PAS "Initialize with README"

## Étape 2: Pousser le code

Dans le terminal, depuis le dossier `relais-st-denis`:

```bash
git add .
git commit -m "Initial commit - Relais St-Denis website"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/relais-st-denis.git
git push -u origin main
```

## Étape 3: Configurer GitHub Pages

1. Allez dans les Settings de votre dépôt GitHub
2. Dans le menu de gauche, cliquez sur "Pages"
3. Sous "Build and deployment":
   - Source: Sélectionnez "GitHub Actions"
4. Le site sera automatiquement déployé!

## Étape 4: Accéder au site

Votre site sera disponible à:
```
https://VOTRE-USERNAME.github.io/relais-st-denis/
```

## Alternative: Déploiement manuel

Si vous préférez déployer manuellement:

```bash
# Build le projet
npm run build

# Le dossier dist/ contient les fichiers à déployer
```

Ensuite dans GitHub Settings > Pages:
- Source: Deploy from a branch
- Branch: gh-pages / root

## Notes importantes

- Le site se redéploie automatiquement à chaque push sur `main`
- Le build prend environ 1-2 minutes
- Vérifiez l'onglet "Actions" sur GitHub pour voir le statut du déploiement
- Si vous changez le nom du dépôt, mettez à jour `base` dans `vite.config.js`

## Domaine personnalisé (optionnel)

Pour utiliser un domaine personnalisé:

1. Ajoutez un fichier `CNAME` dans le dossier `public/` avec votre domaine
2. Configurez les DNS de votre domaine pour pointer vers GitHub Pages
3. Dans Settings > Pages, ajoutez votre domaine personnalisé

## Support

Pour toute question, consultez la documentation GitHub Pages:
https://docs.github.com/en/pages
