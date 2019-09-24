// jshint esversion:6

$(window).scroll(function(){
 let position= $(this).scrollTop();
  console.log(position);

  if(position>=1000){
    $("#back-to-top").addClass("scrollTop");
  }else{
    $("#back-to-top").removeClass("scrollTop");
  }
});

$(window).scroll(function(){
 let position= $(this).scrollTop();
  console.log(position);

  if(position<=660){
    $("#nav-bar").addClass("navbar-show");
  }else{
    $("#nav-bar").removeClass("navbar-show");
  }
});
