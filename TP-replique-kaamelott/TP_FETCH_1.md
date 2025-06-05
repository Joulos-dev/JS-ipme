# TP Fetch – Répliques Kaamelott 🎭

## Objectif

Créer une mini-application web qui récupère une réplique aléatoire de la série **Kaamelott** via une API publique, et l’affiche dans une carte Bootstrap.

L’utilisateur clique sur un bouton pour afficher une nouvelle réplique.

---

## Fonctionnalités

- Bouton **"Nouvelle réplique"** qui déclenche la récupération d’une réplique aléatoire.
- Affichage dynamique dans une carte Bootstrap, contenant :
  - La réplique (texte)
  - Le nom du personnage (si disponible)
- Gestion des erreurs d’appel API avec un message clair à l’utilisateur.

---

## Contraintes techniques

- Utiliser `fetch` pour interroger l’API :  
  `https://kaamelott.xyz/api/v1/quote/random`
- Utiliser `createElement` et `appendChild` pour créer la carte et insérer le contenu.
- Pas de rechargement de page (`event.preventDefault()` si nécessaire).
- Utiliser un fichier HTML et un fichier JS séparés.

---

## Conseils

- Commence par un simple `console.log` pour vérifier la réponse de l’API.
- Vérifie que tu récupères bien la réplique et le personnage dans la réponse JSON.
- Crée la carte Bootstrap dynamiquement et teste l’affichage.
- Teste plusieurs fois pour vérifier que la nouvelle réplique s’affiche correctement.

---

## Bonus (facultatif)

- Ajouter un bouton pour copier la réplique dans le presse-papier.
- Afficher un petit avatar ou image si l’API en fournit.
- Ajouter un historique des dernières répliques affichées.

---

## Exemple de structure HTML attendue

```html
<div class="card my-3 mx-auto" style="max-width: 600px;">
  <div class="card-body">
    <h5 class="card-title">Perceval</h5>
    <p class="card-text fst-italic">« C’est pas faux. »</p>
  </div>
</div>
```

---

## Structure des fichiers

- `index.html` : structure HTML + bouton + container pour afficher la réplique
- `script.js` : JS qui contient le fetch et la gestion de l’affichage dynamique

---

## À toi de jouer !

Travaille proprement avec un fichier `index.html` et un fichier `script.js` séparés.  
Teste chaque étape avec des `console.log()` et n’hésite pas à gérer proprement les erreurs.

Bonne chance, et que la force de Kaamelott soit avec toi ! ⚔️
