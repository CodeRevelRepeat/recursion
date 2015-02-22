// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	var checkStringNumberBoolean = function(item){
		if(typeof item === 'number' || typeof item === 'string' || typeof item === 'boolean'){
			return true;
		}

	}

	var stringifiedJSONArray = [];	

	var subArrayCounter = 0;

	var stringifyParts = function(obj, arrayLevel){



		if(Array.isArray(obj)){
				
				//subArray.push(furtherArray);
				for(var i=0; i< obj.length; i++){
					
					stringifyParts(obj[i], arrayLevel[subArrayCounter]);
					subArrayCounter++;
					
				}
		}

	


		 if(typeof obj === 'number'){
		    arrayLevel.push(obj);
		   }

		  if(typeof obj === 'string'){
		    arrayLevel.push(obj);
		   }

		  if(typeof obj === 'boolean'){
		    	arrayLevel.push(obj);
		    }


		  if(obj && obj.hasOwnProperty('{}')){		
				var newObj = {};
					for(var key in obj){

						if(typeof key === 'number' || typeof key === 'string' && checkStringNumberBoolean(obj[key])){
							newObj[key] = obj[key];

							}
						}

					arrayLevel.push(newObj);
				}

		  else{

		  	// if(arrayLevel != stringifiedJSONArray){
		  	// 	arrayLevel.push('null');
		  	// }
		    	//return {};
		    	// or null if this other element was within an array?  Can use if arrayLevel === stringifiedJSONArray to determine whether in array or not.
		    }

	};




			//need to loop through arrays and objects.


			//recursive case to flatten array?
		 //    else{
		  
		 //  	var flattenedArray = obj.reduce(function(a, b){
		 //  		return a.concat(b);
		 //  	})

		 //  	stringifyParts(flattenedArray);

		 //  	}

  	// 	}

  	// };

  	stringifyParts(obj, stringifiedJSONArray);


  	var stringifiedJSON = stringifiedJSONArray.join("");

  	return stringifiedJSON;
};
