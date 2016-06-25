(function(){
  function initiateCountdown(){
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      var original = $(this).html();

      $this.countdown(finalDate, function(event) {
        if(event.type == "finish"){
          $this.html(original);
          var HideExpired = document.getElementsByClassName("hideexpired");
          for(var i = 0; i < HideExpired.length; i++)
          {
          HideExpired[i].style.display='none';
          }
        }else{
          $this.html(event.strftime(''
            + '<span class="count"><span class="count-wrap"><span class="digits" id="days">%D</span> Day%!d </span></span>'
            + '<span class="count"><span class="count-wrap"><span class="digits" id="hours">%H</span> Hr </span></span>'
            + '<span class="count"><span class="count-wrap"><span class="digits" id="minutes">%M</span> Min </span></span>'
            + '<span class="count"><span class="count-wrap"><span class="digits" id="seconds">%S</span> Sec</span></span>'));
        }
      });
    });
  }

  $(initiateCountdown);
})();
