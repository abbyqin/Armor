$(function(){
	var navHeight = $(".navbar").height();
	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
		console.log(sTop);
		if(sTop>navHeight){
			$(".navbar").addClass('nav-fixed');
		}else{
			$(".navbar").removeClass('nav-fixed');
		}
	})
})