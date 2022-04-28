$(document).ready(function(){
      
      
  $('.slider_nav ul li').on({
    click:function(e){
      e.preventDefault();
      var pageNum=$(this).index()
      // 클릭한 버튼의  index()값
      // console.log(pageNum)
      var section =$('section').eq(pageNum)
      // 선택한 요소의 인덱스 번호에 해당하는 요소를 찾음
      // console.log(section)
      var offset=section.offset().top;
      // 선택한 요소의 좌표값
      // 위에서 부터 얼마만큼 떨어져잇냐
      // 첫번째 PORTFOLIO1는 (맨처음 나와서)높이값이 0
      // console.log(offset)
      $('html, body').animate({
        scrollTop:offset
        // 스크롤이 클릭한 높이로 이동
      },600)
      // JQUERY UI 사이트에 있는 효과
      // 이런 튀는 효과보다는 자연스럽게 이동하는 효과를 사용하는게 좋음
    }
  })

  var nav = $('.slider_nav ul li');
  var cont = $('section');
  $(window).scroll(function(){
    var wScroll=$(this).scrollTop();
    // console.log(wScroll)
    for(var i=0; i<cont.length; i++){
      if(wScroll>=cont.eq(i).offset().top){
        // 첫번째 div, 두번째 div, 세번째 div...의 offset().top의 값보다 크거나 같으면
        nav.removeClass('active');
        nav.eq(i).addClass('active');
      }
    }
  })
})