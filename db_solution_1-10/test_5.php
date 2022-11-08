<?php
include_once("base/config.php");

$sql = "SELECT designer_id, firstname, lastname FROM designer ORDER BY lastname ASC, firstname ASC;";
$result = requeteResultat($sql);

foreach($result as $r){
    $id = $r["designer_id"];
    $prenom = $r["firstname"];
    $nom = $r["lastname"];

    echo "<p>".$nom." ".$prenom." [".$id."]</p>";
}
?>