<!DOCTYPE html>
<html>

<head>
		<meta charset="utf-8" />
		<title>MelOn User Login</title>
		<link rel="shortcut icon" href="storage/assets/image/game/favicon.ico">
		<link rel="stylesheet" href="css/FixedNav.css" type="text/css" />
		<link rel="stylesheet" href="css/Authentication.css" type="text/css" />
</head>

<body>
		<?php require_once "php/languageCheck.php"; ?>
		<nav>
				<img id="headerLogo" src="storage/assets/image/game/MelOnLogo.png" />
				<button class="navButton" id="returnTop" onclick="document.location = 'index.html';">Return Top</button>
		</nav>
		<section>
			<div id="loginTypo">Login</div>
            <div id="authContainer">
			<?php
				  if(isset($_GET["error"])){
				  require_once "php/errorMessage.php";
				  $error = new ErrorMessage($lang, "error");
				  $error->error();
				  }
			?>
				<form action="php/login.php" method="post">
						<div class="input">
								<?php
									if(isset($_GET["name_range"])) $error->nameRange();
									if(isset($_GET["match"])) $error->match();
								?>
								<span id="name">Name: </span>
								<input type="text" name="name" size="30" />
						</div><br/>

						<div class="input">
								<?php if(isset($_GET["pass_range"])) $error->passRange(); ?>
								<span id="password">Password: </span>
								<input type="password" name="password" size="30" />
						</div><br/>

						<input type="hidden" name="language" value=<?php echo $lang; ?>>

						<input type="submit" value="Login">
				</form>
            </div>
		</section>
</body>

</html>