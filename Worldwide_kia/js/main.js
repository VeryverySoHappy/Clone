$(document).ready(function(){
  $('.story_list li:not(:eq(0)) > .story').hide();

  $('.section03').on({
    mouseenter:function(){
      $('.story').mousemove(function(event){
        var pageCode = event.pageX - $('.story').offset().left;
        if(pageCode>1920){

        }
      })
    }
  })
})