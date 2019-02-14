requirejs.config({
	//baseUrl: "modules/scripts",
	paths: {
		"jquery": "https://code.jquery.com/jquery-3.3.1.slim.min",  // !!! Require JS automotically adds .JS
	},
	//If no baseUrl is explicitly set in the configuration, the default value will be the location of 
	//the HTML page that loads require.js. If a data-main attribute is used, that path will become the baseUrl.
	shim: { //if module is not AMD type and need some dependencies then it need to be specified here
	//only use shim config for non-AMD scripts,
    //scripts that do not already call define()
		//"bootstrap": ['jquery']
	},
	config: {
		'modules/scripts/alertHello': {
			value: "True"
		}
	}
});
//define('modules/scripts/alertHello', function(alertHello) {
//	alert()
//} );
requirejs(["modules/scripts/alertHello", "jquery"],function( alertHello, $ ){
	$(document).ready( function () {
		alert("Value from config" + alertHello.someConfig);
		alertHello.sayHelloJquery();
		xhr = new XMLHttpRequest();
		
	})
} );