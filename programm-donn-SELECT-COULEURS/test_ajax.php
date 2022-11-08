<?php
 $couleurs = [

"primaires" => ["rouge", "blue", "jaune"],

"secondaires" => ["orange", "mauve", "vert"]

];

if (isset($_GET["type"])) {

$type = $_GET["type"];

echo json_encode($couleurs[$type]);

} else {

echo json_encode(array_keys($couleurs));

}