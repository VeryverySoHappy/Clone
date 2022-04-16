// main slider start
var num=1;
$(document).ready(function(){
  $('.slider_list li:gt(0)').hide();
  $('.btn_left').on('click',function(e){
    e.preventDefault();
    num--;
    if(num<1){
      num=13
    }
    move(num)
  })
  $('.btn_right').on('click',function(e){
    e.preventDefault();
    num++
    if(num>13){
      num=1
    }
    move(num)
  })

  $('.btn_stop').on('click',function(e){
    e.preventDefault()
    clearInterval(popupset)
    $(this).css({
      'display':'none'
    })
    $('.btn_play').css({
      'display':'inline-block'
    })
  })
  $('.btn_play').on('click',function(e){
    e.preventDefault()
    popupset=setInterval(function(){
      set()
    },5000)
    $(this).css({
      'display':'none'
    })
    $('.btn_stop').css({
      'display':'inline-block'
    })
  })

  var popupset = setInterval(function(){
    set()
  },5000)
})

function move(num){
  $('.count').text(num);
  $('.slider_list li').hide();
  $('.slider_list li:eq('+(num-1)+')').show();
}
function set(){
  $('.btn_right').trigger('click')
}
// main slider end

// sliderList start
var sliderWidth=300;
function auto (dis){
  if(dis=='before'){
    $('.sliderList').prepend($('.sliderList li:last'));
    $('.sliderList').css('left','-'+sliderWidth+'px');
    $('.sliderList').animate({
      left:0
    },1000)
  }else{
    $('.sliderList').animate({
      left:'-'+sliderWidth+'px'
    },1000,function(){
      $('.sliderList').append($('.sliderList li:first'));
      $('.sliderList').css('left','0px')
    })
  }
}

function cycleMenu(){
  $('.beforeBtn').on('click',function(e){
    e.preventDefault();
    clearInterval(sid);
    sid=setInterval(auto,5000,'next')
    if($('.playBtn').hasClass('on')==true){
      $('playBtn').css('display','none');
      $('.stopBtn').css('display','inline-block')
    }
  })

  $('.playBtn').on('click', function(e){
    e.preventDefault();
    clearInterval(sid);
    sid=setInterval(auto,5000,'next');
    $(this).css('display','none');
    $('.stopBtn').css('display','inline-block');
  })

  $('.stopBtn').on('click', function(e){
    e.preventDefault();
    clearInterval(sid);
    $(this).css('display','none');
    $('.playBtn').css('display','inline-block')
    $('.playBtn').addClass('on')
  })

  $('.afterBtn').on('click', function(e){
    e.preventDefault();
    clearInterval(sid);
    sid=setInterval(auto,5000,'before')
    if($('.playBtn').hasClass('on')==true){
      $('.playBtn').css('display','none');
      $('.playBtn').css('display','inline-block')
    }
  })

  sid = setInterval(auto,5000,'next')
}
$(document).ready(function(){
  cycleMenu();
})
// sliderList end