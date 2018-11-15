/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
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
