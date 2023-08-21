<?php
$host = 'localhost';
$username = 'id20816447_goose';
$password = '__Gustav16__';
$dbname = 'id20816447_stock';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM CustomersTbl WHERE cust_Email = '$email'";
    $result = $conn->query($query);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $storedPassword = $row['cust_Pass'];

        // Check if the stored password needs to be hashed
        if (!password_verify($password, $storedPassword)) {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Update the password in the database
            $updateQuery = "UPDATE CustomersTbl SET cust_Pass = '$hashedPassword' WHERE cust_Email = '$email'";
            $conn->query($updateQuery);
        }

        // Password verification
        if (password_verify($password, $storedPassword)) {
            echo "Login successful";
            // Redirect to the home page or any other authorized page
            #header("Location: index.html");
            #exit();
        } else {
            header("Location: index.html");
            #exit();
            #echo "Invalid password";
        }
    } else {
        echo "User not found";
    }
}
?>
