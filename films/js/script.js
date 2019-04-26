$(function() {
	$("#not-watched, #watched").sortable({
		connectWith: "ul",
		placeholder: "placeholder",
		delay: 150
	})
	.disableSelection()
	.dblclick( function(e){
		var item = e.target;
		if (e.currentTarget.id === 'not-watched') {
			//move from all to user
			$(item).fadeOut('fast', function() {
				$(item).appendTo($('#watched')).fadeIn('slow');
			});
		} else {
			//move from user to all
			$(item).fadeOut('fast', function() {
			$(item).appendTo($('#not-watched')).fadeIn('slow');
			});
		}
	});
});
