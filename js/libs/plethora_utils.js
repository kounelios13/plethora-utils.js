var _p = _p || {};

/*
 * Convert values: 1, 0, true, false, "1", "0", "true", "false", "TRUE", "FALSE", "True", "False"
 * "ON", "OFF", "On", "Off", negative numbers, positive numbers, to booleans
 */

/* READABLE VERSION 
_p.checkBool = function(val){
	// Check if numeric value is greater than 0
	val = (typeof val !=="number") ? val : (val>0);
	return ({1:1,true:1,on:1,yes:1}[(val+"").toLowerCase()]) ? true : false;
};
*/

_p.checkBool = function(val){
	return ({1:1,true:1,on:1,yes:1}[(((typeof val !=="number")?val:(val>0))+"").toLowerCase()])?true:false;
};

/*** OBJECT EXTEND: By @toddmotto ***/

_p.extend = function( target, source ) {
  var merged = Object.create(target);
  Object.keys(source).map(function (prop) {  prop in merged && (merged[prop] = source[prop]);  });
  return merged;
};

/*
_p.extend = function( target, source ) {
for( var key in source ) {  if( source.hasOwnProperty( key ) ) target[key] = source[key];  }
return target;
}
*/

/*** MULTI SLICE ***/

_p.slice = function(){
	return [].slice.call.apply( [].slice, arguments );
}

/*** DEBUGGING CONSOLE ***/

_p.debugLog = function(){
	themeConfig && themeConfig.debug && console.log.apply( console, arguments );
}

/*** SVG CREATION UTILITY FUNCTION ***/

_p.SVGMold  = function( type, options ){
	var molding = doc.createElementNS('http://www.w3.org/2000/svg', type );
	for (var key in options) options.hasOwnProperty(key) && molding.setAttribute( key, options[key]);
	return molding;
}

/*** COLORED CONSOLE LOG ***/

_p.clog = function( msg ){
  var args          = [].slice.apply(arguments);
  //Check if browser supports CSS console
  //Internet explorer does not support it.
  //Firefox  supports it
  //Safari 5 does not support CSS console
   var supported_browsers=["Chrome","Firefox",];

  navigator.getBrowserName= (function(){
      var ua= navigator.userAgent, tem,
      M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if(/trident/i.test(M[1])){
          tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE '+(tem[1] || '');
      }
      if(M[1]=== 'Chrome'){
          tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
          if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
      }
      M= M[2]? [M[1]/*, M[2]*/]: [navigator.appName/*, navigator.appVersion*/, '-?'];
      if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
      return M.join(' ');
  })(); 
  var current_browser=navigator.getBrowserName;
  var isBrowserSupported = supported_browsers.indexOf(current_browser) != -1 || current_browser.includes("Opera");
  if(isBrowserSupported){
    //Current browser supports what we want to do
    var tag= "clog";
    var currentScript = "";
    if ( document.currentScript ){
      currentScript = document.currentScript.src.split('/');
      currentScript = currentScript[currentScript.length-1].split("?")[0];
      tag = currentScript;
    }

    args.unshift(
      '%c [ %s ]: %c',
      'background: #222; color: #bada55',
      tag,
      'background: #222; color: #2ada45'
    );

    console.log.apply( console, args );
  }
  else{
    //NOTE:Internet explorer does not support console.warning
     console.log("Console CSS is not supported in this browser.");
     console.log.apply( console, args );
  }

}

// USAGE: _p.clog( "Debugging this object", myObject );