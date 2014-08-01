
function Jsdxss(allows){
	var allows = allows || {
	  "a" : [ "title", "ping", "href", "class", "target", "style" ],
	  "b" : [ "class", "style" ],
	  "img" : [ "src", "class", "style" ],
	  "div" : [ "class", "style"],
	  "p" : ["class", "style"]
	};
	var buildNodes = function( node ){
		var i, newNode, attributes, child;

		switch( node.nodeType ){
		case 1: // ELEMENT_NODE
			attributes = allows[ node.tagName.toLowerCase() ];
			if( attributes === undefined ) return undefined;

			newNode = document.createElement( node.tagName );
			for( i = 0; i < node.attributes.length; i++ ){
				if( attributes.indexOf( node.attributes[ i ].name ) != -1 ){
					switch(node.attributes[ i ].name){
						case "href": node.attributes[ i ] = _deal_href(node.attributes[ i ]);break;
						case "style": node.attributes[ i ] = _deal_style(node.attributes[ i ]);break;
					}
					newNode.setAttribute( node.attributes[ i ].name, node.attributes[ i ].value );
				}
			}
			for( i = 0; i < node.childNodes.length; i++ ){
				child = buildNodes( node.childNodes[ i ] );
				if( child !== undefined ){
					newNode.appendChild( child );
				}
			}
			return newNode;
		case 3: // TEXT_NODE
			return document.createTextNode( node.textContent );
		default:
			return undefined;
		}
	}

	var _deal_href = function(attr){
		var href = attr.value;
		if (href.indexOf("http://") === 0 || href.indexOf("http://") === 0) {
			attr.value = href;
		}else{
			attr.value = "http://" + href;
		}
		return attr;
	}

	var _deal_style = function(attr){
		var style = attr.value;
		var re = /expression/gim
		style = style.replace(/\\/g, ' ').replace(/&#/g, ' ').replace(/\/\*/g, ' ').replace(/\*\//g, ' ');
		attr.value = style.replace(re, ' ');
		return attr;
	}

	this.filter = function(html, target){
		try{
			var parser = new DOMParser();
			var newDoc = parser.parseFromString( html, "text/html" );
		}catch(e){
			var doc = new ActiveXObject ("MSXML2.DOMDocument");
			var newDoc = doc.loadXML(html);
		}
	    
	    var newBody = newDoc.body;
	    var target = document.getElementById( target );
	    var i, childeNode;
	  
		target.innerHTML = "";
		for( i = 0; i < newBody.childNodes.length; i++ ){
			childNode = buildNodes( newBody.childNodes[ i ] );
			if( childNode !== undefined ){
				target.appendChild( childNode );
			}
		}
	}

}