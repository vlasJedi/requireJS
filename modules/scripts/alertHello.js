define(['modules/scripts/returnName','module'],function(returnName,module ) {
	return {
		someConfig: module.config().value,
		sayHello: function() {
			console.log("hello" + returnName.name() );
		},
		sayHelloJquery: function() {
			$('body').text("New next from Jquery");
		}
	};
});