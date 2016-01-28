<?php
require_once "connectDB.php";

session_start();

// Receive input datas
$music=$_POST['music'];

try {

    // Get id
    $stmt = $pdo->prepare("SELECT id from ${TABLE_USER} where name = :name");
    $stmt->bindValue(':name', $name);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Save music
    $stmt = $pdo->prepare("INSERT INTO ${TABLE_MUSIC}(id, music) VALUES (:id, :music)");
    $stmt->bindValue(':id', $user["id"]);
    $stmt->bindValue(':music', $music);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);
}
catch(PDOException $e) {
    exit($e->getMessage());
}

// Disconnect database
$pdo = null;

echo $user["id"], $music;
?>