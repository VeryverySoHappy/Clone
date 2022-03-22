// top_btn 시작
$(document).ready(function(){
  $('.close').on('click',function(e){
    e.preventDefault();
    $(this).css({'display': 'none'})
    $('.top_btnImg').css({'display':'none'})
  })
})
// top_btn 끝

// gnb 시작
$(document).ready(function(){
  var navOffset=$('.gnb').offset().top;
  $(window).scroll(function(){
    var scrollPos=$(window).scrollTop();
    if(scrollPos>=navOffset){
      $('.gnb').addClass('fixed')
      $('.gnb').css({
        'background':'#fff',
        'border-bottom':'1px solid #ddd'
      });
    }else{
      $('.gnb').removeClass('fixed');
      $('.gnb').css({
        'background':'#fff',
        'border-bottom':'none'
      });
    }
  })
})
// gnb 끝

// 더보기 서브메뉴 시작
var timeout;
$(document).ready(function(){
  $('#subMenu').on('click', function(e){
    e.preventDefault();
    $('.sub_menu').fadeToggle()
  })
})
// 더보기 서브메뉴 끝