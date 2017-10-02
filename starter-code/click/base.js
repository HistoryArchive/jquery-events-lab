console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$('span').on('click', function count(num){
		var itemClick = $(this).text() + " at " + Date.now() ;
		$("ul").append("<li>" + itemClick + "</li>")
	})

})
