// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {


var masterResult = [];



	var stringifyArray = function(obj){

		var result = [];


		for(var i=0; i< obj.length; i++){
			console.log("doing the array thing");
			var value = obj[i];

			if(typeof value === 'undefined' || typeof value === 'function' || typeof value === 'symbol'){
				result.push('null');

				}

			else {
				result.push(stringifyJSON(value));
				}

			masterResult.push(result);
			}
	};


	var stringifyObject = function(obj){

		var newObj = {};


		for(var key in obj){
				newObj[stringifyJSON(key)] = stringifyJSON(obj[key]);
		}

	};
				


				if(obj === null){
					masterResult.push("null");
				}


				if(typeof obj === 'number'){
					console.log('thinks i am a primitive number')
					masterResult.push(String(obj));
				}

				if(typeof obj === 'string'){
					masterResult.push('"' + obj + '"');

				}

				if(typeof obj === 'boolean'){
					masterResult.push(obj.toString());
				}


				if(Array.isArray(obj)){
					console.log("thinks i'm an array")
					stringifyArray(obj);
				}

				if(typeof obj === 'object'){
					console.log("thinks i'm a default object");
					stringifyObject(obj);
				}

		
		//If don't need masterResult as an array, just get rid of it and return values.

		//if(masterResult.length === 1){

			return masterResult[0];
		//}

		//else{
		//	return masterResult;
		//}

		};




		// if(Array.isArray(obj)){
				
		// 		//subArray.push(furtherArray);
		// 		for(var i=0; i< obj.length; i++){
					
		// 			stringifyParts(obj[i], arrayLevel[subArrayCounter]);
		// 			subArrayCounter++;
					
		// 		}
		// }

	


		//  if(typeof obj === 'number'){
		//     arrayLevel.push(obj);
		//    }

		//   if(typeof obj === 'string'){
		//     arrayLevel.push(obj);
		//    }

		//   if(typeof obj === 'boolean'){
		//     	arrayLevel.push(obj);
		//     }


		//   if(obj && obj.hasOwnProperty('{}')){		
		// 		var newObj = {};
		// 			for(var key in obj){

		// 				if(typeof key === 'number' || typeof key === 'string' && checkStringNumberBoolean(obj[key])){
		// 					newObj[key] = obj[key];

		// 					}
		// 				}

		// 			arrayLevel.push(newObj);
		// 		}

		//   else{

		//   	// if(arrayLevel != stringifiedJSONArray){
		//   	// 	arrayLevel.push('null');
		//   	// }
		//     	//return {};
		//     	// or null if this other element was within an array?  Can use if arrayLevel === stringifiedJSONArray to determine whether in array or not.
		//     }

	// };




			//need to loop through arrays and objects.


			//recursive case to flatten array?
		 //    else{
		  
		 //  	var flattenedArray = obj.reduce(function(a, b){
		 //  		return a.concat(b);
		 //  	})

		 //  	stringifyParts(flattenedArray);

		 //  	}

  	// 	}

//   	// };

//   	stringifyParts(obj);


//   	var stringifiedJSON = stringifiedJSONArray.join("");

//   	return stringifiedJSON;
// };
