# 🎬 Ciné Quizz

> Quizz cinéma — 10 énigmes, 50 affiches, qui sera le meilleur cinéphile ?

## 🌐 Jouer en ligne

**→ [https://VincentFillon.github.io/trouves-le-film](https://VincentFillon.github.io/cinequizz)**

---

## Le Jeu

10 énigmes personnelles à deviner parmi 50 affiches de films.
Chaque joueur répond sur son smartphone, les résultats restent cachés jusqu'à la fin.

### Les 10 Énigmes

| # | Énigme |
|---|--------|
| 1 | Le Film le Plus Vu |
| 2 | Mieux que Le Seigneur des Anneaux |
| 3 | Souvenir de mon Grand-Père |
| 4 | J'étais Mal à l'Aise |
| 5 | Le Meilleur Méchant |
| 6 | Je Pleure à Chaque Fois |
| 7 | Ma Sonnerie de Téléphone |
| 8 | Le Plus Grand Fou Rire |
| 9 | IMMORTAN ! |
| 10 | J'avais pas l'âge de le voir au cinéma |

### Déroulement

1. **Jeu** — Une énigme à la fois, le joueur choisit son film parmi les 50 affiches et confirme son choix
2. **Score** — Résultat affiché (0 à 10/10) avec une animation selon le score
3. **Réponses** — Détail des 10 questions avec les bonnes/mauvaises réponses en vert/rouge

---

## Technique

Site statique — HTML + CSS + JS vanilla, aucune dépendance, aucun serveur requis.

```
trouves-le-film/
├── index.html          # Application complète (4 écrans)
├── style.css           # Design mobile-first, thème cinéma sombre
├── app.js              # Logique du jeu, 50 films, 10 questions
└── Posters_Films/      # 50 affiches optimisées (~2 MB au total)
```

- Progression sauvegardée dans le `localStorage` (reprise possible après un refresh)
- Fonctionne hors-ligne après le premier chargement
- Testé sur iOS Safari et Android Chrome

---

## Déploiement GitHub Pages

```bash
git init
git add index.html style.css app.js Posters_Films/
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON_PSEUDO/trouves-le-film.git
git push -u origin main
```

Puis dans le dépôt GitHub : **Settings → Pages → Branch: main → Save**

Le site est disponible ~1 minute après sur `https://TON_PSEUDO.github.io/trouves-le-film`

---

## Serveur local (alternative)

```bash
node -e "
const http=require('http'),fs=require('fs'),path=require('path');
const mime={'.html':'text/html','.css':'text/css','.js':'application/javascript','.jpg':'image/jpeg'};
http.createServer((req,res)=>{
  const f=path.join('.',decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(f,(e,d)=>{ if(e){res.writeHead(404);res.end();}else{res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'application/octet-stream'});res.end(d);}});
}).listen(8080,()=>console.log('http://localhost:8080'));
"
```

Partager l'IP locale (`http://192.168.x.x:8080`) aux invités connectés sur le même WiFi.
