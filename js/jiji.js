const select = document.querySelectorAll(".h-bg-jiji-green");

for( let x = 0; x < select.length; x++ ){
	select[x].style.backgroundColor = "#032b2e";
}

const select2 = document.querySelectorAll(".b-seller-page-header__button");

for( let x = 0; x < select2.length; x++ ){
	select2[x].style.backgroundColor = "#032b2e";
}
const select3 = document.querySelectorAll(".b-seller-info-tiles__item");

for( let x = 0; x < select3.length; x++ ){
	select3[x].style.display = "none";
}

const select4 = document.querySelectorAll(".fw-button--type-bloated-success");

for( let x = 0; x < select4.length; x++ ){
	select4[x].style.backgroundColor = "#032b2e";
}
const heInterval = setInterval(()=>{
	let he = document.querySelector(".fw-button__slot-wrapper.fw-button__text--has-icon");

	if(he && he.innerText=="Show Contact"){
		he.innerText = "Bid Now";
	}
}, 1500);

const bodyInterval = setInterval(()=>{
	const root = document.body;
	if(root ){
		root.style.display = "block";		
	} 
  if( root.style.display == "block"){
		clearInterval(bodyInterval);
	}
}, 1000);
