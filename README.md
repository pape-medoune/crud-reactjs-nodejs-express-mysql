# crud-reactjs-nodejs-express-mysql

API REST avec MySQL

Ceci est un exemple d'API REST en utilisant Express et MySQL pour effectuer des opérations CRUD (Create, Read, Update, Delete) sur une base de données.
Prérequis

Avant de commencer, assurez-vous d'avoir installé les dépendances nécessaires en exécutant la commande suivante :

"npm install"

Assurez-vous également d'avoir une base de données MySQL fonctionnelle avec une table "etudiant" correctement configurée.
Configuration de la base de données

Pour configurer la connexion à votre base de données MySQL, veuillez modifier les informations de connexion dans le fichier index.js. Assurez-vous de spécifier le bon hôte, utilisateur, mot de passe et nom de base de données.
Installation

Pour lancer l'API REST, exécutez la commande suivante :

"npm start"

L'API sera alors accessible à l'adresse http://localhost:5400.
Endpoints

L'API offre les endpoints suivants pour effectuer des opérations CRUD sur la table "etudiant" :

    POST /Ajout : Ajoute un nouvel étudiant à la base de données.
    PUT /update/:id : Met à jour les informations d'un étudiant existant.
    GET /display : Récupère tous les étudiants de la base de données.
    DELETE /deleted/:id : Supprime un étudiant de la base de données.
