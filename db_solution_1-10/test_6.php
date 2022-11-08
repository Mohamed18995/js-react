<?php
include_once("base/config.php");

$sql = "SELECT designer_id as id, firstname as prenom, UPPER(lastname) as nom FROM designer ORDER BY lastname ASC, firstname ASC;";
$result = requeteResultat($sql);

foreach($result as $r){
    $id     = $r["id"];
    $prenom = $r["prenom"];
    $nom    = $r["nom"];

    echo "<p>".$nom." ".$prenom." [".$id."]</p>";
}
?>