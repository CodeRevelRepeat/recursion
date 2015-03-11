// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
 


  var parseArray = function(jsonArray){
    jsonArray = jsonArray.slice(1, -1);
    jsonArray = jsonArray.split(",");
   
    var newArray = [];

    for(var i=0; i<jsonArray.length; i++){
      newArray.push(parseJSON(jsonArray[i]));
    }

    return newArray;

  };


  var parseObject = function(object){


   object = object.slice(1, -1);
   var keyValuePairArray = object.split(",");

   var newObj = {};

   for(var j=0; j< keyValuePairArray.length; j++){
     
    var singlePairArray = keyValuePairArray[j].split(":");

    newObj[parseJSON(singlePairArray[0])] = parseJSON(singlePairArray[1]);


   }

  return newObj;


  };
  
  if(json === 'true'){
    return true;
  }

  if(json === 'false'){
    return false;
  }

  if(json === 'null'){
    return null;
  }

  if(!Number.isNaN(Number(json))){
    
    return Number(json);
  }


  if(typeof json === 'string' && json.charAt(0) === '{'){

    return parseObject(json);
  }

  if(typeof json === 'string' && json.charAt(0) === '['){

    return parseArray(json);

  }

 


 //For string case:

  else{

    return json.slice(1, -1);
  }


};
