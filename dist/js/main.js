







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


  $('.humberger').click(toggleMenu)

  function toggleMenu() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.container').removeClass('open');
    } else {
      $(this).addClass('open');
      $('.container').addClass('open');
      // console.log($(this).attr('class'))
    }
  }

  $('.menu-list a').click(function (e) {
    e.preventDefault();
    toggleMenu.call($('.humberger'));
    const url = $(this).attr('href');
    // console.log(url);
    setTimeout(() => {
      window.location.href = url;
    }, 300);

  })



  console.log(pageType + 1)

  // console.log(pageType)
  $('.game').removeClass('active')
  $('.menu-list').removeClass('active')
  switch (pageType) {

    case 'guessNumbersGame':
      $('.game').eq(1).addClass('active')
      $('.menu-list').eq(1).addClass('active')
      guessNumberGame();
      break;
    case 'multipleStepGame':
      $('.game').eq(2).addClass('active')
      $('.menu-list').eq(2).addClass('active')
      multipleStepGame();
      break;
    case 'formValidation':
      $('.game').eq(3).addClass('active')
      $('.menu-list').eq(3).addClass('active')
      formValidation();
      break;
    case 'colorMatchGame':
      $('.game').eq(4).addClass('active')
      $('.menu-list').eq(4).addClass('active')
      colorMatchGame();
      break;
    case 'jqueryTestPage':
      $('.game').eq(5).addClass('active')
      $('.menu-list').eq(5).addClass('active')
      jqueryTestPage();
      break;
    case 'jqueryAnimationPage':
      $('.game').eq(6).addClass('active')
      $('.menu-list').eq(6).addClass('active')
      jqueryAnimationPage();
      break;
    case 'ajax':
      $('.game').eq(7).addClass('active')
      $('.menu-list').eq(7).addClass('active')
      ajax();
      break;
    default:
      $('.game').eq(0).addClass('active')
      $('.menu-list').eq(0).addClass('active')
      home();
      break;
  }


  function home() {

    const name = $('.home_name');
    const btn = $('.home_btn');

    btn.click(getName);


    function getName() {
      const value = name.val();
      name.val("");

      const obj = {
        name: "honda",
        age: "34"
      }
      send(obj);
    }

    function send(val) {
      $.ajax({
        //POST通信
        type: "POST",
        //ここでデータの送信先URLを指定します。
        url: "ajax.php",
        data: { key: JSON.stringify(val) },
        dataType: 'json',
        //処理が成功したら
        success: function (data, dataType) {
          //HTMLファイル内の該当箇所にレスポンスデータを追加する場合
          $('.ajax_res').text(data);
          console.log(data)
          // load();
        },
        //処理がエラーであれば
        error: function (e) {
          console.log(e.responseText + " 2");

        }
      });
    }

    function load() {
      $.ajax({
        url: "./TEST.json",
        type: "get",
        dataTYpe: 'json',
        success: function (data) {
          let text = JSON.parse(data);
          $('.ajax_res').text(text.name + text.age);
        },
        error: function (data) {
          alert("申し訳ありません。読み込みに失敗しました。");
        }
      })
    }


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


  function formValidation() {
    $('button#validate').click(validateMe);

    function validateMe(e) {
      e.preventDefault();
      let okay = true;

      $('#myForm input').each(function () {
        if (!$(this).val()) {
          $(this).next().html('<span style="color: orange;">the field can not be empty</span>')

          okay = false;
        } else if ($(this).attr('name') == "email" && !validateEmail($(this).val())) {
          $(this).next().html('<span style="color: orange;">it is a not valid email address</span>')
          okay = false;
        } else if ($(this).attr('name') == "password" && $(this).val().length < 5) {
          $(this).next().html('<span style="color: orange;">password needs to be more than 5 characters</span>')
          okay = false;
        } else {
          $(this).next().html('')
        }


      })


      if (okay) {

        let formValues = $('#myForm').serialize();
        console.log(formValues);

        $('#myForm').submit();
      }
    }

    function validateEmail(email) {
      const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      let result = regexp.test(email);
      return result;
    }

    function formStyling() {

    }
  }


  function colorMatchGame() {
    let colorArr = [];


    $('#colorMatchGame #gamearea').hide();
    $('#colorMatchGame #start').click(startGame);
    $('#colorMatchGame #output').on('click', '.cell', clickCell)
    $('#colorMatchGame #start').css({
      border: '1px slid black',
      textAlign: 'center',
      padding: '10px',
      width: '250px',
      backgroundColor: 'orange',
      fontSize: '1.5em',
      marginBottom: '10px',
      color: 'white',
      borderRadius: '10px',
      margin: '10px auto',
      boxShadow: '1px 2px 9px #707070'
    })
    $('#colorMatchGame #findme').css({
      border: '1px solid black',
      textAlign: 'center',
      color: 'black',
      padding: '10px',
      width: '400px',
      fontSize: '1.5em',

      margin: '10px auto 0px',
    })


    function clickCell() {
      let curColor = $(this).css('backgroundColor');
      if (curColor === $('#findme').css('backgroundColor')) {
        pickMyColor();
        console.log('changedColor : ' + curColor)
        let cntValue = Number($(this).text())
        cntValue++;
        $(this).text(cntValue);
        const newColor = addNewColor();
        $(this).css('background-color', newColor);


        $('#colorMatchGame #message').text("Correct Great :)")
      } else {
        $('#colorMatchGame #message').text("Wrong... :(")
      }
    }



    function startGame() {

      $('#colorMatchGame #gamearea').show();
      $('#colorMatchGame #start').hide();
      makeBoard();
      pickMyColor();
    }

    function addNewColor() {
      let trackColor = randomColor();
      colorArr.push(trackColor);
      return trackColor
    }

    function makeBoard() {
      let x = 4
      let html = '';
      for (let i = 0; i < x; i++) {
        html += '<div class="row">';
        for (let y = 0; y < x; y++) {
          let randomColor = addNewColor();
          html += '<div class="cell" style="background-color:' + randomColor + ';" >0</div>';
        }
        html += '</div>';
      }
      $('#colorMatchGame #output').html(html);
      $('.cell').css({
        border: '1px solid black',
        textAlign: 'center',
        width: '100px',
        height: '100px',
        fontSize: '1.5em',
        marginBottom: '10px',
        margin: '0 auto',
        display: 'inline-block',
        color: 'black'

      })

    }
    function pickMyColor() {
      let index = Math.floor(Math.random() * colorArr.length);

      console.log(colorArr[index])
      let picked = colorArr.splice(index, 1);
      console.log(colorArr);
      $('#findme').css('background-color', picked)

    }
    function randomColor() {
      // return '#' + ((1 << 24) * Math.random() | 0).toString(16);
      var r = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
      return rgb;
    }
  }



  function jqueryTestPage() {
    console.log("jqueryTestPage")

    $("#jqueryTestPage h1").css({
      textAlign: "center",
      margin: "30px 0 10px"
    })

    $(".textFields").css({
      width: "50%",
      margin: "0 auto"
    })
    $(".textFields .row").css({
      width: "100%",
      height: "40px"
    })
    $(".textFields label").css({
      width: "50px",
      display: "inline-block",

    })
    $(".textFields input").css({
      width: "80%",
      height: "100%",
      display: "inline-block",
      marginLeft: "10px"
    })
    $(".textFields select").css({
      width: "30%",
      height: "100%",
      display: "inline-block",
      marginLeft: "10px"
    })
    $(".testBox").css({
      padding: "20px 0 0 0",
      height: "auto"
    })
    $(".infoBox").css({
      border: "1px dotted black",
      width: "50%",
      margin: "30px auto 0 ",
      height: "auto",
      minHeight: "500px",
      textAlign: "center",
      padding: "10px"
    })

    $(".test-list").css({
      border: "1px solid #707070",
      padding: "10px",
      textAlign: "center",
      width: "50%",
      margin: "0 auto",
      height: "auto",
      wordBreak: "break-all"
    })
    // $(".test-list:not(:last-child)").css({
    //   borderBottom: 'none',

    // })

    changeColor()
    // $(".test-list").dblclick(function () {
    //   $(this).text('Double Click')
    // })

    // $(".test-list").hover(function () {
    //   $(this).text('hovered')
    // })

    // $(".test-list").mousedown(function () {
    //   $(this).text('mosedowned')
    // })

    $(".test-list").click(function () {
      // console.log($(this).children("span").text());
      // $(this).hide("slow")
      $(this).hide(2000, function () {
        $(".test-list").each(function (el) {
        })
      })
    })
    $(".textFields button.show").click(function () {
      $(".test-list").show(1000)
    })
    $(".textFields button.send").click(sendInfo)

    function sendInfo() {
      let number = $(".infoBox-list li").length + 1;

      let name = $('.textFields input[name="name"]').val();
      let age = $('.textFields input[name="name"]').val();
      $('.textFields input[name="name"]').val("");
      $('.textFields input[name="age"]').val("");


      // $(".infoBox-list").after("<li>No " + number + " Name: " + name + " age: " + age + "</li>")
      // $(".infoBox-list").before("<li>No " + number + " Name: " + name + " age: " + age + "</li>")
      $(".infoBox-list").prepend("<li>No " + number + " Name: " + name + " age: " + age + "</li>")
      // $(".infoBox-list").append("<li>No " + number + " Name: " + name + " age: " + age + "</li>")
    }



    $('.textFields input').focus(function () {
      $(this).css('background-color', "orange")
    })
    $('.textFields input').blur(function () {
      $(this).css('background-color', "white")
    })

    $('.textFields select[name="colors"]').on("change", changeColor)


    $(window).resize(function () {
      $(".test-list").eq(2).html("<span>" + $(window).width() + "</span>")
    })

    $(window).scroll(function () {
      console.log("scrolling")
    })
    function changeColor() {
      let bgcolor = $('.textFields select[name="colors"]').val();
      let color;

      if (!bgcolor) {
        bgcolor = "white"
        color = "black"
        $(".test-list").css({
          border: "1px solid #707070",
        })
        // $(".test-list:not(:last-child)").css({
        //   borderBottom: 'none',
        // })
      } else {
        color = "white"
        $(".test-list").css({
          border: "1px solid white",
        })
        // $(".test-list:not(:last-child)").css({
        //   borderBottom: 'none',
        // })
      }
      $("#jqueryTestPage").css({
        backgroundColor: bgcolor,
        minHeight: "calc(100vh - 70px)",
        color: color
      })
    }

    $('.textFields input[type="text"]').on("input", function (e) {
      if ($(this).attr("name") == "name") {
        $(".test-list").first().html("<span>" + $(this).val() + "</span>")
      } else if ($(this).attr("name") == "age")
        $(".test-list").eq(1).html("<span>" + $(this).val() + "</span>")
    })


    $('.infoImg img').click(function () {
      let tempSrc = $(this).attr('src');

      console.log(tempSrc)
      window.open(tempSrc, 'Full Image', 'popup')
    }).on('mouseenter', function () {
      $(this).before('<div style="background-color: orange; color: white;padding: 5px;">Click Image to see the picture !!</div>')
    }).on('mouseleave', function () {
      $(this).prev().remove();
    })
    $('.infoImg input[type="text"]').on('input', function () {
      let newSrc = "";
      newSrc = 'http://via.placeholder.com/350x150?text=' + $(this).val();
      console.log(newSrc)
      $('.infoImg img').prop('src', newSrc)
    })


    $('.infoBtns button').click(function () {
      if ($(this).index() == 0) {
        console.log(1)
        $('.infoImg img').slideUp(1000, function () {
          $(this).hide()
          $(this).next().show()
        }.bind(this));
      } else if ($(this).index() == 1) {
        $('.infoImg img').slideDown(1000, function () {
          $(this).hide()
          $(this).prev().show();
        }.bind(this));
      } else if ($(this).index() == 2) {
        $('.infoImg img').slideToggle('fast', function () {

          if ($('.infoImg img').css('display') == "none") {
            $(this).prev().show()
            $(this).prev().prev().hide();
          } else {
            $(this).prev().hide()
            $(this).prev().prev().show();
          }

        }.bind(this));
      } else if ($(this).index() == 3) {
        $('.infoImg img').fadeIn(1000)
      } else if ($(this).index() == 4) {
        $('.infoImg img').fadeOut(1000)
      } else if ($(this).index() == 5) {
        $('.infoImg img').fadeToggle(1000)
      } else if ($(this).index() == 6) {
        $('.infoImg img').fadeTo(1000, 0.5)
      }

    })
  }



  function jqueryAnimationPage() {

    $('#jqueryAnimationPage .section').css({

      width: "100%",
      height: '100vh',
      backgroundColor: "#efefef",
      borderTop: "1px solid #707070"
    })
    http://localhost:8888/jquery%20app/index.php?pagetype=jqueryAnimationPage#section2
    $('#jqueryAnimationPage').css({

      width: "100%",
      minHeight: 'calc(100vh - 70px)',
      backgroundColor: '#efefef',
      padding: '50px'
    })


    $('.animation-images').css({

      width: "70%",
      height: "300px",
      margin: "0 auto"
    })

    $('.animation-images img').css({

      width: "100%",
      height: "100%",
      objectFit: "cover"
    })

    $('#jqueryAnimationPage .link').on("click", function () {
      let id = $(this).children('a').prop('href')
      id = id.substring(id.lastIndexOf("#"));
      console.log(id)
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 2000)
    })

    setTimeout(() => {
      $('#jqueryAnimationPage h1').animate({
        fontSize: "1.5em",
        "backgroundColor": "rgb(255, 255, 2)",
        marginTop: "50px"
      })
      $('#jqueryAnimationPage').animate({
        "backgroundColor": "#efefef",

      })
    }, 2000);

    let option = { duration: 1000 };
    $('#jqueryAnimationPage img').on('click', function () {
      console.log(13)
      $('#jqueryAnimationPage img').animate({
        "position": "absolute",
        "transition": "all .3s",
        "marginTop": "+=10px",
      }, {
        duration: 3000,
        step: function (now, jx) {
          console.log(now, jx)
          $(this).css('transform', 'rotate(' + now + 'deg)')
        }
      }).animate({
        "width": "+=10px",

      })


    })


    $('#jqueryAnimationPage h1').on('click', function () {
      console.log(13)
      $('#jqueryAnimationPage img').animate({
        "width": "+=500px",
        "marginTop": "+=50px",

      }, option).animate({
        "marginRight": "+=50px"
      })
    })


    const dataArr = [];

    $('.animeP-register button').on('click', function () {
      let text = $('.animeP-register input').val();
      let isExist = $.inArray(text, dataArr)
      console.log(isExist)
      if (isExist !== -1) {

        alert('that text is already registered..')
        return
      }
      dataArr.push($.trim(text));

      if ($.isArray(dataArr)) {
        let temp = ""
        $.each(dataArr, function (index, value) {
          temp += "<p>ID: " + index + " value: " + value + "</p>";
        })
        $('.dataText').html(temp)

      }
    })

  }


  function ajax() {

    let btnA = $('#ajax .btnA');
    let btnB = $('#ajax .btnB');

    let result = $('#ajax .result');
    let result2 = $('#ajax .result2');

    btnA.on('click', getDataA);
    btnB.on('click', getDataB);

    const jsonUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    let jsonUrl2 = "https://api.randomuser.me/?results=50"

    function getDataA() {
      // result.load('example.html h1')
      // result.load('example.html .one')
      let url = "example.html";


      // result.load(url, function (responseText, status, xhr) {
      //   console.log(responseText);
      //   console.log(status);
      //   console.log(xhr)
      // })

      $.ajax({
        url: jsonUrl,
        // dataType: 'text'
        dataType: 'json',
        success: (function (data) {
          console.log('success!!');
          console.log(data)
        })

      }).done(function (rp, status, xhr) {
        console.log('done');
        console.log(rp);
        console.log(status);
        console.log(xhr);
        result.append(rp.title)
        let keys = Object.keys(rp);
        console.log(keys)
        $.each(keys, function (index, val) {
          result.append('<p>' + val + ': ' + rp[val] + '</p>');
        })
      }).fail(function () {
        console.log('Fail')
      }).always(function () {
        console.log('Always')
      })
    }

    function getDataB() {

      // get is only for json data
      $.get(jsonUrl2, function (data) {

        console.log(data);

        $.each(data.results, function (index, val) {
          let userImage = val.picture.large;
          let userNameData = val.name;
          let id = index + 1;
          renderUserData(id, userImage, userNameData);

        })
      }).fail(function () {
        console.log('fail')
      }).always(function () {
        console.log('always')
      })
      console.log("hey")
    }

    function renderUserData(id, userImageUrl, userNameData) {

      let title = userNameData.title;
      let first = userNameData.first;
      let last = userNameData.last;
      let userName = title + " " + first + " " + last;

      let temp = ""
      temp += "<div style='display: inline-flex; flex-direction: column; text-align: center;margin-right: 20px;'>";
      temp += "<img style='object-fit: contain;' src='" + userImageUrl + "'>";
      temp += "<span>No," + id + " " + userName + "</span>";
      temp += "</div>"
      result2.append(temp);
    }

  }

})





