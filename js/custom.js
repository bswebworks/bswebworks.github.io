$(function(){
	
	// Mobile Menu  bar
	
	$('.menu_mobile').click(function(){
		$('nav.top_menu ul').slideToggle();
		$(this).addClass('open_menu');
	});
	
	
	
	
/*Testimonial*/
	play = function(){
      myInterval =  setInterval(function(){
        var getNo = $(".outer_wrap > div.active").index();
        if(getNo != 3 ){
          $(".outer_wrap > div").eq(getNo + 1).addClass("active").siblings().removeClass("active");
          $(".outer_wrap").animate({left:"-" + (getNo + 1) *100 +"%" },1000);
          $(".bullets > div").eq(getNo + 1).addClass("active").siblings().removeClass("active");
        }
        else{
          $(".outer_wrap > div:first").addClass("active").siblings().removeClass("active");
          $(".outer_wrap").animate({left:"0"},1000); 
          $(".bullets > div:first").addClass("active").siblings().removeClass("active"); 
        }
      },9000)  
    }
  clickedd =true;
 $(document).on("click" , ".indicator" , function() {
  if(clickedd){
         clearInterval(myInterval);
   clickedd = false;
   var getInd = $(this).index();
   $(".outer_wrap").animate({left: "-" + getInd * "100" + "%" },1000);
   $(".outer_wrap > div").eq(getInd).addClass("active").siblings().removeClass("active");
   startSlider();
   $(this).addClass("active").siblings().removeClass("active");
   
  }
    });
 
 startSlider = function(){setTimeout(function(){
  play();
  clickedd =true;
 },1000)};

   play();
   $(function () {
        $(".testi-bullets").click(function () {
            $(this).addClass("active").siblings(".testi-bullets").removeClass("active");
            $(".outer_wrap").stop().animate({ left: "-" + $(this).index() * 100 + "%" })
        });

    });

	try{
	// Porfolio change js
	
		  var filterList = {
			  init: function () {
				  // MixItUp plugin

				  $('#portfoliolist').mixItUp({
					  selectors: {
						  target: '.portfolio',
						  filter: '.filter'
					  },
					  load: {
						  filter: '.dat, .health, .ecom, .r-state, .news, .fin, .erp, .auto, .iot'
					  }
				  });
			  }
		  };

		  // Run the show!
		  filterList.init();
	
	
	$('#filters li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	var wh = $(window).height();
	$('.portfolio_detail').css({height : wh});
	}
	catch(err){
		
	}
	//Home top banner  
	
	var createSpan ="";
		//	$('.banner_slider').css({"height" : $('.top_slide img').outerHeight() });
			var fadeInSlide = function(){
				slideInt = setInterval(function(){ 
					var getcontrollerIndex = $('.controller_bullet span.active').index();
					var controllerLastIndex = $('.controller_bullet span').length - 1;
					var getIndex = $('.top_slide.active').index();
					var lastIndex = $('.top_slide').length - 1;
					
					$('.top_slide').eq(getIndex + 1).addClass('active').siblings().removeClass('active');
					$('.controller_bullet span').eq(getcontrollerIndex + 1).addClass('active').siblings().removeClass('active');
					
					if(getIndex == lastIndex){
						$('.top_slide:first').addClass('active').siblings().removeClass('active');
					}
					if(getcontrollerIndex == controllerLastIndex){
						$('.controller_bullet span:first').addClass('active').siblings().removeClass('active');
					}
									  
				}, 10000);
			};
			
			fadeInSlide();
			var slideGetIndex = $('.top_slide.active').index();
			function leftFade(){
				clearInterval(slideInt);
				var slideGetIndex = $('.top_slide.active').index();
				var getcontrollerIndex = $('.controller_bullet span.active').index();
				$('.top_slide').eq(slideGetIndex - 1).addClass('active').siblings().removeClass('active');
				$('.controller_bullet span.active').prev().addClass('active').siblings().removeClass('active');
				if(slideGetIndex == 0){
					$('.controller_bullet span:last').addClass('active').siblings().removeClass('active');
				}
				setTimeout(function(){
					clearInterval(slideInt);
					fadeInSlide();
				},500)
			}
	
			function rightFade(){
				clearInterval(slideInt);
				var slideGetIndex = $('.top_slide.active').index();
				$('.top_slide').eq(slideGetIndex + 1).addClass('active').siblings().removeClass('active');
				$('.controller_bullet span.active').next().addClass('active').siblings().removeClass('active');
				var controllerLastIndex = $('.controller_bullet span').length - 1;
				if(slideGetIndex == controllerLastIndex){
					$('.top_slide:first').addClass('active').siblings().removeClass('active');
					$('.controller_bullet span:first').addClass('active').siblings().removeClass('active');
				}
				setTimeout(function(){
					clearInterval(slideInt);
					fadeInSlide();
				},500)
			}
			
			$('.right_slide').click(function(){
				rightFade();
			});
			
			$('.left_slide').click(function(){
				leftFade();
			});
			
			
			for (var i = 0; i <= $('.top_slide').length - 1 ; ++i){
				createSpan += "<span>" + i + "</span>" ;
	     	}
			$('.controller_bullet').append(createSpan);
			$('.controller_bullet span:first').addClass('active');
			$('.controller_bullet span').click(function(){
				var controllerIndex = $(this).index();
				$('.top_slide').eq(controllerIndex).addClass('active').siblings().removeClass('active');
				$(this).addClass('active').siblings().removeClass('active');
				setTimeout(function(){
					clearInterval(slideInt);
					fadeInSlide();
				},500)
				
			});
	
	});

	


