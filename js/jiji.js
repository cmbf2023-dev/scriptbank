const bodyInterval = setInterval(()=>{
	const root = document.body;
	if(root ){
		root.style.display = "block";		
	} 
  if( root.style.display == "block"){
		clearInterval(bodyInterval);
	}
}, 1000);

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







