<?php
include_once("base/config.php");

// récupération de l'id passé en paramètre GET
$get_id = isset($_GET["id"]) ? $_GET["id"] : null;
if(!is_numeric($get_id)){
	exit("ID manquant");
}

$post_nom  			= isset($_POST["nom"]) 			? $_POST["nom"] 			: "";
$post_prenom  		= isset($_POST["prenom"]) 		? $_POST["prenom"] 			: "";
$post_description  	= isset($_POST["description"]) 	? $_POST["description"] 	: "";

// variable qui contiendra les éventuels messages d'erreur
$msg_error = "";

if(empty($_POST)){
	// récupérer les données relatives à l'id
	$sql = "SELECT firstname, lastname, description FROM designer WHERE designer_id = $get_id;";
	$resultat = RequeteResultat($sql);
	
	$post_nom 			= $resultat[0]["lastname"];
	$post_prenom 		= $resultat[0]["firstname"];
	$post_description 	= $resultat[0]["description"];
	
	$show_form = true;
}else{
	if(empty($post_nom) || empty($post_prenom)){
	
		$msg_error .= empty($post_nom) ? "<li>nom est manquant</li>" 		: "";
		$msg_error .= empty($post_prenom) ? "<li>prénom est manquant</li>" 	: "";
		
		$show_form = true;
	}else{
		$show_form = false;
	}
}



?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<?php
	if(!empty($_POST)){
		echo $msg_error;
	}
	
	if($show_form){
	?>
	<form action="update_designer.php?id=<?php echo $get_id; ?>" method="post">
		<p>
			Nom *<br />
			<input type="text" name="nom" value="<?php echo $post_nom; ?>" />
		</p>
		<p>
			Prénom *<br />
			<input type="text" name="prenom" value="<?php echo $post_prenom; ?>" />
		</p>
		<p>
			Description<br />
			<textarea name="description"><?php echo $post_description; ?></textarea>
		</p>
		<p>
			<input type="submit" name="submit" value="Envoyer" />
		</p>
	</form>
	<?php
	}else{
		// traitement
		$sql = "UPDATE designer
				SET lastname = '$post_nom', 
					firstname = '$post_prenom', 
					description = '$post_description'
				WHERE designer_id = $get_id;
				";
		// utiliser la fonction d'update
		if(ExecRequete($sql)){
			echo "<p>Données modifiées avec succès</p>";
			
		}else{
			echo "<p>Une erreur est survenue lors de la modification de vos données !!!</p>";
		}
		$initiale = substr($post_nom,0, 1);
		echo "<p><a href='liste.php?alpha=".$initiale."'>retour à la liste</a></p>";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	?>
</body>
</html>