jQuery(function ($) {
  var rndNum;

  if ($('body section.sign-up, body section.login').length) {
    rndNum = Math.floor((Math.random() * 2) + 1);
    $('body').addClass('massive-background-' + rndNum).hide().fadeIn(1000);
  }
});
