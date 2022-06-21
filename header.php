<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/da7397688c.js" crossorigin="anonymous"></script>
    <title><?php echo $title ?></title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
            <a class="navbar-brand" href="index.php"><i class="far fa-cat-space fa-2x"></i></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <!--- <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li> --->

                <?php
                //lister les dossiers qui sont dans /photos
                //Creer la connexion à la BDD
                include_once "config.php";
                $pdo = new PDO("mysql:host=".Config::SERVEUR.";dbname=".Config::BDD,Config::UTILISATEUR,Config::MDP);
                //création de la requête
                $requete = $pdo->prepare("select * from categories");
                //executer la requête
                $requete->execute();
                //récupérer le résultat sous forme d'un tableau
                $lignes = $requete->fetchAll();

                foreach ($lignes as $l) {
                        ?>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="categories.php?id=<?php echo $l["id"] ?>"><?php echo $l["titre"] ?></a>
                        </li>
                        <?php

                }
                ?>

            </ul>
        </div>
    </div>
</nav>