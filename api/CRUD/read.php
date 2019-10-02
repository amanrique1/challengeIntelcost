<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// include database and object files
include_once '../config/database.php';
include_once '../objects/provider.php';
 
// instantiate database and usuario object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$provider = new Provider($db);
 
// read usuario will be here
// query usuarios
$stmt = $provider->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // provider array
    $providers_arr=array();
    $providers_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $provider_item=array(
            "id"=>$id,
             "nombres" => $nombres,
            "apellidos" => $apellidos,
            "edad"=>$edad,
            "correo_electronico" => $correo_electronico,
           "celular"=>$celular,
           "telefono"=>$telefono,
           "registro"=>$registro
        );
 
        array_push($providers_arr["records"], $provider_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show providers data in json format
    echo json_encode($providers_arr);
}
 
// no providers found will be here
else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no providers found
    echo json_encode(
        array("message" => "No users found.")
    );
}
?>