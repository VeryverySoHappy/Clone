// providePop start
$(document).ready(function(){
  $('.provideBtn').on('click',function(e){
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
    $('#providePop').css({
      position:'fixed',
      top:'50%',
      left:'50%',
      transform: 'translate(-50%,-50%)',
      marginLeft:'-20px'
    })
    $('#providePop').show();
  })
  $('#closeBtn').on('click',function(e){
    e.preventDefault();
    $('#providePop').hide();
    $('#shadow').remove();
  })
})
// providePop end

// information start
$(document).ready(function(){
  $('#information').on('click', function(){
    $('#information_sub').fadeToggle(300)
  })
})
// information end

$(document).ready(function(){
  $('#participate').on('click', function(){
    $('#participate_sub').fadeToggle(300)
  })
})