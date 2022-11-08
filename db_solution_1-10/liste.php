<?php
include_once("base/config.php");

// récupération de l'info dans l'url
$get_alpha = isset($_GET["alpha"]) ? $_GET["alpha"] : "A";


$alphabet = range('A', 'Z');

foreach($alphabet as $lettre){
    echo "<a href='liste.php?alpha=".$lettre."'>".$lettre."</a> ";
}

echo "<hr />";

$sql = "SELECT designer_id as id, firstname as prenom, UPPER(lastname) as nom 
        FROM designer 
        WHERE lastname LIKE '".$get_alpha."%' 
        ORDER BY lastname ASC, firstname ASC;";
$result = requeteResultat($sql);

if(is_array($result)){
    foreach($result as $r){
        $id     = $r["id"];
        $prenom = $r["prenom"];
        $nom    = $r["nom"];

        echo "<p>".$nom." ".$prenom." <a href='update_designer.php?id=".$id."'>[modifier]</a></p>\n";
    }
}else{
    echo "<p>Aucun résultat pour la lettre ".$get_alpha."</p>";
}


?>







