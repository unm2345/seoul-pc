$(function(){
  // visual slick
  var $visualSlider = $(".visual_slider");
  $visualSlider.each(function(idx, ele){   
    var $tab = $(ele).find(".visual_tab");
    var $panel = $(ele).find(".slide-wrap");
    var $prev = $(ele).find(".prev"),
        $next = $(ele).find(".next"),
        $start = $(ele).find(".start"),
        $pause = $(ele).find(".pause");

    $tab.click(function(){
      $(ele).siblings().removeClass("active");
      $(ele).addClass("active");

      $(ele).siblings().find(".slide-wrap").slick("slickPause");
      $panel.slick('setPosition');
      $panel.slick("slickPlay");
    })

    $panel.slick({
      dots: true,
      arrows: false,
      autoplay: true,
      appendDots: $(ele).find(".pagination"),
      customPaging: function (slider, i) {
        return (i+1) + '/' + slider.slideCount;
      },
      draggable: false,
      useAutoplayToggleButton: false
    });
    if(!$(ele).hasClass("active")){
      $panel.slick("slickPause");
    }
    
    $prev.click(function(){
      $panel.slick("slickPrev");
    })
  
    $next.click(function(){
      $panel.slick("slickNext");
    })
  
    $start.click(function(){
      $(this).hide(0);
      $pause.show(0);
      $panel.slick("slickPlay");
    })
  
    $pause.click(function(){
      $(this).hide(0);
      $start.show(0);
      $panel.slick("slickPause");      
    })
  })
  
  // banner slick
  var $bannerSlider = $(".banner_slider");
  $bannerSlider.each(function(idx, ele){  
    var $panel = $(ele).find(".slide-wrap");
    var $prev = $(ele).find(".prev"),
        $next = $(ele).find(".next"),
        $start = $(ele).find(".start"),
        $pause = $(ele).find(".pause");

    $panel.slick({
      dots: true,
      arrows: false,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      appendDots: $(ele).find(".pagination"),
      customPaging: function (slider, i) {
        return (i+1) + '/' + (slider.slideCount / 3);
      },
      draggable: false,
      useAutoplayToggleButton: false
    });
    
    $prev.click(function(){
      $panel.slick("slickPrev");
    })
  
    $next.click(function(){
      $panel.slick("slickNext");
    })
  
    $start.click(function(){
      $(this).hide(0);
      $pause.show(0);
      $panel.slick("slickPlay");
    })
  
    $pause.click(function(){
      $(this).hide(0);
      $start.show(0);
      $panel.slick("slickPause");      
    })    
  })  

  // site
  $(".site-tab").click(function(){
    $(".site-tab").not($(this)).removeClass("active");
    $(".site-tab").not($(this)).siblings(".site-panel").slideUp(300);
    
    $(this).toggleClass("active");
    $(this).siblings(".site-panel").slideToggle(300);
  })

  $(".site-panel_link.last").keydown(function(e){    
    if(e.keyCode == 9 && !e.shiftKey){
      var $target = $(this).parents(".site-panel");
      $target.slideUp(300)
    }    
  })

  // button-top
  var clickable = true;
  $(window).scroll(function(){    
    if(0 < $(this).scrollTop() && clickable){      
      clickable = false;
      $(".button-top").stop().animate({
        opacity: 1,
        bottom: 98
      })
    } else if(0 == $(this).scrollTop() && !clickable){
      clickable = true;
      $(".button-top").stop().animate({
        opacity: 0,
        bottom: 0
      })
    }
  })

  $(".button-top").click(function(){
    $("html, body").stop().animate({
      scrollTop: 0
    })
  })
})