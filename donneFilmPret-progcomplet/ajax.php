<?php
// $film["titre"] = strtoupper(isset($_GET["titre"]) ? $_GET["titre"] : "pas de titre");
// $film["duree"] = (isset($_GET["duree"]) ? $_GET["duree"] : 0);
$film = [];
$film[0] = ["titre" => "titre1", "duree" => "duree1"];
$film[1] = ["titre" => "titre2", "duree" => "duree2"];
$film[2] = ["titre" => "titre3", "duree" => "duree3"];

echo json_encode($film);
// $titre = $_GET["titre"];
// $duree = $_GET["duree"];

// $film = [
//     "titre" => $titre,
//     "duree" => $duree
// ];
// echo  json_encode($film);
// $couleurs = [
//     "primaires" => ["rouge", "blue", "jaune"],
//     "secondaires" => ["orange", "mauve", "vert"]
// ];
// if (isset($_GET["type"])) {
//     $type = $_GET["type"];
//     echo json_encode($couleurs[$type]);
// } else {
//     echo json_encode(array_keys($couleurs));
// }
