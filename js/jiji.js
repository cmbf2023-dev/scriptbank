const select = document.querySelectorAll(".h-bg-jiji-green");

for( let x = 0; x < select.length; x++ ){
	select[x].style.backgroundColor = "#032b2e";
}

const select2 = document.querySelectorAll(".b-seller-page-header__button");

for( let x = 0; x < select2.length; x++ ){
	select2[x].style.backgroundColor = "#032b2e";
}
const bodyInterval = setInterval(()=>{
	const root = document.body;
	if(root ){
		root.style.display = "block";		
	} 
  if( root.style.display == "block"){
		clearInterval(bodyInterval);
	}
}, 1000);
