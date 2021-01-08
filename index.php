<?php include('includes/header.php'); ?>

<?php

$pageType = "";
if (isset($_GET['pagetype'])) {
  $pageType = $_GET['pagetype'];
}




?>


<main class='main'>

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

    <form action="#">

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
    </form>
  </div>


</main>


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