;(function($){
	
	var WPSP = {
		init: function(){

			document.addEventListener('ready turbolinks:load', function(event) {
			  $.onmount();
			});

			document.addEventListener('turbolinks:before-cache', function(event) {
			  $.onmount.teardown();
			});

			document.addEventListener('turbolinks:before-visit', function(event) {

				if( event.data.url.indexOf( WPSP_VARS.admin_url ) !== -1 ){
			  		event.preventDefault();
			  		alert('admin');
			  		document.location = event.data.url;
			  	}
			});
		}
	};

	WPSP.init();

})(jQuery);