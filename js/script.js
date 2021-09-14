$(document).ready(function(){

	$('dots__item').on('click', function(e){
		e.preventDefault();
		
		var	item = $(this).closest('.dots__item'),
				pageItem = $('.page'),
				itemPosition = item.data('class');

		pageItem.filter('.page_' + itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');
	});

	var
		screen = 0,
		container = $('.wrapper__body'),
		pages = $('.page'),
		dots = $('.dots__item'),
		inscroll = false;

	$('page:first-child').addClass('active');
	$('.dots__item:first-child').addClass('active');

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
		container.css('top', position);
		setTimeout(function(){
			inscroll = false;
		}, 1000);

	});
});
