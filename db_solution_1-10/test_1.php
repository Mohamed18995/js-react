<?php
include_once("base/config.php");

$sql = "SELECT designer_id, FirstName FROM designer;";
$result = requeteResultat($sql);
print_q($result);

?>