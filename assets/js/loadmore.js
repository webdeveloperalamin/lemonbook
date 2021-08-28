jQuery(function($){
	$('#loadMore').click(function(){
 
		var button = $(this),
		    data = {
			'action': 'loadmore',
			'query': lemonbook_loadmore_params.posts,
			'page' : lemonbook_loadmore_params.current_page
		};
 
		$.ajax({
			url : lemonbook_loadmore_params.ajaxurl, 
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				button.text('Loading...'); 
			},
			success : function( data ){
				if( data ) { 
					button.text( 'Load More' ).prev().before(data); 
					lemonbook_loadmore_params.current_page++;
 
					if ( lemonbook_loadmore_params.current_page == lemonbook_loadmore_params.max_page ) 
						button.remove(); 
				} else {
					button.remove();
				}
			}
		});
	});
});