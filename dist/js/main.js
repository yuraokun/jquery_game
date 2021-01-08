






// $('body').css('background-color', '#efefef');

// $('.honda').hide();
// $('.honda').show();

// $('.honda').html(function (e) {
//   return 'honda' + e + '番';
// })

// $('.honda:last').css('color', 'blue')
// $('.honda:odd').css('color', 'yellow')


// $('.honda').html('yeah<a href="#">link</a>')
// $('.honda').text('yeah')

// $('img').attr('height', '300px')

// $('img').attr('src', 'https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide')



// $('img').click(function () {
//   // $('img').attr({ width: '100%', src: 'https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide' })
//   //   .css({ width: '50%', margin: '0 auto', display: 'block', height: '300px', objectFit: 'contain' });

//   $('img').toggleClass('open')
//   let isOpen = $('img').hasClass('open')

//   if (!isOpen) {
//     $('img').attr({
//       src: 'https://via.placeholder.com/150'
//     })
//     $('.honda2').filter('.hello').html('honda2')
//     $('.honda2').has('span').css('font-size', '16px')
//     console.log(isOpen)
//   } else {
//     $('img').attr({ src: 'https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide' })
//     $('.honda2').filter('.hello').html('hello')
//     $('.honda2').has('span').css('font-size', '30px')
//   }


//   console.log('Document has been loaded')
// })


//////


// var checkboxes = $('input[type="checkbox"]')


// $('.honda2:eq(2)').css('color', 'red')
// $('.honda2:gt(2)').css('color', 'green')
// $('.honda2:lt(2)').css('color', 'purple')


// $('button').click(function () {
//   let heighlight = $('.heighlight').map(function () {
//     return $(this).html()
//   })

//   $('.heighlight').slice(2, 3).css('background-color', 'green')
//   console.log(heighlight[2])

//   let mainChildren = $('.main').children()
//   let mainParent = $('.main').parent();
//   let mainClosest = $('.heighlight').closest('ul');
//   let mainNext = $('.main').next();
//   let mainPrev = $('.main').prev();
//   $('.heighlight').nextAll().text('I am next');
//   $('.heighlight').siblings().text('I am brother');
//   console.log(mainChildren)
//   console.log(mainParent)
//   console.log(mainClosest)
//   console.log(mainNext)
//   console.log(mainPrev)
// })
// console.log(checkboxes)



$(document).ready(function () {


  $('.game').removeClass('active')
  $('.menu-list').removeClass('active')
  switch (pageType) {

    case 'guessNumbersGame':
      $('.game').eq(0).addClass('active')
      $('.menu-list').eq(0).addClass('active')
      guessNumberGame();
      break;
    case 'multipleStepGame':
      $('.game').eq(1).addClass('active')
      $('.menu-list').eq(1).addClass('active')
      multipleStepGame();
      break;
    default:
      $('.game').eq(0).addClass('active')
      $('.menu-list').eq(0).addClass('active')
      guessNumberGame();
      break;
  }



  function guessNumberGame() {
    // $('#guessNumberGame').css({ display: 'flex' })
    $('#output').hide();
    $('#start').click(startGame);
    $('#checkLock').click(openLock);
    let ourSecretNum = "";



    function openLock() {

      let win = 0;

      for (let i = 0; i < $('input[type="number"]').length; i++) {
        let guessNumber = $('input[type="number"]').eq(i);
        let result = checkNumber(ourSecretNum[i], guessNumber.val());
        guessNumber.css({
          backgroundColor: result.backrd
        })
        if (result.checker) {
          win++;
        }
        console.log(ourSecretNum[i], guessNumber.val())
      }

      if (win == 3) {
        $('#start').show();
        $('small').html('You got it<br>' + ourSecretNum);
      }

    }

    function checkNumber(a, b) {
      let response = {};

      if (a < b) {
        response.checker = false;
        response.backrd = 'red'
      } else if (a > b) {
        response.checker = false;
        response.backrd = 'blue'
      } else if (a == b) {
        response.checker = true;
        response.backrd = 'green'
      }
      return response;
    }


    function startGame() {
      ourSecretNum = Math.floor(Math.random() * (999 - 100 + 1) + 100).toString();

      $('#start').hide();
      $('#output').show();

      for (let i = 0; i < $('input[type="number"]').length; i++) {
        $('input[type="number"]').eq(i).val('5');
      }

      $('small').html('Red Background guess is low : Blue Background guess is high');
    }

    $('input[type="number"]').css({
      color: "white",
      fontSize: "3em",
      width: "60px",
      border: "1px solid black",
      backgroundColor: "black"
    })
    $('.btn').css({
      backgroundColor: 'black',
      color: 'white',
      width: '200px',
      fontSize: '1.5em',
      padding: '15px',
      margin: '25px auto 0px',
      border: '1px solid black',
      textAlign: 'center'
    })
    $('#output').css({
      backgroundColor: '#333',
      width: '300px',
      padding: '15px',

      border: '1px solid black',
      textAlign: 'center'
    })
    $('small').css({
      color: 'white',
      fontSize: '1em',
      padding: '15px',
      marginBottom: '15px',
      display: 'block'
    })
  }

  function multipleStepGame() {
    // $('#multipleStepGame').css({ display: 'flex' })

    function randomColorNumbers() {
      let colorNumbers = Math.floor(Math.random() * 256);
      return colorNumbers;
    }

    $('.hiddenStep').hide();
    $('#multipleStepGame a').click(function (e) {
      e.preventDefault();

      $('#multipleStepGame').css('background-color', 'rgb(' + randomColorNumbers() + ", " + randomColorNumbers() + ", " + randomColorNumbers() + ")")
      console.log(randomColorNumbers + " " + randomColorNumbers)

      let parent = $(this).closest('.step');
      let mainContent = $('.content>.step');
      let index = (mainContent.index(parent) + 1) % mainContent.length;
      parent.css('display', 'none');
      mainContent.eq(index).css('display', 'block')
    })


  }





})





