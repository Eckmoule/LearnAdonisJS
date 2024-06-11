# Paramètrer l'environnement 

Installer NodeJS (https://nodejs.org/en/download/prebuilt-installer)  

Installer un driver de BDD => PostgeSQL ici (https://www.postgresql.org/)  
Lancer pgAdmin et créér une base de données (servers => Database => create)  

Installer redis (redis.io) un système de stockage en cache 
_sudo service redis-server start_
Pour lancer le service

Installer les extensions VS Code 
* AdonisJS
* Edge Template
* Japa

# Créér un projet 

```npm init adonisjs@latest project-name```  
Modifier le fichier .env pour ajouter le nom de la base de données & le mot de passe. 

# Lancer le projet 

```node ace serve --hmr ```




