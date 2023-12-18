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
})

