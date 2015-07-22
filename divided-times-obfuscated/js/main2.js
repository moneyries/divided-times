$(document).ready(function () {

	$('#primary-nav li').click(function(e) {
		e.preventDefault();

		//this handles slidedown

		$(this).addClass('active');
		$(this).siblings().removeClass('active')

			//if (slide-down is not open)

			//else if(slide-down is open and link has active class)

			//else (clicked on a non-active link while slide-down is open)

		//this handles primary nav active

		//handles hide  / show of drop sections

		var section = $(this).children('a').attr('href');

		//section.show

	});

});