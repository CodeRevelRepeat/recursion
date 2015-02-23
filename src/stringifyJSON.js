// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

//Function to deal with converting an array to JSON string:

	var stringifyArray = function(array){

		var result = [];

		for(var i=0; i< array.length; i++){
	
			var value = array[i];

			if(typeof value === 'undefined' || typeof value === 'function' || typeof value === 'symbol'){
				result.push('null');

				}

			else {
				result.push(stringifyJSON(value));
				}

			}
		
			return result; 
	};


//Function to deal with converting the keys and properties of inner object to JSON string:

	var stringifyObject = function(innerObj){

		var stringObj = '{';


		for(var key in innerObj){
				if(typeof key === 'number' || typeof key === 'string' && 
					typeof innerObj[key] === 'number' || typeof innerObj[key] === 'string' || typeof innerObj[key] === 'boolean'
					|| innerObj[key] === null || typeof innerObj[key] === 'object'){


				stringObj = stringObj + stringifyJSON(key) + ":" + stringifyJSON(innerObj[key]) + ",";
				}
			}

			//To trim comma off of last property:
			if(stringObj.length >= 2){
					stringObj = stringObj.substr(0, stringObj.length - 1);
				}

			stringObj = stringObj + '}'

		return stringObj;

	};
				

	if(obj === null){
		return "null";
		}


	if(typeof obj === 'number'){
			return String(obj);
		}

	if(typeof obj === 'string'){
			return ('"' + obj + '"');
		}

	if(typeof obj === 'boolean'){
			return obj.toString();
		}

	if(Array.isArray(obj)){
			return '[' + stringifyArray(obj).toString() + ']';
		}

	if(typeof obj === 'object' && !Array.isArray(obj)){
			return stringifyObject(obj);
		}


	};





