<?php
$title = "Gestion des chatons";
include "header.php";

session_start();
//génération d'un token de sécurité
//anti CSRF ou anti forgery token
$token = uniqid();
$_SESSION["token"] = $token;

?>
<div class="container">
    <h1>Gestion des chatons :)</h1>
    <?php
    //lister les dossiers qui sont dans /photos
    //Creer la connexion à la BDD
    include_once "config.php";
    $pdo = new PDO("mysql:host=" . Config::SERVEUR . ";dbname=" . Config::BDD, Config::UTILISATEUR, Config::MDP);
    //création de la requête
    $requete = $pdo->prepare("select * from categories");
    //executer la requête
    $requete->execute();
    //récupérer le résultat sous forme d'un tableau
    $lignes = $requete->fetchAll();
    ?>
    <table class="table table-striped">
        <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>

            </th>
        </tr>
        <?php
        foreach ($lignes as $l) {
            ?>
            <tr>
                <td><?php echo $l["titre"] ?></td>
                <td><?php echo $l["description"] ?></td>
                <td>
                    <a href="modifierCategorie.php?id=<?php echo $l["id"] ?>"
                       class="btn btn-sm btn-warning">Modifier</a>
                </td>
            </tr>
            <?php
        }
        ?>
    </table>
    <a href="ajouterCategorie.php" class="btn btn-success">Ajouter</a>
</div>
</body>
</html>