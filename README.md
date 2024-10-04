# Turn of Warcraft

Un petit jeu au tour par tour, initialement développé en JavaScript orienté objet et jQuery.

L’objectif est de le redévelopper en utilisant Vue.js (Nuxt) pour rendre le code plus propre et maintenable.

## Le jeu

Le jeu se joue à deux, sur le même navigateur (vibe old school). Chaque joueur apparaît sur une carte composée de cases. La plupart des cases sont vides, et les joueurs peuvent se déplacer à tour de rôle sur un maximum de 4 cases. Certaines cases sont bloquées par des murs, tandis que d’autres contiennent des armes que vous pouvez ramasser pour rendre votre personnage plus puissant.

Une fois équipé, tentez d’atteindre votre adversaire pour lancer la phase de combat !

Le combat se déroule également au tour par tour. À chaque tour, vous pouvez choisir soit de vous défendre, soit d’attaquer !

Le tour est ensuite résolu :

- Si personne ne se défend, les deux joueurs subissent les dégâts de l’arme de leur adversaire.
- Si les deux joueurs se défendent, il ne se passe rien.
- Si l’un des deux joueurs se défend, il réduit les dégâts de l’arme de son adversaire de moitié.

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
