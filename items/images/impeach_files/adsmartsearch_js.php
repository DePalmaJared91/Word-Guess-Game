








function build_search_url(input_field) {

	var url = $('base').attr('href') + 'index.php?route=product/search';
	 
	var search = input_field.val();

	if (search) {
		url += '&search=' + encodeURIComponent(search) + '&sort=relevance&order=DESC';
		
		location = url;
	}
}

$(document).ready(function() {

			


		
	// 1)
	$('#top-button-search').unbind('click'); 
	
	// 2)	
		$('#top-button-search').bind('click').on('click', function(e) {	 	
	
	// 3)		
		$(this).unbind('click'); 
		
		var input_field = $('input[name="search"]');
		build_search_url(input_field);
	});
});
	
	