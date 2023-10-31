# Clock & Alarms

![image](https://github.com/V4l3R/alarmManager-electron/assets/19760437/01e6fd0b-fba8-4133-bb52-afb0f8d7a0de)

Table des Matières

- [Structure](#structure)
- [Améliorations Possibles](#améliorations-possibles)
- [Mise en Place](#mise-en-place)

Ce projet a été créé à partir d'un boilerplate intégrant Electron et React: https://github.com/electron-react-boilerplate/electron-react-boilerplate

## Structure

Le projet se compose de deux parties distinctes :

### Partie Backend (dossier 'main')

- Le dossier 'main' contient le code backend-like.
- Fichiers fournis par le boilerplate : `main.ts`, `menu.ts`, `preload.ts`.
  - `menu.ts` : Gère la barre de menu de la fenêtre, et contient des options permettant par exemple de passer le fenêtre en plein ecran, ou de voir la documentation electron.
  - `preload.ts` : Déclare les méthodes relatives à la communication entre le backend et le frontend.
  - `main.ts` : Permet le fonctionnement de la partie backend-like du projet.
- Nouveaux dossiers ajoutés : `common`, `connectors`, `controllers`, `listeners`, `types`.
  - `common/constants.ts` : Centralise les constantes de l'application.
  - `common/utils.ts` : Centralise les méthodes utilisées à différents endroits de l'application.
  - `connectors/dbConnectors.ts` : Gère la connexion à la base de données MongoDB.
  - `controllers/dbControllers.ts` : Centralise les méthodes pour interagir avec la collection "alarms" dans la base de données.
  - `listeners/alarmsListeners.ts` : Répertorie les listeners pour la communication des alarmes entre le backend et le frontend.
  - `types/alarmTypes.ts` : Centralise les types relatifs aux alarmes.
  - `types/dateTypes.ts` : Centralise les types relatifs aux dates.
  - `types/ipcMessageType.tsx` : Centralise les types et les enums pour la communication backend-frontend.

### Partie Frontend (dossier 'renderer')

- Le dossier 'renderer' contient le code frontend.
- Le fichier `preload.d.ts` est le seul fichier inchangé après récupération du boilerplate.
- Nouveaux dossiers ajoutés : `action`, `components`, `context`, `pages`, `style`.
  - `action/ipcTransmetter.ts` : Gère la communication entre le frontend et le backend.
  - `components/AlarmDisplay.tsx` : Gère l'affichage de l'alarme lorsqu'elle se déclenche.
  - `components/AlarmSelector.tsx` : Gère le composant d'affichage du sélecteur de date et du nom de la nouvelle alarme.
  - `components/AlarmsList.tsx` : Gère le composant d'affichage de la liste des alarmes.
  - `components/Clock.tsx` : Gère le composant d'affichage de l'horloge.
  - `components/MainWindow.tsx` : Gère le composant de la fenêtre principale, contenant la liste des alarmes manquées, à venir, l'espace de création d'une nouvelle alarme et l'horloge.
  - `components/Separators.tsx` : Gère les composants d'affichage de séparateur.
  - `context/AlarmContext.tsx` : Gère le contexte nécessaire à la gestion des alarmes.
  - `context/DateContext.tsx` : Gère le contexte nécessaire à la gestion de la date.
  - `pages/Home.tsx` : Mise en page des différents composants de la page d'accueil.
  - `style/fonts/` : Regroupe les polices d'écriture.
  - `style/App.css` : Contient tous les styles de l'application, généré par Tailwind CSS à partir du fichier 'index.css'.
  - `style/index.css` : Contient l'ensemble des styles, lu par Tailwind CSS pour générer le fichier 'App.css' avec les styles finaux.

## Améliorations possibles

### Niveau fonctionnalités

- Ajouter une sonnerie lors du déclenchement de l'alarme.
- Permettre la simultanéité des alarmes.
- Permettre la mise en place d'alarmes récurrentes.
- Envoyer des notifications système (si possible).
- Permettre à l'utilisateur de personnaliser la durée de l'alarme ou le délai avant qu'une future alarme devienne rouge.

### Niveau design

- Afficher les listes d'alarmes uniquement au survol/clic d'éléments à droite et à gauche de l'horloge.
- Ajouter de la dynamique à la couleur de fond de l'application pour un effet de mouvement.
- Ajouter un effet de flou entre le fond de l'horloge et le fond de l'application pour un effet de mouvement subtil.

## Mise en place

L'application nécessite les prérequis suivants :

- Node.js -> [Télécharger ici](https://nodejs.org/en/download)
- Git -> [Télécharger ici](https://git-scm.com/downloads)
- MongoDB -> [Télécharger ici](https://www.mongodb.com/try/download/community)

Une fois les prérequis installés, ouvrez un terminal de commande (par exemple Git Bash) dans le répertoire recevant le projet et exécutez les commandes suivantes :

```bash
git clone https://github.com/V4l3R/alarmManager-electron.git
cd alarmManager-electron/
npm install
npm start
```

Si vous souhaitez apporter des modifications au style, exécutez la commande suivante depuis la racine du projet pour permettre à Tailwind CSS de générer la feuille de style appropriée :

```bash
npx tailwindcss -i ./src/renderer/style/index.css -o ./src/renderer/style/App.css --watch
```
