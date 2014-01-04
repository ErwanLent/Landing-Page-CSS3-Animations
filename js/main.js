/**
 * Erwan Lent
 * 
 * Created: 01/01/2014
 * Website: http://erwanlent.com/
 * Bitbucket: https://bitbucket.org/elent
 * Email: erwanlent@gmail.com
 * Description: A creative landing page for erwanlent.com
 * 
 */

$( document ).ready(function() {

	// Change cat's animation form walking to sitting on completion of bed movement
	var transitionPrefixes = 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd';
	$('.cat-bed').one(transitionPrefixes, function() {

    	$('.lazy-cat').removeClass('walking');
		$('.lazy-cat').addClass('sitting');

		setTimeout(function() {
			// Add flying-in css transitions
			var animatedContent = [$('#header'), $('.message'), $('footer'), $('.oval-thought')];

			// Associate a transition with each selector
			var contentAnimationTypes = new Object();
			contentAnimationTypes['#header'] = 'fadeInUpBig';
			contentAnimationTypes['.message'] = 'slideInRight';
			contentAnimationTypes['footer'] = 'slideInUp';
			contentAnimationTypes['.oval-thought'] = 'fadeInDownBig';

			// Make selectors visible and add its associated transition class
			for (var index = 0; index <= animatedContent.length - 1; index++) {
				var contentSelector = animatedContent[index];

				if (contentSelector.selector == '.oval-thought') {
					setTimeout(function() {
						contentSelector.addClass('animated ' + contentAnimationTypes[contentSelector.selector]);
						contentSelector.removeClass('hidden');
					}, 1500);
				}
				else{
					contentSelector.addClass('animated ' + contentAnimationTypes[contentSelector.selector]);
					contentSelector.removeClass('hidden');
				}
			};
		}, 800);
  });
});