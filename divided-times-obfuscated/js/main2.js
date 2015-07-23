$(document).ready(function () {

	$('#primary-nav li').click(function(e) {
		e.preventDefault();

		//this handles slidedown

			//if (slide-down is not open -- use '!' for opposite)
			
			if(!$('#slide-down').hasClass('open')) {

				//show slide-down

				//slide-down.addClass('open')

				//active class for li
			}

			//else if(slide-down is open and link has active class) -- use && for 'and'

			else if($('#slide-down').hasClass('open' && $(this).hasClass('active')) {

				//hide slide-down

				//slide-down.removeClass('open')

				//active class for li
			}

			//else (clicked on a non-active link while slide-down is open)

			else {

			}

		//this handles primary nav active

		//handles hide  / show of drop sections

		var section = $(this).children('a').attr('href');

		//section.show

	});

});