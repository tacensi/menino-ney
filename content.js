// sauce:https://medium.com/@nkhilv/how-to-make-a-word-replacement-chrome-extension-17cbd3639db6
var allElements = [...document.body.getElementsByTagName('*')];

function findAndReplace(){
	allElements.forEach(element =>{
		element.childNodes.forEach(child =>{
			if(child.nodeType === 3){
				replaceText(child);
			}
		});

	});
}

function replaceText (node) {
	let value = node.nodeValue;
	value = value.replace(/(Neymar( Jr\.?)?)/gi, 'Menino Ney');
	node.nodeValue = value;
}

window.onload = findAndReplace();
