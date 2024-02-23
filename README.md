# CookingBooking

## Sujet

CookingBooking est une plateforme conçue pour faciliter l'apprentissage et le partage autour de la cuisine à travers l'organisation d'ateliers culinaires. Notre objectif est de créer un espace inclusif où les personnes peuvent apprendre à cuisiner différents types de plats, explorer des cuisines du monde et partager des moments de convivialité, quelles que soient leurs compétences culinaires ou leur situation financière. 

Les participants peuvent exprimer leurs préférences pour certains thèmes d'ateliers (basés sur des cuisines de différents pays) et sont ensuite automatiquement assignés à des ateliers adaptés. La plateforme permet également aux participants de confirmer leur venue, afin de gérer au mieux l'organisation des sessions.

## Fonctionnalités

- **Gestion des Ateliers :** Les utilisateurs peuvent consulter les différents ateliers disponibles, chacun représentant des cuisines de pays spécifiques (ex: française, italienne, mexicaine...).

- **Soumission des Vœux :** Les participants ont la possibilité de soumettre des vœux pour participer à des ateliers basés sur leurs préférences culinaires.

- **Assignation Automatique :** Un système d’assignation automatique place les participants dans les ateliers en fonction des vœux exprimés et des places disponibles (backoffice à déclencher à la main).

- **Confirmation de Participation :** Les participants assignés à un atelier peuvent confirmer leur participation (pas eu le temps de faire la reliure front).

- **Consultation des Ateliers Assignés :** Les participants peuvent consulter les détails des ateliers auxquels ils ont été assignés et ~~ont confirmé leur participation~~ (affiche tout les ateliers auquel il est assigné ).

## Commentaires
- Comme le projet n'a été developpé qu'a partir de 16H apres chagement de stack technique 45 X jusq'u a avoir quelque chose de fonctionel l'implémentation de l'algo n'est pas celle obtenue.
- Théoriquement MVP même si participation multiple au meme atelier possible lors de la demande de calcul backoffice (car algo fait en vitesse).
- API Rest / CRUD pour le back + Toutes les routes nécéssaires de faites (back bon sauf algo)

## Membres de l'Équipe

- Maxime Carlier
- Vincent Brach
- Noa Pozzo Di Borgo
- Solène Faure

## Prérequis

- Node.js
- npm

## Installation

### Backend

1. Clonez le dépôt et naviguez jusqu'au dossier backend :
    ```bash
    cd chemin/vers/backend
    ```

2. Installez les dépendances :
    ```bash
    npm install -f
    ```

3. Démarrez le serveur Backend :
    ```bash
    npm run server
    ```

### Frontend

1. Dans un nouveau terminal, naviguez jusqu'au dossier frontend :
    ```bash
    cd chemin/vers/frontend
    ```

2. Installez les dépendances :
    ```bash
    npm install -f
    ```

3. Construisez et démarrez le serveur Frontend :
    ```bash
    npm run server
    ```

## Dépoiement

j'ai déployer le site avec google cloud. j'ai créé un machine sur la quel j'ai fait un git pull de ce git hub et après je lance le server a la main (cd cooking-booking/front-end/ && sudo npm i -f && cd .. && cd back-end/ && sudo npm i -f && cd .. && sudo npm run build && cd .. && cd back-end/ && sudo npm run server) cela lance donc notre serveur qui tourne sur ma VM google cloud. j'ai essayé d'automatiser la tache en faisant une git hub action mais cela ne fonctionne pas je n'arrive pas ame conncecter à ma VM malger l'utilisation de la doc google cloud la meme erreur persiste comme quoi je ne suis pas autentifier pourtant ma cle publique est belle est bien donné a la vm et mon github a belle et bien ma cle privé mais malger cela ca ne fonctionnne pas si cela fonctionnais ma git hub action se serait executé a chaque push dans la branche master (branche dites branche de production donc les push sont fait dedans quand le site a été tester en developpement avant) et cela m'aurais connecter a ma vm en shh et executer les commande que je souhaitais en loccurence : cd cooking-booking/front-end/ && sudo npm i -f && cd .. && cd back-end/ && sudo npm i -f && cd .. && sudo npm run build && cd .. && cd back-end/ && sudo npm run server (commande que jutilise manuelement pour lancer mon serveur web mais malgrer une erreur que je n'arrive pas à résoudre notre déploiement n'est pas totalement automatisé).

## Usage

Pour accéder à CookingBooking, ouvrez un navigateur et allez à `http://localhost:<PORT>`, en remplaçant `<PORT>` par le port spécifié pour l'application frontend.

## PREVIEW PUBLIQUE
http://34.163.193.237:3080
~~http://34.163.193.237:5173~~
