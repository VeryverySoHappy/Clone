$(document).ready(function(){
  var num = 0;
  $('.prevBtn').on('click',function(e){
    e.preventDefault();
    if($('.searchImg').is(':animated')==false){
      num--
      if(num<0) num=1;
      animate(num)
    }
  })
  $('.nextBtn').on('click', function(e){
    e.preventDefault();
    if($('.searchImg').is(':animated')==false){
      num++
      if(num>1) num =0;
      animate(num)
    }
  })

  function anumate(num){
    $('.searchImg').append($('img:first'))
  }
})