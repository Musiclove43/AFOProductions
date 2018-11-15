(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    
  	// Scripts?
  	$(".team-image").hover(function() {
  		$(".team-image").removeClass("active");
  		$(this).addClass("active");
  		$(".team-card").removeClass("active");
  		$(".team-card.card-"+$(this).attr("data-id")).addClass("active");
  	},function() {
  		// Do nothing on hover-out.. peace out
  	});

  });

})(jQuery, window, document);
