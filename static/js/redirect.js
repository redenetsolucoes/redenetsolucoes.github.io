$(document).ready(function() {

  $('#loader').fadeOut(200);
});

function redirectOnlineCajazeiras(){
  window.location.replace("http://www.iescolaronline.com.br");
  showLoading();
};

function redirectOnlineBayeux(){
  window.location.replace("http://www.educabayeux.com.br/");
  showLoading();
};

function redirectOnlineSantaHelena(){
  window.location.replace("http://www.educasantahelena.com.br/");
  showLoading();
};


function showLoading(){
  $('#loader').show();
}
