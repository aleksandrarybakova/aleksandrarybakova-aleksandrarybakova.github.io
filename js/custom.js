(function($) {
	$('.readmore-block').readmore({
		maxHeight: 140,
		moreLink: '<a href="#">еще</a>',
		lessLink: '<a href="#">скрыть</a>'
	});
	$(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('header-fixed');
        }
        else {
            $('.header').removeClass('header-fixed');
        }
    });
	$("input").change(function() {
  if ($(this).val().trim().length) {
    $(this).addClass("ui-placeholder");
  } else {
    $(this).removeClass("ui-placeholder");
  }
})
	$(document).ready(function() {
		  $('select').niceSelect();
		});
})(jQuery);


