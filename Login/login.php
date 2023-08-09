<?php
require('db.php');
session_start();
if (isset($_POST['email'])) {
	$email = stripslashes($_REQUEST['email']);
	$password = stripslashes($_REQUEST['password']);
	$query = "SELECT * FROM `data` WHERE Email='$email'
and PassWord='" . md5($password) . "'";
	$result = mysqli_query($con, $query) or die(mysqli_error($con));
	$rows = mysqli_num_rows($result);
	if ($rows == 1) {
		while ($data = $result->fetch_assoc()) {
			$_SESSION["user"] = $data["UserName"];
			// echo $data["UserName"];
		}
		// echo "login done";
		 header("Location: \sam\homepage\index.html");
	
		exit();
	} else {
		$jsCode = "<script>
			alert('Wrong password or email');
		</script>";
		header("Refresh: .01; URL=\sam\Login\index.html");
		echo $jsCode;
	}
} else {
}

?>