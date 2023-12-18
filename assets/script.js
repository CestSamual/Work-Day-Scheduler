var timeBanner = $("#currentDay");
//Current day banner display
function displayTime() {
  var rightNow = dayjs().format("dddd, D MMM YYYY");
  timeBanner.text(rightNow);
}
displayTime();
//Save button functionality
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });
  //Retrieval of current time
  function getTime() {
    var now = dayjs().hour();
    //Loop of timeblocks with if/else to determine colour coding
    $(".time-block").each(function () {
      var select = $(this);
      var id = select.attr("id");
      var timeId = id.split("m");
      var nowBlock = parseInt(timeId[1]);
      var nowFormat = now + "00";

      if (nowBlock == nowFormat) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
      } else if (nowBlock > nowFormat) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      } else {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
    });
  }
  //Local storage getItem for printing user input if present
  $("#am0800 .description").val(localStorage.getItem("am0800"));
  $("#am0900 .description").val(localStorage.getItem("am0900"));
  $("#am1000 .description").val(localStorage.getItem("am1000"));
  $("#pm1200 .description").val(localStorage.getItem("pm1200"));
  $("#pm1300 .description").val(localStorage.getItem("pm1300"));
  $("#pm1400 .description").val(localStorage.getItem("pm1400"));
  $("#pm1500 .description").val(localStorage.getItem("pm1500"));
  $("#pm1600 .description").val(localStorage.getItem("pm1600"));
  $("#pm1700 .description").val(localStorage.getItem("pm1700"));

  getTime();
});
