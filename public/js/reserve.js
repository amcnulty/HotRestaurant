//TODO: Night king army++ as defender died
var YTK = YTK || {};

YTK.reserve = (function($) {
  var 
  verifyInput = function(value, $class) {
    if (typeof (value) === 'undefined' || value.trim() === '') {
      showWarning($class);
      return false;
    }
    else {
      return true;
    }
  },
  showWarning = function($div) {
    $div.closest('.input-row').find('.warning').show('slow');
  },
  hideWarnings = function() {
    $('.warning').hide();
  },
  grabFormData = function() {
    var $name   = $('input.name', '.reserve-page'),
        $phone  = $('input.phone', '.reserve-page'),
        $email  = $('input.email', '.reserve-page'),
        $uniqueID = $('input.unique-id', '.reserve-page'),
        name = $name.val(),
        phone = $phone.val(),
        email = $email.val(),
        uid = $uniqueID.val(),
        retObj = {},
        resultArr = [];

        //check all
        resultArr.push(verifyInput(name, $name));
        resultArr.push(verifyInput(phone, $phone));
        resultArr.push(verifyInput(email, $email));
        resultArr.push(verifyInput(uid, $uniqueID));


    if (resultArr.indexOf(false) === -1) {
      hideWarnings();
      retObj = {
        name  : $name.val() || '',
        phone : $phone.val() || '',
        email : $email.val() || '',
        uid   : $uniqueID.val() || ''
      };  
    }
    return retObj;
  },
  //TODO: add error checking
  setupSubmit = function() {
    var $revBtn = $('.reservation-btn', '.reserve-page');

    $revBtn.on('click', function(e) {
      e.preventDefault();
      var formObj = grabFormData();

      if (!$.isEmptyObject(formObj)) {
        // push to API
        //console.log('hey', formObj);
        // $.post("/api/reservation", function(formObj) {
        //   console.log('kao', formObj);
        //   console.log('shit sent', formObj);
        // })
        // .done(function(data) {
        //   console.log(data);
        //   if (true) {
        //     alert("Your Reservation is on there");
        //   }
        //   else {
        //     alert("Your Reservation is on the waiting list");  
        //   }
        // });
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/reservation", true);
        xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
              console.log('all good');
            }
            else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 404) {
              console.log('all bad');
            }
        }
        // Create json here
        // var json = new Object();
        xhr.send(JSON.stringify(formObj));
      }
      
    });
  },
  initPage = function() {
    setupSubmit();
  };

return {
    initPage : initPage
  }
})(jQuery);

$(function() {
  YTK.reserve.initPage();
});