<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/provider.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare provider object
$provider = new Provider($db);
 
// set ID property of record to read
$provider->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of provider to be edited
$provider->readOne();
 
if($provider->name!=null){
    // create array
    $provider_arr = array(
        "nombres" => $provider->name,
        "apellidos" => $provider->lastName,
        "edad" => $provider->age,
        "correo_electronico" => $provider->email,
        "celular" => $provider->phone,
        "contactPhone" => $provider->contactPhone,
        "registro" => $provider->register
 
    );
 
    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($provider_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user provder does not exist
    echo json_encode(array("message" => "Provider does not exist.","status" => "Denied"));
}
?>