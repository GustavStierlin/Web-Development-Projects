<?php
$host='localhost';
$username='id20816447_goose';
$password='__Gustav16__';
$dbname='id20816447_stock';


$conn =  new mysqli($host,$username,$password,$dbname);
if(mysqli_connect_error())
    echo "Error connecting".mysqli_connect_error();
else
    echo "Connection established";

$Name = $_GET['cust_Name'];
$email = $_GET['cust_Email'];
$password = $_GET['cust_Pass'];
$hashedPass = password_hash($password,PASSWORD_DEFAULT);

$sql = "INSERT INTO `CustomersTbl` (`cust_Name`, `cust_Email`, `cust_Pass`) VALUES ('$Name', '$email', '$hashedPass')";
if(mysqli_query($conn,$sql)) 
    header("Location: index.html");
else
    echo "Fok man";
    
    //Datebase connection to database
    //Database connection
    //fitworks gym

?>

