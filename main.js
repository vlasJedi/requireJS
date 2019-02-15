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
		var xhr = new XMLHttpRequest();
		//xhr.withCredentials = true;
		var request = {
			method: "GET",
			url: "https://my-json-server.typicode.com/vlasJedi/RestAPI", //Same Origin Policy - by default only possible access to prot://domain:port
			asynch: true,
			user: null,
			password: null
		}
		xhr.open(request.method,request.url,request.asynch,request.user,request.password);  // initializates request
		xhr.setRequestHeader("Access-Control-Allow-Origin","file:///C:/requireJS");
		xhr.send(); // is async by default, but can be sync  -- as argument can take next
		//xhr.status; // code
		//xhr.statusText; // text to code
		//xhr.responseText; // response text from server
		//xhr.responseXML; // response in XMl
		//xhr.abort;
		//var query = {
			//fname: "vlas",
			//sname: "dielov"
		//};
		//var URLqueryObj = new URLSearchParams();
		//for( var key in query ) {
			//URLqueryObj.set( key , query[key] );
		//}
		//console.log(URLqueryObj.toString());
		//xhr.send(URLqueryObj);
		xhr.onreadystatechange = function() {
			if (xhr.readyState != 4 ) {
				console.log("Current readyState value is: " + xhr.readyState );
				return;
			}
			console.log("Server status code xhr.status: " + xhr.status + ", server status text: " + xhr.statusText );
			console.log("Response from server xhr.responseText: " + xhr.responseText);
			
		};
		
		
		
		
	})
} );