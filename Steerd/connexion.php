<?php
try{
	$db_connexion = new PDO('mysql:host=localhost;port=8080;dbname=bdd_music','root','');
} 
catch( Exception $exception ) {
	die($exception->getMessage()) ;
}
?>