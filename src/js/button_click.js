import $ from 'jquery'

$(function() {
  
  let $button =  $('.button'),
      $banner = $('.logo-banner'),
      colors = ['blue', 'red', 'green'],
      ifNotColor = (color) => colors.filter(c => c !== color);

  function setBannerColor(btn){
    $banner.addClass(btn.data('color'));
    ifNotColor(btn.data('color')).forEach( c => $banner.removeClass(c) )
  }

  $button.on('mousedown',  function(){
    setBannerColor($(this));
  })

});