let scrollTop = 0;
    // 처음엔 0으로 설정
    let bar;

    window.onload = function(){
      bar = document.getElementsByClassName('bar')[0];
    }
    window.addEventListener('scroll', function(e){
      scrollTop = document.documentElement.scrollTop;
      console.log('스크롤값:' + scrollTop)
      // 스크롤 아래끝까지 하면 스크롤 세로값 나옴
      /*let per = Math.ceil(scrollTop / document.body.scrollHeight * 100);
      scrollTop이 몇퍼센트 내려와있는지
                           문서의 전체 길이 *100
      그런데 이렇게 하면 노란색 스크롤이 끝까지 안 감         
      */
      let per = Math.ceil(scrollTop / (document.body.scrollHeight - window.outerHeight)*100);
      console.log(per);

      bar.style.width = per + '%';
    }, false)

$(document).ready(function(){
      
      
  $('.slider_nav ul li').on({
    click:function(e){
      e.preventDefault();
      var pageNum=$(this).index()
      var section =$('section').eq(pageNum)
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