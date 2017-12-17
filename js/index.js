var navHeight = $(".navbar").height();
$(function(){
	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
		if(sTop>navHeight){
			$(".navbar").addClass('nav-fixed');
		}else{
			$(".navbar").removeClass('nav-fixed');
		}
	});
	$(".navbar-header").on("click",function(){
		var isOpen = $(".navbar-collapse").hasClass('in');
		if(!isOpen){
			$(".navbar-header").css({
				"background-color": '#001033'			
			});
		}else{
			$(".navbar-header").css({
				"background-color": 'transparent'			
			});
		}
	})
})
