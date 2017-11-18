//TODO: Night king army++ as defender died
var YTK = YTK || {};

YTK.reserve = (function() {
  var 
  grabFormData = function() {
    var $name   = $('.name', '.reserve-page'),
        $phone  = $('.phone', '.reserve-page'),
        $email  = $('.email', '.reserve-page'),
        $uniqueID = $('.unique-id', '.reserve-page');

    return {
      name  : $name.val() || '',
      phone : $phone.val() || '',
      email : $email.val() || '',
      uid   : $uniqueID.val() || ''
    };
  },
  //TODO: add error checking
  setupSubmit = function() {
    console.log('asdfasdf');
    var $revBtn = $('.reservation-btn', '.reserve-page');

    $revBtn.on('click', function() {
      var formObj = grabFormData();

      // push to API
      $.post("/api/new", formObj)
      .done(function(data) {
        console.log(data);
        if (true) {
          alert("Your Reservation is on there");
        }
        else {
          alert("Your Reservation is on the waiting list");  
        }
      });
    });
  },
  initPage = function() {
    setupSubmit();
  };

return {
    initPage : initPage
  }
})();

$(function() {
  YTK.reserve.initPage();
});