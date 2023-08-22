// todo este codigo corre en el backend (server side)
<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$fechfecha_nacimiento = $_POST['fecha_nacimiento'];
$edad = $_POST['user'];
$nacionalidad = $_POST['nacionalidad'];
$dni = $_POST['dni'];
$genero = $_POST['genero'];
$estado_civil = $_POST['estado_civil'];
$telefono = $_POST['telefono'];
$celular = $_POST['celular'];
$direccion = $_POST['direccion'];
$provincia = $_POST['provincia'];
$codigo_postal = $_POST['codigo_postal'];
$pais = $_POST['pais'];
$nivel_estudio = $_POST['nivel_estudio'];
$trabaja_actualmente = $_POST['trabaja_actualmente'];
$busca_trabajo = $_POST['busca_trabajo'];

// validacion de backend ---valida datos -- seguridad

// Establishing Connection with Server..
$conn = new mysqli('localhost', 'root', '', 'test');  // establece una conexion con una base de datos(host,usuario,pass,base) 

//Check for connection error
if($conn->connect_error){
  die("Error in DB connection: ".$conn->connect_errno." : ".$conn->connect_error);    
}
 
$db = mysql_select_db("test", $connection); 

if (isset($_POST['empnombre'])) {
//tabla empleados
//Query 
$insert= "insert into empleados(nombre, apellido , email, fechfecha_nacimiento, edad, nacionalidad,
dni, genero, estado_civil, telefono, celular, direccion, provincia, codigo_postal, pais, nivel_estudio,
trabaja_actualmente, busca_trabajo ) 

values ('','$nombre', s'$apellido', '$email', '$fechfecha_nacimiento', '$edad','$nacionalidad', 
'$dni', '$genero' , '$estado_civil', '$telefono', '$celular', '$direccion', '$provincia', 
'$codigo_postal', '$pais', '$nivel_estudio', '$trabaja_actualmente', '$busca_trabajo')"; 

if($conn->query($insert)){
 echo 'Dato insertado correctamente';
}
else{
 echo 'Error '.$conn->error;  
}
}
mysql_close($connection); // Connection Closed
?>    