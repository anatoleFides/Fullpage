$(document).ready(function(){

	$('dots__link').on('click', function(e){
		e.preventDefault();
		
		var
			item = $(this).closest('.dots__link'),
			pageItem = $('.page'),
			itemPosition = item.index();
			pageItem.eq(itemPosition)
			.add()
			.addClass('active')
			.siblings()
			.removeClass('active');
	});

	var
		screen = 0,
		container = $('.wrapper__body'),
		pages = $('.page'),
		dots = $('.dots__link'),
		inscroll = false;

	$('page:first-child').addClass('active');
	$('.dots__link:first-child').addClass('active');

	$('body').on('mousewheel', function(event){
		
		var
			activePage = pages.filter('.active');

		if (!inscroll) {
			inscroll = true;
			if (event.deltaY > 0){
				
				if (activePage.prev().length){
					screen--;
				}
			} else {
				if (activePage.next().length){
					screen++;
				}
				
			}
		}
		var
			position = (-screen*100) + '%';
			
		pages.eq(screen).addClass('active').siblings().removeClass('active');
		dots.eq(screen).addClass('active').siblings().removeClass('active');
//		dots.eq(showSection).addClass('active').siblings().removeClass('active');
		container.css('top', position);
		setTimeout(function(){
			inscroll = false;
		}, 500);

	});
});