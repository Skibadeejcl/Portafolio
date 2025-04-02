jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
});

function filterImages(category) {
	let rows = document.querySelectorAll('.bloque');
	if (category === 'all') {
		rows.forEach(row => row.classList.remove('hidden'));
	} else {
		rows.forEach(row => {
			row.classList.add('hidden');
			if (row.classList.contains(category)) {
				row.classList.remove('hidden');
			}
		});
	}
}
filterImages('all'); // Mostrar todas las imágenes por defecto