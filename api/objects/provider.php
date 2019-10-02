<?php
class Provider{
 
    // database connection and table name
    private $conn;
    private $table_name = "proveedores";
 
    // object properties
    public $id;
    public $name;
    public $lastName;
    public $age;
    public $email;
    public $phone;
    public $contactPhone;
    public $register;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    // read providers
function read(){
 
    // select all query
    $query = "SELECT
                *
            FROM
                " . $this->table_name ;
               
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// create provider
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            (nombres, apellidos, edad, correo_electronico, celular, telefono, registro) 
            VALUES 
            (:name, :lastName, :age, :email, :phone, :contactPhone, :register)
                ";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->lastName=htmlspecialchars(strip_tags($this->lastName));
    $this->age=htmlspecialchars(strip_tags($this->age));
    $this->email=htmlspecialchars(strip_tags($this->email));
    $this->phone=htmlspecialchars(strip_tags($this->phone));
    $this->contactPhone=htmlspecialchars(strip_tags($this->contactPhone));
    $this->register=htmlspecialchars(strip_tags($this->register));
 
    // bind values
    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":lastName", $this->lastName);
    $stmt->bindParam(":age", $this->age);
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":phone", $this->phone);
    $stmt->bindParam(":contactPhone", $this->contactPhone);
    $stmt->bindParam(":register", $this->register);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
// find an specific provider
function readOne(){
 
    // query to read single record
    $query = "SELECT *
            FROM
                " . $this->table_name . " WHERE id = ?";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );

    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));

    // bind id of the provider to be updated
    $stmt->bindParam(1, $this->id);

    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->name = $row['nombres'];
    $this->lastName = $row['apellidos'];
    $this->age = $row['edad'];
    $this->email = $row['correo_electronico'];
    $this->phone = $row['celular'];
    $this->contactPhone = $row['telefono'];
    $this->register = $row['registro'];
}
// update the provider
function update(){
 
    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
            nombres=:name, 
            apellidos=:lastName, 
            edad=:age, 
            correo_electronico=:email,
            celular=:phone,
            telefono=:contactPhone,
            registro=:register
            WHERE
                id = :id";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->lastName=htmlspecialchars(strip_tags($this->lastName));
    $this->age=htmlspecialchars(strip_tags($this->age));
    $this->email=htmlspecialchars(strip_tags($this->email));
    $this->phone=htmlspecialchars(strip_tags($this->phone));
    $this->contactPhone=htmlspecialchars(strip_tags($this->contactPhone));
    $this->register=htmlspecialchars(strip_tags($this->register));
 
    // bind new values
    $stmt->bindParam(":id", $this->id);
    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":lastName", $this->lastName);
    $stmt->bindParam(":age", $this->age);
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":phone", $this->phone);
    $stmt->bindParam(":contactPhone", $this->contactPhone);
    $stmt->bindParam(":register", $this->register);
 
    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
// delete the provider
function delete(){
 
    // delete query
    $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
 
    // bind id of record to delete
    $stmt->bindParam(1, $this->id);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
}

?>