$(function() {

// menu toggle
	$('#toggle-mnu').click(function(){
		
		if($(this).toggleClass('on')){
			
			$('#topmenu-xs').slideToggle(500);
		}

		return false;
	});

	$('.button-form').click(function(){

		$(".forms").slideToggle(500, function(){
			
			if($('.button-form').text()=="Show"){
				$('.button-form').text("Hide");
			}
			else{
				$('.button-form').text("Show");
			}
				
	})
		
	});
	

	// fixed menu when scroll page
$(document).scroll(function() {
	  var documentScrollTop = $(document).scrollTop();
	  if (documentScrollTop > $('.start').height()) {
	    $('#top-line').addClass('fixedattop');
	    var shiftContent = $('#top-line').height();
	    $('#home').css('padding-top', shiftContent + 'px');
	  }
	  else if ($('#top-line').hasClass('fixedattop')) {
	    $('#top-line').removeClass('fixedattop');
	    $('#home').css('padding-top', '0px');
	  }
	});

//slowly scroll 
$(document).ready(function(){
	
	$("#topmenu, #arrow, #logo").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
			
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);


	});


	$objWindow = $(window);
	$('header[data-type="background"], section[data-type="background"]').each(function(){
	var $bgObj = $(this);
	$(window).scroll(function() {
	var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
	var coords = '100% '+ yPos + 'px';
	$bgObj.css({ backgroundPosition: coords });
	});
	});

	

});



//carousel
	$(".slider").owlCarousel({
		items:1,
    	loop:true,
    	margin:0,
    	autoplay:true,
    	autoplayTimeout:5000,
    	autoplayHoverPause:true,
		smartSpeed:3000  		
    });

   	//подсветка меню при скролле
	    $(window).scroll(function(){
	        $("section").each(function () {
	          var windowTop = $(window).scrollTop();
	          var sectionTop = $(this).offset().top;
	          var windovView = document.documentElement.clientHeight;

	          var sectionId = $(this).attr('id');
	          
	            if (windowTop > sectionTop - (windovView*0.51)){
	                $('#topmenu').find('li a').removeClass('active');
	                $('#topmenu').find('li a[href="#'+sectionId+'"]').addClass('active');
	               
	            }
	            else{
	                $('#topmenu').find('li a[href="#'+sectionId+'"]').removeClass('active');
	                
	            };
	        });
		});
	



});
