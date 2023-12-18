var timeBanner = $('#currentDay');

function displayTime() {
    var rightNow = dayjs().format('dddd, D MMM YYYY');
    timeBanner.text(rightNow);
  }
  displayTime();

  $(document).ready(function() {
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(text, time);
  })

  function getTime() {
    var now = dayjs().hour();

    $(".time-block").each(function(){
      var select = $(this);
      var id = select.attr('id');
      var timeId = id.split("m")
      var nowBlock = parseInt(timeId[1]);
      var nowFormat = now +"00";
     
      if (nowBlock == nowFormat){
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
      } else if (nowBlock > nowFormat){
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
       }else {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        }
    })    
  }

getTime();



})

