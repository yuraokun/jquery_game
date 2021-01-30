<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <main>
    <div class="wrap">
      <input type="text" class="home_name">
      <input type="text" class="home_age">
      <button class="home_btn">submit</button>
      <h3>Users</h3>
      <div class="ajax_res">
      </div>
    </div>

    <div class="contents">
      <?php


      // $data = json_decode(file_get_contents('Test.json'));
      // array_push($data, (object)array("name" => "takashi", "age" => "34"));

      // print_r($data);


      // foreach ($data as $drink) {
      //   echo "<li>name : " . $drink->name . "</li>";
      //   echo "<li>age : " . $drink->age . "</li>";
      // }

      // $data = json_encode($data);
      // define("TESTFILE", "./TEST.txt");


      // file_put_contents(TESTFILE, $data);


      ?>
    </div>

  </main>


  <script src="dist/js/jquery.min.js"></script>

  <script>
  $(document).ready(function() {

    const text = $('.home_name');
    const text2 = $('.home_age');
    const btn = $('.home_btn');
    const name = $('.ajax_res');




    btn.click(registerUser);

    loadUserData();

    function loadUserData() {
      $.ajax({
        url: "./TEST.json",
        type: "get",
        dataTYpe: 'json',
        success: function(data) {

          renderUser(data)
        },
        error: function(data) {
          alert("申し訳ありません。読み込みに失敗しました。");
        }
      })
    }


    function registerUser() {

      const name = text.val();
      const age = text2.val();
      const time = getTime();

      const obj = {
        name: name,
        age: age,
        time: time
      }

      $.ajax({
        //POST通信
        type: "POST",
        //ここでデータの送信先URLを指定します。
        url: "ajax2.php",
        data: {
          data: JSON.stringify(obj)
        },
        dataType: 'json',
        //処理が成功したら
        success: function(data, dataType) {
          //HTMLファイル内の該当箇所にレスポンスデータを追加する場合
          console.log(data);
          renderUser(data["data"]);

        },
        //処理がエラーであれば
        error: function(e) {
          console.log(e.responseText + " failed");

        }
      });
      text.val("");
      text2.val("");
    }

    function renderUser(dataObj) {
      let temp = "";
      dataObj.forEach((el, index) => {
        let time;
        el.hasOwnProperty('time') ? time = el.time : time = "none";

        temp += `<p>ID: ${index+1} User Name : ${el.name} User Age : ${el.age} Registered Time : ${time}`;
      })
      $('.ajax_res').html(temp);
    }

    function getTime() {
      const dt = new Date();
      return dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate() + " " + dt.getHours() + ":" + dt
        .getMinutes();
    }




  })
  </script>
</body>

</html>