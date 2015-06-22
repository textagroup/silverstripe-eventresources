;(function($) {
	$.entwine('ss', function($){

		$(".event-resource-calendar").entwine({
			onmatch: function() {
				$(this).fullCalendar({
					header: {
						left: 'prev,next today',
						center: 'title',
						right: 'month,agendaWeek,agendaDay'
					},
					theme: true,
					height: $(this).parent().height(),
					events: $(this).attr("href"),
					windowResize: function() {
						$(this).fullCalendar("option", "height", $(this).parent().height());
					}
				});
			}
		});

	});
})(jQuery);