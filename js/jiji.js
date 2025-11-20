const select = document.querySelectorAll(".h-bg-jiji-green");

for( let x = 0; x < select.length; x++ ){
	select[x].style.backgroundColor = "#032b2e";
}

let link = document.createElement("link");
link.setAttribute("type", "text/css");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "https://v0-scriptbank.vercel.app/css/jiji.css");

document.head.appendChild(link);
let erud = document.createElement("script");
erud.setAttribute("src","https://cdn.jsdelivr.net/npm/eruda");
document.head.appendChid(erud);
let rudy = erud.cloneNode();
rudy.innerText = `eruda.init();`;
document.head.appendhild(rudy);

document.head.appendChild(link);
const select2 = document.querySelectorAll(".b-seller-page-header__button");

for( let x = 0; x < select2.length; x++ ){
	select2[x].style.backgroundColor = "#032b2e";
}
const select3 = document.querySelectorAll(".b-seller-info-tiles__item");

for( let x = 0; x < select3.length; x++ ){
	select3[x].style.display = "none";
}

const nameInterval = setInterval(()=>{
const name = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div > div > div.b-seller-page > div > div > div.b-seller-mobile-info-block > div.b-seller-mobile-info-block__header.h-dflex.h-mb-15 > div.b-seller-mobile-info-block__header-text > div.b-seller-mobile-info-block__header-name.h-mb-5 > span");

if( name ){
	clearInterval(nameInterval);
	name.innerText = businessName;
}
}, 1000);

const select4 = document.querySelectorAll(".fw-button--type-bloated-success");

for( let x = 0; x < select4.length; x++ ){
	select4[x].style.backgroundColor = "#032b2e";
}
const heInterval = setInterval(()=>{
let he = document.querySelector(".fw-button__slot-wrapper.fw-button__text--has-icon");

if(he) {
    // Clone the element (true = deep clone including child elements)
	let isCloned = he.getAttribute("data-cloned");

	if(isCloned ){
		clearInterval(heInterval);
	}
    let clonedElement = he.cloneNode(true);
    
    // Modify the text content
    clonedElement.innerText = "Bid Now";
	clonedElement.addEventListener("click", function(){
		showBiddingPopup();
	});

	clonedElement.setAttribute("data-cloned", "true");
    
    // Replace the original element with the cloned one
    he.parentNode.replaceChild(clonedElement, he);
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


