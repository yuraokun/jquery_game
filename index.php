<?php include('includes/header.php'); ?>

<?php

$pageType = "";
$name = "";
if (isset($_POST['key'])) {
  $name = $_POST['key'];
  $name = json_decode($name, true);

  $json = file_get_contents("./TEST.json");
  echo $data . " json";
  $data = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');

  $data = json_decode($data, true);

  echo $data . " data";

  $data = json_encode($data);
  // define("TESTFILE", "./TEST.txt");


  // file_put_contents(TESTFILE, $name);


}
if (isset($_GET['pagetype'])) {

  $pageType = $_GET['pagetype'];
}



$sql = "select * from user";
$stmt = $dbh->prepare($sql);
$stmt->execute();

var_dump($stmt);


?>


<main class='main'>



  <div class="game" id="home" style="background-color: green;">
    <img src="./test2.png" alt="" width="500px">
    <!-- <?php
          while ($row = $stmt->fetch()) {
            echo $row['user_name'];
          }

          ?> -->






  </div>

  <div class="game" id='guessNumberGame'>

    <h1>Guess Numbers Game</h1>

    <div id="start" class='btn'>Start</div>

    <div id="output">
      <small>Message</small>
      <input type="number" name='lock1' max='9' min='0'>
      <input type="number" name='lock2' max='9' min='0'>
      <input type="number" name='lock3' max='9' min='0'>
      <div class="btn" id="checkLock">Open Lock &#128274</div>
    </div>
  </div>



  <div class="game" id="multipleStepGame">

    <div>

      <div class="content">
        <div class="step">
          <h1>First</h1>
          This is the first pagetype
          <div>
            <a href="#">Next</a>
          </div>
        </div>
        <div class="step hiddenStep">
          <h1>Second</h1>
          This is the second pagetype
          <div>
            <a href="#">Next</a>
          </div>
        </div>
        <div class="step hiddenStep">
          <h1>Third</h1>
          This is the third pagetype
          <div>
            <a href="#">Next</a>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="game" id='formValidation'>

    <form method='get' action='#' id="myForm">

      <label for="first">FirstName: </label>
      <input type="text" name="first">
      <span class="alert"></span>

      <label for="last">LastName: </label>
      <input type="text" name="last">
      <span class="alert"></span>

      <label for="email">Email: </label>
      <input type="text" name="email">
      <span class="alert"></span>

      <label for="password">Password: </label>
      <input type="password" name="password">
      <span class="alert"></span>

      <input type="hidden" name="pagetype" value='formValidation'>
      <span class="alert"></span>

      <button type="button" id='validate'>Submit</button>
    </form>

    <div class="message" style='text-align: center; margin-top: 30px;'>
      <?php
      if (isset($_GET['password'])) {
        echo "<h2> you are loged in !! </h2>";
      }
      ?>
    </div>

  </div>


  <div class="game" id="colorMatchGame">
    <h1>Color Match Game</h1>
    <div id="start">Start Game</div>

    <div id="gamearea">
      <div id="findme">Match this color<br><span id="message"></span></div>
      <div id="output"></div>
    </div>

  </div>


  <div class="game" id="jqueryTestPage">
    <h1>jQuery Test Page</h1>

    <div class="textFields">
      <div class="row">
        <button class="show">SHOW ALL</button>
        <button class="send">SEND INFO</button>

      </div>
      <div class="row">
        <label for="">Color</label>
        <select name="colors" id="">
          <option value="">select color</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
      </div>
      <div class="row">
        <label for="">Name</label>
        <input name="name" type="text" placeholder='Name'>
      </div>
      <div class="row">
        <label for="">Age</label>
        <input name="age" type="text" placeholder='Age'>
      </div>
    </div>
    <ul class="testBox">
      <li class="test-list">test list<span>1</span></li>
      <li class="test-list">test list<span>2</span></li>
      <li class="test-list">test list<span>3</span></li>
      <li class="test-list">test list<span>4</span></li>
      <li class="test-list">test list<span>5</span></li>
      <li class="test-list">test list<span>6</span></li>
    </ul>

    <div class="infoBox">
      <h3>Info Box</h3>
      <div class="infoBox-list">

      </div>
    </div>

    <div class="infoImg" style='margin: 30px auto; display: block; '>
      <input type="text" placeholder="img text">
      <div class="infoBtns">
        <button class="slideup">Slide Up</button>
        <button class="slidedown">Slide Down</button>
        <button class="slidetoggle">Slide Toggle</button>
        <button class="fadeIn">Fade In</button>
        <button class="fadeOut">Fade Out</button>
        <button class="fadeToggle">Fade Toggle</button>
        <button class="fadeTo">Fade To</button>
      </div>

      <li>
        <img src="http://via.placeholder.com/350x150" alt="">
      </li>

    </div>
  </div>



  <div class="game" id="jqueryAnimationPage">
    <h1 style='text-align: center; margin-bottom: 10px'>jQuery Animation Page</h1>
    <ul style='display: flex'>
      <li class="link"><a href="#section1">Section 1</a></li>
      <li class="link"><a href="#section2">Section 2</a></li>
      <li class="link"><a href="#section3">Section 3</a></li>
      <li class="link"><a href="#section4">Section 4</a></li>
    </ul>
    <div class="animeP-register">
      <div>
        <label for="">data</label>
        <input type="text">
        <button>Submit</button>
        <div class="dataText"></div>
      </div>


    </div>

    <div class="animation-images">
      <img src="//unsplash.it/1705/800" alt="">
    </div>


    <div id="section1" class="section">section 1</div>
    <div id="section2" class="section">section 2</div>
    <div id="section3" class="section">section 3</div>
    <div id="section4" class="section">section 4</div>




  </div>


  <div class="game" id="ajax">
    ajax

    <div class="btns">
      <button class="btnA">SubmitA</button>
      <button class="btnB">SubmitB</button>
    </div>
    <div class="result">
      <h2>Result</h2>
    </div>
    <hr>
    <div class="result2">
      <h2>Result2</h2>
    </div>
  </div>

</main>
</div>

<!-- 
<h1 class="honda">honda</h1>
<h1 class="honda">honda</h1>
<h1 class="honda">honda</h1>



<img src="https://via.placeholder.com/150" alt="">



<form action="#">

  <input type="checkbox" name='one' value='one'>

  <input type="checkbox" name='two' value='two'>

  <input type="checkbox" name='third' value='third'>
</form>

<p class="honda2">honda2</p>
<p class="honda2">honda2<span> : more content</span></p>
<p class="honda2 hello">honda2</p>
<p class="honda2">honda2</p>



<div class="main">
  <ul>
    <li class="heighlight">heighlight1</li>
    <li class="heighlight">heighlight2</li>
    <li class="heighlight">heighlight3</li>
    <li class="heighlight">heighlight4</li>
  </ul>
  <button>submit</button>
</div>
<div class="main2"></div> -->
<?php include('includes/footer.php'); ?>