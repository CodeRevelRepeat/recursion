// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){

	var foundElements = [];
	

	var checkNode = function(node, className){

		if(node.nodeType === document.ELEMENT_NODE && node.childNodes.length > 0){
			for(var i=0; i< node.childNodes.length; i++){
				//if(node.childNodes[i].className.toUpperCase() === className.toUpperCase()){
					//foundElements.push(node.childNodes[i]);

				checkNode(node.childNodes[i], className);
				}
			}

		if(node.nodeType === document.ELEMENT_NODE){
			if(node.className.toUpperCase() === className.toUpperCase()){
				console.log("node going in: " + node);
				foundElements.push(node);
			}
		}
	};

	checkNode(document.body, className);

	console.log(foundElements);
	//console.log(foundElements.reverse());

	//var reversedElements = foundElements.reverse();
	//var reversedElements = [];

	// for(var j= foundElements.length-1; j>=0; j--){
	// 	reversedElements.push(foundElements[j]);
	// }
	return foundElements;
 
};
