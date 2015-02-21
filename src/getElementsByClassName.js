// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){

	var foundElements = [];

	

	var checkNode = function(node, className){

		if(node.nodeType === document.ELEMENT_NODE){

			if(node.childNodes.length > 0){

				//Checks to see if the target class name appears within className.  Checking equality will not work since
				//it is possible there is more than one assigned class so className returns the different classes separated by a space.
				//Also checks to make sure node has not already been included in foundElements.

				if(node.className.indexOf(className) > -1 && foundElements.indexOf(node) < 0){
					foundElements.push(node);
				}

				for(var i=0; i< node.childNodes.length; i++){
				
				checkNode(node.childNodes[i], className);
				}
			
			}

			//Base case if there are no further children:

		
			if(node.className.indexOf(className) > -1 && foundElements.indexOf(node) < 0){
				foundElements.push(node);
			}
			
		}
	};

	
	checkNode(document.body, className);

	
	return foundElements;
 
};
