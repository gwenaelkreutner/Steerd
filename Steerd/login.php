<?php
header("Access-Control-Allow-Origin:*", true);

include "connexion.php";

$stmt = $db_connexion->prepare("SELECT * FROM user WHERE pseudo_user = :pseudo_user && pwd_user = :pwd_user");

$stmt->bindParam(':pseudo_user', $_POST['pseudo_user'], PDO::PARAM_STR);       
$stmt->bindParam(':pwd_user', $_POST['pwd_user'], PDO::PARAM_STR);

$stmt->execute();
$count=$stmt->rowCount();

if($count>0) {
	echo "connecte";
	//$_SESSION['log']=1;
} else {
	echo "mauvais mdp ou pseudo";
}
?>