$(function() {
    
	//ANIMATIONS
    new WOW().init();
   
    //VIDEO
    $("#video").fitVids({ customSelector: "iframe[src^='http://vimeo.com/89527215'], iframe[src^='http://vimeo.com/89527215']"});
   
   //MILESTONE
    $('#infinity').data('countToOptions', {
        onComplete: function (value) {
            count.call(this, {
                from: value,
                to: value + 1
            });
        }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
	 
});

//SHARE BUTTONS
$('.social-likes').socialLikes({
    url: 'http://www.themeforest.net',
    counters: true,
    singleTitle: 'Share it!'
});

$(window).load(function(){
	
	//PARALLAX BACKGROUND
	$(window).stellar({
	   horizontalScrolling: false,
    });
    
    //PRELOADER
    $('.preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow-x':'hidden'});
	
});
	
    
/** Register Form Javascript Ajax Actions **/

var register = function( form ){

	"use scrict";

	var name		= $("."+form+" .name").val();
	var surname		= $("."+form+" .surname").val();
	var email		= $("."+form+" .email").val();
	var phone       = $("."+form+" .phone_number").val();
	var course		= $("."+form+" .course").val();
	
	if ( name == "" ) { alert("Name area is empty! Please fill!"); $("."+form+" .name").focus(); }
	else if ( surname == "" ) { alert("Surname area is empty! Please fill!"); $("."+form+" .surname").focus(); }
	else if ( email == "" ) { alert("Email area is empty! Please fill!"); $("."+form+" .email").focus(); }
	else if ( phone == "" ) { alert("Phone area is empty! Please fill!"); $("."+form+" .phone_number").focus(); }
	else if ( course == "" ) { alert("Course area isn't selected! Please select!"); $("."+form+" .course").focus(); }
	else {
	
		$.post("register.php", { name:name, surname:surname, email:email, phone:phone, course:course }, function( response ){
			if ( response == "SUCCESS" ){
				$("."+form+" .message").html("<span style='color:green'>Your form has been sent.</span>");
            } else if ( response == "EMAIL-ERROR" ){
                $("."+form+" .message").html("<span style='color:red'>Email address isn't correct!</span>");
			} else {
				$("."+form+" .message").html("<span style='color:red'>Your form hasn't been sent.</span>");
			}
		});
	
	}
	
};


