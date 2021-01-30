<?php

$obj = "";
$name = "";
if (isset($_POST['data'])) {
  $obj = $_POST['data'];

  $parsedObj = json_decode($obj);

  $parsedJson = json_decode(file_get_contents("./TEST.json"));



  array_unshift($parsedJson, $parsedObj);
  $dataLength = count($parsedJson);
  if ($dataLength > 10) {

    for ($i = 0; $i < $dataLength; $i++) {

      if ($i > 9) {
        unset($parsedJson[$i]);
      }
    }
  }

  $data = json_encode($parsedJson);

  // print_r($data . " test");


  define("TESTFILE", "./TEST.json");


  file_put_contents(TESTFILE, $data);

  $data = json_decode($data);

  $data = json_encode(array("data" => $data, "num" => $dataLength));



  echo $data;
}