<?php
$nom = 'NOBODY';

if (isset($_GET['nom'])) {
    $nom = $_GET['nom'];
}
echo "Bonjour " . $nom;