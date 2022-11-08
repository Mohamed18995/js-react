<?php
include_once("base/config.php");

// récupération de l'info dans l'url
$get_chiffre = isset($_GET["chiffre"]) ? $_GET["chiffre"] : 0;


$chiffres = range('1', '16');

foreach($chiffres as $chiffre){
    echo "<a href='test_13.php?chiffre=".$chiffre."'>".$chiffre."</a> ";
}

echo "<hr />";

$sql = "SELECT designer_id as id, firstname as prenom, UPPER(lastname) as nom 
        FROM designer 
        ORDER BY lastname ASC, firstname ASC
		LIMIT ".($get_chiffre*10).", 10";
		echo $sql;
$result = requeteResultat($sql);

if(is_array($result)){
    foreach($result as $r){
        $prenom = $r["prenom"];
        $nom    = $r["nom"];

        echo "<p>".$nom." ".$prenom."</p>";
    }
}else{
    echo "<p>Aucun résultat pour le chiffre ".$get_chiffre."</p>";
}


?>