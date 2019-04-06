<?php
header("Access-Control-Allow-Origin:*", true);

include "connexion.php";

// On vérifie si le pseudo existe deja
$stmt = $db_connexion->prepare("SELECT * FROM user WHERE pseudo_user = :pseudo_user");

$stmt->bindParam(':pseudo_user', $_POST['pseudo_user'], PDO::PARAM_STR);       

$stmt->execute();
$count=$stmt->rowCount();

if ($count > 0) {
      echo "le compte existe deja nigga";
} else {
      $sql = "INSERT INTO user(id_user,
            name_user,
            pseudo_user,
            pwd_user,
            rings_user,
            type_user)
            VALUES (
            null, 
            :name_user, 
            :pseudo_user, 
            :pwd_user, 
            :rings_user,
            :type_user)";
                                          
      $stmt = $db_connexion->prepare($sql);
                                                    
      $stmt->bindParam(':name_user', $_POST['name_user'], PDO::PARAM_STR);       
      $stmt->bindParam(':pseudo_user', $_POST['pseudo_user'], PDO::PARAM_STR); 
      $stmt->bindParam(':pwd_user', $_POST['pwd_user'], PDO::PARAM_STR);
      $stmt->bindParam(':rings_user', $_POST['rings_user'], PDO::PARAM_INT); 
      $stmt->bindParam(':type_user', $_POST['type_user'], PDO::PARAM_INT);
                                            
      $stmt->execute(); 

      echo "C'est bonnnn";
}
?>