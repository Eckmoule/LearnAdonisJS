# Paramètrer l'environnement 

Installer NodeJS (https://nodejs.org/en/download/prebuilt-installer)
Installer un driver de BDD => PostgeSQL ici (https://www.postgresql.org/)
	Lancer pgAdmin et créér une base de données (servers => Database => create)

_Installer redis (redis.io) un système de stockage en cache_ 
	_sudo service redis-server start_
	_Pour lancer le service_


# Créér un projet 

> npm init adonisjs@latest project-name
Modifier le fichier .env pour ajouter le nom de la base de données & le mot de passe. 