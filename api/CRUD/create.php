<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate provider object
include_once '../objects/provider.php';
 
$database = new Database();
$db = $database->getConnection();
 
$provider = new Provider($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    !empty($data->nombres) &&
    !empty($data->apellidos) &&
    !empty($data->correo_electronico)&&
    !empty($data->celular)&&
    !empty($data->telefono)&&
    !empty($data->registro)
){
 
    // set provider property values
    $provider->name = $data->nombres;
    $provider->lastName = $data->apellidos;
    $provider->email = $data->correo_electronico;
    $provider->phone = $data->celular;
    $provider->contactPhone = $data->telefono;
    $provider->register = $data->registro;
 
    // create the provider
    if($provider->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("message" => "Provider created."));
    }
 
    // if unable to create the provider, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("message" => "Unable to create provider."));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("message" => "Unable to create provider. Data is incomplete."));
}
?>