$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.artistname.search(myExp) != -1) ||
			(val.album.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>'+ val.artistname +'</h2>';
				output += '<img src="images/'+ val.album +'_tn.jpg" alt="'+ val.artistname +'" />';
				output += '<p>'+ val.album +'</p>';
				output += '<p>'+ val.year +'</p>';
				output += '<p>'+ val.label +'</p>';
				output += '<p>'+ val.description +'</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	});
});