function redirectOnlineCajazeiras(){

    $.ajax({
      url:"www.iescolaronline.com.br/",
      method: 'GET',
      success: function(data){
        console.log(data)
      }
    });

};

function redirectOnlineBayeux(){
  window.location.replace("http://www.educabayeux.com.br/");
};

function redirectOnlineSantaHelena(){
  window.location.replace("http://www.educasantahelena.com.br/");
};
