<?php
require('db.php');
function cll()
{

}
if (isset($_REQUEST['username'])) {
    $username = ($_REQUEST['username']);
    $email = ($_REQUEST['email']);
    $password = ($_REQUEST['password']);
    $query1 = "SELECT * FROM data WHERE Email = '$email'";
    $result1 = mysqli_query($con, $query1);
    if (mysqli_num_rows($result1) > 0) {
        header("Refresh: .01; URL=index.html");
        $jsCode = "<script>
    alert('Email already taken either login or use another email');
</script>";
        echo $jsCode;
        exit();
    } else {
        $query = "INSERT into `data` (UserName, PassWord, Email)
        VALUES ('$username', '" . md5($password) . "', '$email')";
        $result = mysqli_query($con, $query);
        if ($result) {
            $jsCode = "<script>
    alert('You are registered successfully');
</script>";
        header("Refresh: .01; URL=\sam\Login\index.html");
            echo $jsCode;
        } else {

        }
    }
} else {

}
?>