var timeBanner = $('#currentDay');

function displayTime() {
    var rightNow = dayjs().format('dddd, D MMM YYYY');
    timeBanner.text(rightNow);
  }
  displayTime();