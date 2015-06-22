;(function($) {

	$.entwine('ss', function($){
		$("#Form_ItemAddForm_Type").entwine({
			onmatch: function() {
				$(this).bind('change', function() {
					if ( $(this).val() == "Limited" ) {
						$("#Quantity").show();
					} else {
						$("#Quantity").hide();
					}
				}).trigger('change');
				this._super();
			}
		});
		$("#Form_ItemEditForm_Type").entwine({
			onmatch: function() {
				$(this).bind('change', function() {
					if ( $(this).val() == "Limited" ) {
						$("#Quantity").show();
					} else {
						$("#Quantity").hide();
					}
				}).trigger('change');
				this._super();
			}
		});
		$('li[aria-controls="Root_Bookings"] a').entwine({
			onclick: function() {
				$('#Root_Bookings .event-resource-calendar')
				.fullCalendar("render");
				$('#Root_Bookings .event-resource-calendar')
				.fullCalendar(
					"option", 
					"height", 
					$("#Root_Bookings").height()
				);
				this._super();
			}
		});
	});

})(jQuery);