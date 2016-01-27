<!DOCTYPE html>
<html>

<head>
		<meta charset="utf-8" />
		<title>MelOn User Registration</title>
		<link rel="shortcut icon" href="storage/assets/image/game/favicon.ico">
		<link rel="stylesheet" href="css/FixedNav.css" type="text/css" />
		<link rel="stylesheet" href="css/Login.css" type="text/css" />
</head>

<body>
		<nav>
				<img id="headerLogo" src="storage/assets/image/game/MelOnLogo.png" />
				<button class="navButton" id="returnTop" onclick="document.location = 'index.html';">Return Top</button>
		</nav>
		<section>
				<form action="php/regist.php" method="post">
						<div>
								<span id="name">Name: </span>
								<input type="text" name="name" size="30" />
						</div><br/>
						<div>
								<span id="password">Password: </span>
								<input type="password" name="password" size="30" />
						</div><br/>
						<div>
								<span id="confirm">Confirm password: </span>
								<input type="password" name="confirm" size="30" />
						</div><br/>
						<div>
								<input type="submit" value="OK">
						</div>
				</form>
				<div><?php echo "Hello World"; ?> </div>
		</section>
</body>

</html>