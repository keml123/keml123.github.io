(function ($) {
	$(document).ready(function() {

    $('a.close, a.no-but').click(function(){
      $('.simplemodal-close').click();
    });
		$(".top_nav li").click(function () {
			var array_sections = ["body,html", "#description", "#question", "#delivery", "#garant", "#footer"];
			var index = $(this).index();
			if (index == ($(".top_nav li").length - 1)) index = index - 1;
			$('html,body').animate({scrollTop: $(array_sections[index]).offset().top - 40}, 587);
			return false;
		});
		$('.btn-slide').click(function(){
			$('#panel').toggleClass('overflow');
			if($('#panel').hasClass('overflow')){
				$('#panel-next').css({display:'block'});
			} else {
				$('#panel-next').css({display:'none'});
			}
			$(this).toggleClass('active');
			return false;
		});
		$('#timer2, #timer').each(function(){
			var dmin = 27;
			var dsec = 60;
			var out = "<div class='days'>0<span>Дни</span></div>" + "<div class='hours'>0<span>Часы</span></div>" + "<div class='mins'>"+dmin+"<span>Минуты</span></div>" + "<div class='secs'>" + dsec + "<span>Секунды</span></div>";
			$('#timer2').html(out);
			$('#timer').html(out);
			var time1 = setInterval(function(){
				dsec = dsec-1;
				if(dsec < 0) dsec = 59;
				out = "<div class='days'>0<span>Дни</span></div>" + "<div class='hours'>0<span>Часы</span></div>" + "<div class='mins'>"+dmin+"<span>Минуты</span></div>" + "<div class='secs'>" + dsec + "<span>Секунды</span></div>";
				$('#timer2').html(out);
				$('#timer').html(out);
				if(dmin == 0 && dsec == 0){
					clearInterval(time1);
					clearInterval(time1);
				}
			}, 1000);
			var time2 = setInterval(function(){
				dmin = dmin-1;
				if(dmin < 0) dmin = 0;
				out = "<div class='days'>0<span>Дни</span></div>" + "<div class='hours'>0<span>Часы</span></div>" + "<div class='mins'>"+dmin+"<span>Минуты</span></div>" + "<div class='secs'>" + dsec + "<span>Секунды</span></div>";
				$('#timer2').html(out);
				$('#timer').html(out);
			}, 60000);
		});
	});
})(jQuery);