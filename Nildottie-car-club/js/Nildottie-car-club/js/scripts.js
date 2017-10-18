$(document).ready(function (){

console.log('Eat Shit');

//Sticky nav
$('#intro-para').waypoint(function (direction) {
        if (direction == "down"){
            $('.nav-bar').addClass('sticky-nav');

        }
	
        else {
				
            $('.nav-bar').removeClass('sticky-nav');
			
        }
    }, 
    {
  offset: '60px;'
    });





/* Mobile Navigation */

      
    $('.mobile-nav-icon').click(function(){
        var nav = $('#nav');
        var icon = $('.mobile-nav-icon');
    
        nav.slideToggle(200);
/*        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');

        };*/
    });
    
	
});