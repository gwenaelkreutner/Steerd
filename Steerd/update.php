<?php
header("Access-Control-Allow-Origin:*", true);

include "connexion.php";

$sql = "UPDATE user SET
      name_user = :name_user,
      pseudo_user = :pseudo_user,
      pwd_user = :pwd_user,
      rings_user = :rings_user,
      type_user = :type_user
      WHERE id_user = :id_user";
                                          
$stmt = $db_connexion->prepare($sql);

$stmt->bindParam(':id_user', $_POST['id_user'], PDO::PARAM_STR);                                                     
$stmt->bindParam(':name_user', $_POST['name_user'], PDO::PARAM_STR);       
$stmt->bindParam(':pseudo_user', $_POST['pseudo_user'], PDO::PARAM_STR); 
$stmt->bindParam(':pwd_user', $_POST['pwd_user'], PDO::PARAM_STR);
$stmt->bindParam(':rings_user', $_POST['rings_user'], PDO::PARAM_INT); 
$stmt->bindParam(':type_user', $_POST['type_user'], PDO::PARAM_INT);
                                      
$stmt->execute(); 

$pseudo = $_POST['id_user'];
$res = $db_connexion->query("SELECT * FROM user WHERE id_user = '$pseudo' ", PDO::FETCH_OBJ);
echo json_encode($res->fetchAll());
?>