$(document).ready(function(){ 
	var touch 	= $('#touch-menu');
	var menu 	= $('.menu_1');
    var touch_2 = $('#touch-menu_2');
	var menu_2 	= $('.menu_2');
    var touch_3 = $('#touch-menu_3');
	var menu_3 	= $('.menu_3');
    var touch_4 = $('#touch-menu_4');
	var menu_4 	= $('.menu_4');
    
    
	$(touch).on('click', function(e) {
		e.preventDefault();
        menu_2.slideUp(300);
        menu_3.slideUp(300);
        menu_4.slideUp(300);
		menu.slideToggle(300);
	});
	
	$(touch_2).on('click', function(e) {
		e.preventDefault();
        menu.slideUp(300);
        menu_3.slideUp(300);
        menu_4.slideUp(300);
		menu_2.slideToggle();
	});
    
    $(touch_3).on('click', function(e) {
		e.preventDefault();
        menu.slideUp(300);
        menu_2.slideUp(300);
        menu_4.slideUp(300);
		menu_3.slideToggle();
	});
    
    $(touch_4).on('click', function(e) {
		e.preventDefault();
        menu.slideUp(300);
        menu_2.slideUp(300);
        menu_3.slideUp(300);
		menu_4.slideToggle();
	});
    
    $(".active_menu a").click(function(e) {
        e.preventDefault();
        $(".active_menu a").removeClass('active');
        $(this).addClass('active');
})
	
});