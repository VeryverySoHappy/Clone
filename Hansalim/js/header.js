// deliveryPop start
$(document).ready(function(){
  $('.deliveryBtn').on('click',function(e){
    e.preventDefault();
    $('body').append('<div id="shadow"></div>')
    $('#shadow').css({
      width:'100%',
      height:'100%',
      position:'fixed',
      top:'0',
      left:'0',
      background:'rgba(0,0,0,0.3)'
    })
    $('#shadow').on('click',function(e){
      e.preventDefault();
      $('#closeBtn').trigger('click')
    })
    $('#deliveryPop').css({
      position:'fixed',
      top:'50%',
      left:'50%',
      transform: 'translate(-50%,-50%)',
      marginLeft:'-20px'
    })
    $('#deliveryPop').show();
  })
  $('#closeBtn').on('click',function(e){
    e.preventDefault();
    $('#deliveryPop').hide();
    $('#shadow').remove();
  })
})
// deliveryPop end

// information start
$(document).ready(function(){
  $('#information').on('click', function(){
    $('#information_sub').fadeToggle(300)
  })
})
// information end

$(document).ready(function(){
  $('#participate').on('click', function(){
    $('.participate_sub').fadeToggle(300)
  })
})

$(document).ready(function(){
  $('#more').on('click', function(){
    $('.more_sub').fadeToggle(300)
  })
})
// search start
$(document).ready(function(){
  $('#search').on('click', function(){
    $('.search_sub').fadeToggle(300)
  })
})
// search end

$(document).ready(function(){
  $('#allMenu').mouseenter(function(){
    $('#gnb2').show();
  })
  $('#gnb2').on('mouseover', function(){
    $('#gnb3').show();
    $('gnb2').show();
  })
})
