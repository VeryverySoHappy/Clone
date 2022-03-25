$(document).ready(function(){
  $('.banner a:gt(0)').hide();
  $('.list a').on('click',function(e){
    e.preventDefault();
    $('.list a.on').removeClass('on');
    var num =$(this).parent().index();
    $('.banner a').hide();
    $(this).addClass('on')
    $('.banner a:eq('+num+')').show();
  })

  var number=0;
  function myset(){
    var currentNum=$('.list a.on').parent().index();
    number=currentNum+1;
    if(number>$('.list a').length-1){
      number=0
    }
    $('.list a.on').removeClass('on');
    $('.banner a').hide();
    $('.list li:eq('+number+') > a').addClass('on')
    $('.banner a:eq('+number+')').show();
  }
  var st=setInterval(myset,3000)
  $('.stop').on('click',function(e){
    e.preventDefault()
    clearInterval(st)
  })
  $('.play').on('click',function(e){
    e.preventDefault()
    clearInterval(st)
    st = setInterval(myset,3000)
  })
})
