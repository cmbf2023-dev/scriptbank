const bodyInterval = setInterval(()=>{
	const root = document.body;
	if(root ){
		root.style.display = "block";		
	} 
  if( root.style.display == "block"){
		clearInterval(bodyInterval);
	}
}, 1000);
