<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/provider.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare provider object
$provider = new Provider($db);
 
// get id of provider to be edited
$data = json_decode(file_get_contents("php://input"));
 
// set ID property of provider to be edited
$provider->id = $data->id;
 
// set provider property values
$provider->name = $data->nombres;
    $provider->lastName = $data->apellidos;
    $provider->email = $data->correo_electronico;
    $provider->phone = $data->celular;
    $provider->contactPhone = $data->telefono;
    $provider->register = $data->registro;
 
// update the provider
if($provider->update()){
 
    // set response code - 200 ok
    http_response_code(200);
 
    // tell the user
    echo json_encode(array("message" => "Provider updated."));
}
 
// if unable to update the provider, tell the user
else{
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Unable to update provider."));
}
?>