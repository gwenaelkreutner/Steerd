<?php
header("Access-Control-Allow-Origin:*", true);

include "connexion.php";

$res = $db_connexion->query('SELECT *FROM user order by id_user', PDO::FETCH_OBJ);
echo json_encode($res->fetchAll());
?>