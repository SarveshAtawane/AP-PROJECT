<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snake Game</title>
  <link rel="stylesheet" href="style.css">


</head>

<body>


  <div class="body">


    <div id="scoreBox">
      <h1>Score: 0</h1>
    </div>
    <div id="hiscoreBox">
      <h1></h1>
    </div>
    <div class="winning-message" id="winningMessage">
      <div data-winning-message-text></div>
      <button id="restartButton">Resume</button>
    </div>
    <div class="over-message" id="overMessage">
      <div data-over-message-text></div>
      <button id="overButton">Restart</button>
    </div>

    <div class="user">
      <h1>
        <?php
        echo $_SESSION["user"];
        ?>
      </h1>
    </div>
    <div id="board">
    </div>
  </div>

  <script src="index.js"></script>
</body>

</html>