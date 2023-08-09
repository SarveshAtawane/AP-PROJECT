<?php
// MySQL database configuration
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'ap-proj';

// Connect to MySQL server
$mysqli = new mysqli($host, $username, $password, $database);

// Check connection
if ($mysqli->connect_errno) {
    echo json_encode(array('error' => 'Failed to connect to MySQL: ' . $mysqli->connect_error));
    exit();
}

// Retrieve data from the "tab" table
$query = "SELECT Email FROM data";
$result = $mysqli->query($query);

$data = array();

// Fetch the rows and store in an array
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Close the connection
$mysqli->close();

// Send the data as JSON response
echo json_encode($data);
?>
