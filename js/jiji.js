const bodyInterval = setInterval(()=>{
	const root = document.body;
	if(root ){
		root.style.display = "block";		
	} 
  if( root.style.display == "block"){
		clearInterval(bodyInterval);
	}
}, 1000);

let link = document.createElement("link");
link.setAttribute("type", "text/css");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "https://v0-scriptbank.vercel.app/css/jiji.css");

const select = document.querySelectorAll(".h-bg-jiji-green");

for( let x = 0; x < select.length; x++ ){
	select[x].style.backgroundColor = "#032b2e";
}



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



function showLoginPopup(){
	const style = document.createElement('style');
	style.innerHTML = `  * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, sans-serif;
        }
        
        body {
            background-color: #f8f9fa;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            color: #333;
        }
        
        .container {
            width: 100%;
            max-width: 450px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .login-container {
            padding: 40px 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .dashboard-container {
            padding: 30px;
            display: none;
        }
        
        .logo {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .logo i {
            font-size: 32px;
            margin-right: 12px;
            color: #2563eb;
        }
        
        .logo h1 {
            font-size: 24px;
            font-weight: 700;
            color: #1e293b;
        }
        
        .input-group {
            width: 100%;
            margin-bottom: 20px;
        }
        
        .input-group label {
            display: block;
            color: #475569;
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 14px;
        }
        
        .file-input-wrapper {
            position: relative;
            overflow: hidden;
            display: inline-block;
            width: 100%;
        }
        
        .file-input-wrapper input[type=file] {
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
        
        .file-input-button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px 20px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            color: #64748b;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .file-input-button:hover {
            background: #f1f5f9;
            border-color: #cbd5e1;
        }
        
        .file-input-button i {
            margin-right: 10px;
            font-size: 16px;
        }
        
        .file-name {
            margin-top: 8px;
            color: #94a3b8;
            font-size: 13px;
            text-align: center;
        }
        
        .password-input {
            width: 100%;
            padding: 12px 16px;
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            color: #1e293b;
            font-size: 15px;
            outline: none;
            transition: border 0.2s;
        }
        
        .password-input:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .password-input::placeholder {
            color: #94a3b8;
        }
        
        .login-btn {
            width: 100%;
            padding: 14px;
            background: #2563eb;
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            margin-top: 10px;
        }
        
        .login-btn:hover {
            background: #1d4ed8;
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #f1f5f9;
        }
        
        .user-info h2 {
            font-size: 20px;
            margin-bottom: 5px;
            color: #1e293b;
        }
        
        .user-info p {
            color: #64748b;
            font-size: 14px;
        }
        
        .logout-btn {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            width: 40px;
            height: 40px;
            color: #64748b;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .logout-btn:hover {
            background: #f1f5f9;
            color: #475569;
        }
        
        .balance-card {
            background: #f8fafc;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
            text-align: center;
            border: 1px solid #f1f5f9;
        }
        
        .balance-label {
            font-size: 15px;
            color: #64748b;
            margin-bottom: 10px;
        }
        
        .balance-amount {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 5px;
            color: #1e293b;
        }
        
        .balance-currency {
            font-size: 15px;
            color: #64748b;
        }
        
        .action-buttons {
            display: flex;
            justify-content: space-between;
            gap: 15px;
        }
        
        .action-btn {
            flex: 1;
            padding: 18px;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            color: #475569;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .action-btn i {
            font-size: 20px;
            margin-bottom: 10px;
        }
        
        .action-btn:hover {
            background: #f8fafc;
            border-color: #cbd5e1;
            transform: translateY(-2px);
        }
        
        .invest-btn {
            color: #059669;
            border-color: #d1fae5;
        }
        
        .invest-btn:hover {
            background: #ecfdf5;
        }
        
        .receive-btn {
            color: #2563eb;
            border-color: #dbeafe;
        }
        
        .receive-btn:hover {
            background: #eff6ff;
        }
        
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 100;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .modal-content {
            background: white;
            border-radius: 12px;
            width: 100%;
            max-width: 500px;
            padding: 30px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            animation: modalAppear 0.2s ease;
        }
        
        @keyframes modalAppear {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #f1f5f9;
        }
        
        .modal-title {
            font-size: 20px;
            font-weight: 700;
            color: #1e293b;
        }
        
        .close-btn {
            background: none;
            border: none;
            font-size: 22px;
            cursor: pointer;
            color: #94a3b8;
            transition: color 0.2s;
        }
        
        .close-btn:hover {
            color: #64748b;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #374151;
            font-size: 14px;
        }
        
        .form-control {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            font-size: 15px;
            outline: none;
            transition: all 0.2s;
        }
        
        .form-control:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 25px;
            padding-top: 20px;
            border-top: 1px solid #f1f5f9;
        }
        
        .btn {
            padding: 12px 20px;
            border: 1px solid;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .btn-primary {
            background: #2563eb;
            border-color: #2563eb;
            color: white;
        }
        
        .btn-primary:hover {
            background: #1d4ed8;
            border-color: #1d4ed8;
        }
        
        .btn-secondary {
            background: white;
            border-color: #e2e8f0;
            color: #475569;
        }
        
        .btn-secondary:hover {
            background: #f8fafc;
            border-color: #cbd5e1;
        }
        
        .agreement-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 14px;
            border: 1px solid #e2e8f0;
        }
        
        .agreement-table th, .agreement-table td {
            border: 1px solid #e2e8f0;
            padding: 12px;
            text-align: left;
        }
        
        .agreement-table th {
            background-color: #f8fafc;
            font-weight: 600;
            color: #374151;
            width: 40%;
        }
        
        .agreement-content {
            max-height: 300px;
            overflow-y: auto;
            padding: 15px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            margin-bottom: 20px;
            background: #f8fafc;
        }
        
        .status-message {
            padding: 12px;
            border-radius: 8px;
            margin: 15px 0;
            text-align: center;
            display: none;
            font-size: 14px;
        }
        
        .success {
            background: #f0fdf4;
            color: #166534;
            border: 1px solid #bbf7d0;
        }
        
        .error {
            background: #fef2f2;
            color: #991b1b;
            border: 1px solid #fecaca;
        }`;
	document.head.appendChild(style);
	document.body.innerHTML = `<div class="container">
        <!-- Login Section -->
        <div class="login-container" id="loginSection">
            <div class="logo">
                <i class="fas fa-lock"></i>
                <h1>SecureWallet</h1>
            </div>
            
            <div class="input-group">
                <label for="encryptedFile">Upload Encrypted File</label>
                <div class="file-input-wrapper">
                    <div class="file-input-button">
                        <i class="fas fa-file-import"></i>
                        <span>Choose Encrypted File</span>
                    </div>
                    <input type="file" id="encryptedFile" accept=".enc,.dat,.bin">
                </div>
                <div class="file-name" id="fileName">No file selected</div>
            </div>
            
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="password-input" placeholder="Enter your password">
            </div>
            
            <button class="login-btn" id="loginBtn">
                <i class="fas fa-sign-in-alt"></i> Login
            </button>
            
            <div class="status-message" id="loginStatus"></div>
        </div>
        
        <!-- Dashboard Section -->
        <div class="dashboard-container" id="dashboardSection">
            <div class="dashboard-header">
                <div class="user-info">
                    <h2>Welcome, User123</h2>
                    <p>Last login: Today, 10:30 AM</p>
                </div>
                <button class="logout-btn" id="logoutBtn">
                    <i class="fas fa-sign-out-alt"></i>
                </button>
            </div>
            
            <div class="balance-card">
                <div class="balance-label">Your Balance</div>
                <div class="balance-amount" id="balanceAmount">$5,430.25</div>
                <div class="balance-currency" id="balanceCurrency">USD</div>
            </div>
            
            <div class="action-buttons">
                <button class="action-btn invest-btn" id="investBtn">
                    <i class="fas fa-chart-line"></i>
                    <span>Invest</span>
                </button>
                <button class="action-btn receive-btn" id="receiveBtn">
                    <i class="fas fa-download"></i>
                    <span>Receive</span>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Invest Modal -->
    <div class="modal" id="investModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Make an Investment</h3>
                <button class="close-btn" id="closeInvestModal">&times;</button>
            </div>
            <form id="investForm">
                <div class="form-group">
                    <label for="investmentAmount">Investment Amount</label>
                    <input type="number" id="investmentAmount" class="form-control" placeholder="Enter amount" min="1" required>
                </div>
                <div class="form-group">
                    <label for="investmentType">Investment Type</label>
                    <select id="investmentType" class="form-control" required>
                        <option value="">Select investment type</option>
                        <option value="stocks">Stocks</option>
                        <option value="crypto">Cryptocurrency</option>
                        <option value="bonds">Bonds</option>
                        <option value="real-estate">Real Estate</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="investmentDuration">Investment Duration (months)</label>
                    <input type="number" id="investmentDuration" class="form-control" placeholder="Enter duration" min="1" required>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" id="cancelInvest">Cancel</button>
                    <button type="submit" class="btn btn-primary">Continue</button>
                </div>
            </form>
        </div>
    </div>
    
    <!-- Receive Money Modal -->
    <div class="modal" id="receiveModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Receive Money</h3>
                <button class="close-btn" id="closeReceiveModal">&times;</button>
            </div>
            <form id="receiveForm">
                <div class="form-group">
                    <label for="blockId">Block ID</label>
                    <input type="text" id="blockId" class="form-control" placeholder="Enter the block ID of the transaction" required>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" id="cancelReceive">Cancel</button>
                    <button type="submit" class="btn btn-primary">Continue</button>
                </div>
            </form>
        </div>
    </div>
    
    <!-- Agreement Modal -->
    <div class="modal" id="agreementModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Transaction Agreement</h3>
                <button class="close-btn" id="closeAgreementModal">&times;</button>
            </div>
            <div class="agreement-content">
                <p>Please review the transaction details below before proceeding:</p>
                
                <table class="agreement-table">
                    <tr>
                        <th>Transaction Type</th>
                        <td id="agreementType">Money Receipt</td>
                    </tr>
                    <tr>
                        <th>Block ID</th>
                        <td id="agreementBlockId">BLK-7X9Y2Z</td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td id="agreementAmount">$1,250.00</td>
                    </tr>
                    <tr>
                        <th>Sender</th>
                        <td id="agreementSender">Wallet: 0x4f8a...c3d2</td>
                    </tr>
                    <tr>
                        <th>Network Fee</th>
                        <td id="agreementFee">$2.50</td>
                    </tr>
                    <tr>
                        <th>Estimated Arrival</th>
                        <td id="agreementArrival">2-5 minutes</td>
                    </tr>
                </table>
                
                <p><strong>Terms & Conditions:</strong></p>
                <ul>
                    <li>By accepting this transaction, you agree to our terms of service.</li>
                    <li>The transaction is irreversible once confirmed on the blockchain.</li>
                    <li>Network fees are non-refundable.</li>
                    <li>We are not responsible for transactions sent to incorrect addresses.</li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="declineAgreement">Decline</button>
                <button type="button" class="btn btn-primary" id="acceptAgreement">Accept</button>
            </div>
        </div>
    </div>

    <script>
        // DOM Elements
        const loginSection = document.getElementById('loginSection');
        const dashboardSection = document.getElementById('dashboardSection');
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const investBtn = document.getElementById('investBtn');
        const receiveBtn = document.getElementById('receiveBtn');
        const encryptedFileInput = document.getElementById('encryptedFile');
        const fileName = document.getElementById('fileName');
        const passwordInput = document.getElementById('password');
        const loginStatus = document.getElementById('loginStatus');
        
        // Modal elements
        const investModal = document.getElementById('investModal');
        const receiveModal = document.getElementById('receiveModal');
        const agreementModal = document.getElementById('agreementModal');
        const closeInvestModal = document.getElementById('closeInvestModal');
        const closeReceiveModal = document.getElementById('closeReceiveModal');
        const closeAgreementModal = document.getElementById('closeAgreementModal');
        const cancelInvest = document.getElementById('cancelInvest');
        const cancelReceive = document.getElementById('cancelReceive');
        const investForm = document.getElementById('investForm');
        const receiveForm = document.getElementById('receiveForm');
        const declineAgreement = document.getElementById('declineAgreement');
        const acceptAgreement = document.getElementById('acceptAgreement');
        
        // Agreement details elements
        const agreementType = document.getElementById('agreementType');
        const agreementBlockId = document.getElementById('agreementBlockId');
        const agreementAmount = document.getElementById('agreementAmount');
        const agreementSender = document.getElementById('agreementSender');
        const agreementFee = document.getElementById('agreementFee');
        const agreementArrival = document.getElementById('agreementArrival');
        
        // Event Listeners
        encryptedFileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                fileName.textContent = this.files[0].name;
            } else {
                fileName.textContent = 'No file selected';
            }
        });
        
        loginBtn.addEventListener('click', function() {
            const file = encryptedFileInput.files[0];
            const password = passwordInput.value;
            
            if (!file) {
                showStatus('Please select an encrypted file', 'error');
                return;
            }
            
            if (!password) {
                showStatus('Please enter your password', 'error');
                return;
            }
            
            // Simulate file decryption process
            showStatus('Decrypting file...', 'success');
            
            setTimeout(() => {
                // Simulate successful login
                loginSection.style.display = 'none';
                dashboardSection.style.display = 'block';
            }, 1500);
        });
        
        logoutBtn.addEventListener('click', function() {
            dashboardSection.style.display = 'none';
            loginSection.style.display = 'flex';
            encryptedFileInput.value = '';
            passwordInput.value = '';
            fileName.textContent = 'No file selected';
            loginStatus.style.display = 'none';
        });
        
        investBtn.addEventListener('click', function() {
            investModal.style.display = 'flex';
        });
        
        receiveBtn.addEventListener('click', function() {
            receiveModal.style.display = 'flex';
        });
        
        // Close modals
        closeInvestModal.addEventListener('click', function() {
            investModal.style.display = 'none';
        });
        
        closeReceiveModal.addEventListener('click', function() {
            receiveModal.style.display = 'none';
        });
        
        closeAgreementModal.addEventListener('click', function() {
            agreementModal.style.display = 'none';
        });
        
        cancelInvest.addEventListener('click', function() {
            investModal.style.display = 'none';
        });
        
        cancelReceive.addEventListener('click', function() {
            receiveModal.style.display = 'none';
        });
        
        // Form submissions
        investForm.addEventListener('submit', function(e) {
            e.preventDefault();
            investModal.style.display = 'none';
            
            // In a real app, you would process the investment here
            alert('Investment request submitted!');
            investForm.reset();
        });
        
        receiveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const blockId = document.getElementById('blockId').value;
            
            // Set agreement details
            agreementType.textContent = 'Money Receipt';
            agreementBlockId.textContent = blockId;
            agreementAmount.textContent = '$1,250.00';
            agreementSender.textContent = 'Wallet: 0x4f8a...c3d2';
            agreementFee.textContent = '$2.50';
            agreementArrival.textContent = '2-5 minutes';
            
            receiveModal.style.display = 'none';
            agreementModal.style.display = 'flex';
        });
        
        declineAgreement.addEventListener('click', function() {
            agreementModal.style.display = 'none';
            alert('Transaction declined.');
        });
        
        acceptAgreement.addEventListener('click', function() {
            agreementModal.style.display = 'none';
            alert('Transaction accepted! Funds will be available shortly.');
            receiveForm.reset();
        });
        
        // Close modals when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === investModal) {
                investModal.style.display = 'none';
            }
            if (e.target === receiveModal) {
                receiveModal.style.display = 'none';
            }
            if (e.target === agreementModal) {
                agreementModal.style.display = 'none';
            }
        });
        
        // Helper function to show status messages
        function showStatus(message, type) {
            loginStatus.textContent = message;
            loginStatus.className = 'status-message ' + type;
            loginStatus.style.display = 'block';
            
            setTimeout(() => {
                loginStatus.style.display = 'none';
            }, 3000);
        }
    </script>`;
}



function showBiddingPopup(name ="Go to Shop", description=" and Select your Item to bid", price="249.99", stock="5", current="12", time = "02:15:30"){
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
                document.getElementById("${optionType} details").classList.add('active');
            });
        });
        
        // Timer countdown (for demonstration purposes)
        let timeLeft = 8130; // 2 hours, 15 minutes, 30 seconds in seconds
        
        function updateTimer() {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            
            const formattedTime = 
                "${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}";
            
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






