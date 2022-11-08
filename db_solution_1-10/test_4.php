<?php
include_once("base/config.php");

$sql = "SELECT designer_id, firstname FROM designer;";
$result = requeteResultat($sql);

foreach($result as $r){
    $id = $r["designer_id"];
    $prenom = $r["firstname"];

    echo "<p>Id : ".$id." - Prenom : ".$prenom."</p>";
}
?>