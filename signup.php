<?php
    session_start();
    header('location:login.html');

     // Connect to the database
     $DbUsername = "if0_34365953";
     $servername = "sql200.infinityfree.com";
     $dbname = "if0_34365953_Thrift";
     $dbpassword = "Goose!";
 
     $conn = mysqli_connect('localhost','root','','if0_34365953_thrift');
     $sql="Insert INTO if0_34365953_thrift VALUES(1,'gustav@gmail.com','1234')";
     if($conn)
     {
        echo "Connection established";
     }
     else{
        echo "Connection failed";
     }
 
    //  mysqli_select_db($conn, 'id20823144_rooibok_db');

     // Get the form data from the POST request
    //  $user_name = $_POST['user_name'];
     $name = $_POST['username'];
     $password = $_POST['password'];
     $hashed_password = password_hash($password, PASSWORD_DEFAULT);
     
    
 
     // Check for errors in connection
     if (mysqli_connect_errno()) {
         echo "Failed to connect to MySQL: " . mysqli_connect_error();
         exit();
     }
 
     //Check if account exists already
 
     $quer= "SELECT * FROM customerstbl  WHERE cust_Email = '$name'";
     $result= mysqli_query($conn, $quer);
     $num= mysqli_num_rows($result);
     if ($num==1){
         echo "Duplicate Data";
     }
 
     else{
         // Insert the form data into the database
        // $sql = "INSERT INTO user_data_table (user_name, email, password)
        // VALUES ('$user_name', '$email', '$password')";

        $querr="INSERT INTO customerstbl (cust_Email, cust_Pass) value('$name', '$password')";
        mysqli_query($conn, $querr);
 
     }

?>