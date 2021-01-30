<?php



$dsn = 'mysql:host=localhost;dbname=jqueryGame';
$user = 'yuraokun';
$password = '2687';


try {
  $dbh = new PDO($dsn, $user, $password);
  // echo "接続成功\n";
} catch (PDOException $e) {
  echo "接続失敗: " . $e->getMessage() . "\n";
  exit();
}