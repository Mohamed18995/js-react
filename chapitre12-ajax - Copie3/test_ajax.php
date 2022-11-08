<?php
$film['pays'] = strtoupper(isset($_GET['pays']) ? $_GET['pays'] : 'pas de pays');
$film['titre'] = strtoupper(isset($_GET['titre']) ? $_GET['titre'] : 'pas de titre');
$film['duree'] = isset($_GET['duree']) ? $_GET['duree']: 0;
$film['date'] = strtoupper(isset($_GET['date']) ? $_GET['date'] : 'pas de date');

echo json_encode($film);