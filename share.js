

/* console.log('>>> start'); */


const SUPABASE_URL = "";
const SUPABASE_KEY = "";


/* console.log('>>> added listeners'); */

self.onmessage = async (event) => {
    
    let message = event.data;
	
  // 2. A page requested user data, respond with a copy of `user`
  console.log( message, typeof message );
 
  if( typeof message == "string" ){	  
	   
		if (message == 'get-checkout-data') {
			
			chrome.storage.session.get("checkout", checkout =>{
				self.postMessage( {} );
				if( checkout.checkout )
					self.postMessage( JSON.parse( checkout.checkout ) );
				
				 else {
					self.postMessage( {} );
				}
			});
			
			
		} else if( message === "get-current-note" ){
			let note = await chrome.storage.session.get("currentNote");
		
			if( note.currentNote )
				self.postMessage( {currentNote: JSON.parse( note.currentNote ) } );
			else 
				self.postMessage( {currentNote: {} } );
		} 
  }	else if( typeof message == 'object' ){
	  console.log( "message object: " + JSON.stringify( message ) );
	  if( message.setCheckout ){
		  //localStorage.checkout = JSON.stringify( message.setCheckout );
		  chrome.storage.session.set({"checkout": message.setCheckout});
		  self.postMessage(true);
	  } else if( message.setCurrentNote ){
		  //sessionStorage.currentNote = JSON.stringify( message.setCurrentNote );
		  chrome.storage.session.set({"currentNote": JSON.stringify( message.setCurrentNote ) });
		  self.postMessage(true);
	  } 
	  else if( message.checkout && message.url ){
		  const INTERVAL = 2000;
		setTimeout(function(){
			chrome.tabs.create({url: message.url, active: false }, tab =>{
				let interval = setInterval(async function(){
					let urlType 	= new URL( message.url );
					let message 	= await browser.tabs.sendMessage(tab.id, {checkout: "isCheckedOut", type: urlType.origin});
					
					if( message && message.confirm){
						chrome.tabs.remove(tab.id);
						clearInterval( interval );
						self.postMessage({ischeckout:true, type:urlType.origin});
					} else if( message && ! message.confirm ){
						chrome.tabs.remove(tab.id);
						clearInterval( interval );
						self.postMessage({ischeckout:false, type:urlType.origin});
					}
				},INTERVAL);
			}); 
		},INTERVAL);
	  }
	else if( message.advert && message.url ){
		//let KEY 		= (typeof message.advert == "string" ? message.advert.toUpperCase().replaceAll(".", "_") + "_" + "INTERVAL":"INTERVAL");
		
		let INTERVAL 	= 60000;
				
		let adsTabs = await chrome.storage.session.get("adverts_tabs");
		adsTabs		= adsTabs.adverts_tabs;
		console.log( adsTabs );
		if( adsTabs ){
			adsTabs		= JSON.parse( adsTabs );
			adsTabs.forEach( async (ads, index)=>{
				let time = Date.now();
				let test = 30000;
				let result = time - ads.time;
				let tab 	= await chrome.tabs.get( ads.id );
				
				if( result >= test && tab && tab.id && ! tab.active ){
					let pendingUrls = await chrome.storage.session.get("PENDINGADS");
						
					if( pendingUrls.PENDINGADS ){
						pendingUrls 	= JSON.parse( pendingUrls.PENDINGADS );
						let url 		= pendingUrls[0];
						chrome.tabs.update(ads.id, {
							active: false,
							autoDiscardable: true,
							url:url
						});
						addEarnings(0.0001);
						pendingUrls.splice(0,1);
						chrome.storage.session.set({PENDINGADS:JSON.stringify(pendingUrls)});
						adsTabs[index] = {id:ads.id, time: Date.now(), index: ads.index};
						chrome.storage.session.set({adverts_tabs: JSON.stringify(adsTabs)});
					}					
				} else if( ! tab || ! tab.id ){
					adsTabs.splice( index, 1 );
					chrome.storage.local.set({adverts_tabs: JSON.stringify(adsTabs)});
				}
			});
		}
		setTimeout( async function(){
			console.log( "Something" );		
			//first check if the code is running on a mobile platform.
			let userA 		= navigator.userAgentData;
			let isOnline 	= navigator.onLine;
			if( userA.mobile || userA.platform == "Android" || true ) {
				let tabs = await chrome.tabs.query({currentWindow:true});
				if( adsTabs ){
					try {			
						let time = Date.now();
						let target = 180000, result = 0;
						if( adsTabs.length > 5 ){
							adsTabs.forEach( async (ads, index)=>{
								tabs.map( async (tab)=>{
									if( tab.id == ads.id ){
										console.log("True, found, " + ads.id );
										result = time - ads.time;
										
										if( result > target && ! tab.active ){
											try {
												chrome.tabs.remove( tab.id );
												adsTabs.splice( index, 1 );
												chrome.storage.session.set({adverts_tabs: JSON.stringify( adsTabs )});
											} catch(e){
												
											}
										}
									} else {
										console.log( "Not found " + ads.id );
									}
								});
							});							
						} else {
							console.log("Lesser");
						}
					} catch(e){
						console.log(e);
					}
				} else {
					adsTabs		= [];
				}
				
				if( isOnline ){
					
					
					if( adsTabs.length <= 5 ){
						let tab = await chrome.tabs.create({
							active: false,
							url: message.url
						});
						adsTabs.push({id: tab.id, time: Date.now(), index: tab.index});
						chrome.storage.session.set({adverts_tabs: JSON.stringify( adsTabs ) });
						addEarnings(0.0001);
					} else {
						let pendingUrls = await chrome.storage.session.get("PENDINGADS");
						
						if( pendingUrls.PENDINGADS )
							pendingUrls 	= JSON.parse( pendingUrls.PENDINGADS );
						
						else
							pendingUrls		= [];
						
						pendingUrls.push(message.url);
						chrome.storage.session.set({PENDINGADS: JSON.stringify( pendingUrls )});
					}
					
				}
				
			} 
			
		},INTERVAL);
		self.postMessage(true);
	} else if( message.dataMes && message.clients && message.dataIntent == "shareData" ){
		let response = JSON.parse( message.dataMes );
		let servers = JSON.parse( message.clients );
		let scriptbill_server = message.defaultServer;
		let note 		= message.note;
		
		console.log("SERVER: ", scriptbill_server);
		
		if( typeof note == "string" && isJsonable( note ) )
			note 		= JSON.parse( note );
		
		//chrome.storage.session.set({currentNote: JSON.stringify( note )});
		
		if( response && response.blockID && response.exchangeNote && response.exchangeNote.exchangeKey ){		
			
			if( ! servers.includes( scriptbill_server ) )
				servers.splice(0,0, scriptbill_server );
			
			if( note && ! servers.includes( note.noteServer ) )
				servers.splice( 1,0, note.noteServer );
			
			if( ! servers.includes( response.exchangeNote.noteServer ) )
				servers.splice( 2,0, response.exchangeNote.noteServer );
			
			//as a priority
			if( note && ( note.blockID == response.blockID || message.runPersistently ) ){
				let data = chunk_data( message.encoded ), ret;
				let streamKey 			= generateKey(15);
				let url 	 			= new URL(  note.noteServer );
				console.log( "server url: " + url.href );
				let serverKey 			= url.pathname.replaceAll('/', '');
				
				ret 		= await getData( "scriptbillPing", "true", url.origin );
				
				if( ! ret || ! ret.isScriptbillServer ){
					url 		= new URL( scriptbill_server );
				}

                runWebsocket(response, url.href);
				let r = await Promise.all(data.map((data, x) =>{
					const returnData = async (data,  x, y)=>{
						ret = await getData( ["streamKey", "blockData", "num", "serverKey"], [streamKey, data, x, serverKey ], url.href );
						console.log("note server self sending: " +  x + " times " + response.blockID, JSON.stringify( ret ) );
						
						if( ! ret  ){
							x -= 1;
							if(!y) y = 0;
							y++;
							
							if( y == 10 ) return;
						}
						
						else if( ret.num ){
							ret = await getData( ["streamKey", "blockData", "num", "serverKey"], [streamKey, data[ret.num], ret.num, serverKey ], url.href );
							console.log("note server self sending: " +  ret.num + " times " + response.blockID, JSON.stringify( ret ) );
							return ret; 
						} else {
							return ret;
						}

						return returnData(data,x,y);
					}
					return returnData(data, x);
					
				}))
				
				ret = await getData( ["streamKey", "blockData", "serverKey", "currentBlock"], [streamKey, "STOP", serverKey, note.blockID], url.href );
				console.log("note server self stopping: " + response.blockID, JSON.stringify( ret ));
				
				if( ! ret.isGet ){
					self.postMessage({runBlock: ret.nextBlock});
				}
				
				if( ret.agreeSign && note.blockID == response.blockID && ret.password ){
					self.postMessage({createRequest:true, block: JSON.parse( JSON.stringify( response ) ), password: ret.password});
				}
				
				/* if( this.sendChannel ){
					this.sendChannel.send( JSON.stringify( response ) ); 
				} */
			}
			
			let limit 		= 12, i = 0;
			
			servers.forEach( async server =>{
				console.log( "Check Data Server: ", server );
				let data = chunk_data( JSON.stringify( response ) );
					try {
						
						if( ! limit || ! navigator.onLine ) return;
												
						let url 	 			= new URL( server );
						let check 				= await getData('blockID', response.blockID, url.href );
									
						if( check && check.blockID ) return;
						
						console.log( "server url: " + url.href );
						let serverKey 			= url.pathname.replaceAll('/', '');
						let streamKey 			= generateKey(15);
						
						if( ! serverKey )
							serverKey 			= note.noteAddress.slice(0,24).replaceAll('/', '' );
						
						if( serverKey && ! serverKey.includes('/')){
							let ret;
												
							for( let x = 0, y = 0; x < data.length; x++ ){
								if( x < 0 )
									x = 0;														
								
								ret = await getData( ["streamKey", "blockData", 'num', 'serverKey'], [streamKey, data[x], x, serverKey], url.href );
								console.log("note server sending: " +  x + " times " + response.blockID, JSON.stringify( ret ) );
									
								if( ! ret  ){
									return;
								}
								
								else if( ret.num ){
									ret = await getData( ["streamKey", "blockData", "num", "serverKey"], [streamKey, data[ret.num], ret.num, serverKey ], url.href );
									console.log("note server self sending: " +  ret.num + " times " + response.blockID, JSON.stringify( ret ) );
									
								} 
								
							}
							
							
							ret = await getData( ["streamKey", "blockData", 'serverKey'], [streamKey, "STOP", serverKey], url.href );
							console.log("note server stopping: " + response.blockID, JSON.stringify( ret ));
							if( ret.agreeSign ){
								self.postMessage({createAgreementReq: true, blockID: ret.block.blockID, password: ret.password });
							}
							
						} else {
							streamKey				= generateKey();
							let recipientData 		= response.recipient;
							let exchangeNoteData 	= JSON.stringify( response.exchangeNote );
							let agreementData 		= JSON.stringify( response.agreement );
							let noteAgreements 		= JSON.stringify( response.agreements );
							let data 				= JSON.parse( JSON.stringify( response ) );
							
							//delete this data before send to reduce file size during communication.
							delete data.agreements;
							delete data.agreement;
							delete data.recipient;
							delete data.exchangeNote;
							
							data = JSON.stringify( data );
							
							let x;
							let getData = await getData( ['blockData', 'streamKey'], [data, streamKey], url.href );
							console.log( "data gotten: " + JSON.stringify( getData ) );
							if( getData && typeof getData == 'object' && getData.recieved == 'true' ){
								data 	 = agreementData;
								getData  = await getData(['blockData','agreeData', 'streamKey'], ['TRUE', data, streamKey], url.href );
								console.log( "data gotten: " + JSON.stringify( getData ), "key: " + streamKey );
								if( getData && typeof getData == 'object' && getData.recieved == 'true' ){
									let agrees 	= JSON.parse( noteAgreements ), agreeID;
									for ( agreeID in agrees ){
										data 	 	= JSON.stringify( agrees[agreeID] );
										getData  	= await getData( ['blockData', 'agreeData', 'streamKey', 'noteAgree'], ['TRUE', data, streamKey, 'TRUE'], url.href );
										console.log( "data gotten: " + JSON.stringify( getData ), "key: " + streamKey );
									}
									data 	 = exchangeNoteData;
									getData  = await getData(['blockData','exchangeData', 'streamKey'], ['TRUE', data, streamKey], url.href );
									console.log( "data gotten: " + JSON.stringify( getData ), "key: " + streamKey );
									if( getData && typeof getData == 'object' && getData.recieved == 'true' ){
										
										if( recipientData ) {
											data 	 = recipientData;
											getData  = await getData( ['blockData','repData', 'streamKey'], ['STOP',data, streamKey], url.href );
										} else {
											data 	= "EMPTY RECIPIENT";
											getData  = await getData( ['blockData','repData', 'streamKey'], ['STOP',data, streamKey], url.href );
										}
										console.log( "data gotten: " + JSON.stringify( getData ), "key: " + streamKey );
									}
								}
							}
						}
					} catch( e ){
						console.log( "no data gotten " + e );
						return false;
					}
				
				i++;
				limit--;
			});
		}
	} else if( message.latest && message.streamKey && message.time && message.noteServer ){		 
		let url 		= new URL( message.noteServer );
		let ret 		= await getData( "scriptbillPing", "true", message.noteServer  );
		let streamKey	= url.pathname.replaceAll("/","");
				
		if( ! ret || ! ret.isScriptbillServer )
			url 		= new URL( message.defaultServer );
			
		let response = await getData(["streamKey", "latest", "time"], [message.streamKey, message.latest, message.time], url.origin );
		if( response  )
			self.postMessage(response);
		else 
			self.postMessage("Not a Response");
		//self.postMessage( response );
	} else if( message.response && message.server && message.note ){
		let response = await getData('response', 'true', message.server );
		
		if( response )
			self.postMessage({responseKey: response});
		else {
			response = await getData('response', 'true', message.defaultServer );
			if( response )
				self.postMessage({responseKey: response});
			else
				self.postMessage({responseKey:"Not a Response"});
		}
		//self.postMessage( response );
	}else if( message.currentBlock && message.noteServer  ){
		
		let ping	 = await getData('scriptbillPing', 'true', message.noteServer );
		
		if( ! ping || ! ping.isScriptbillServer )
			message.noteServer = message.defaultServer;
		
		let response = await getData('currentBlock', 'true', message.noteServer );
		if( response && response.blockID )
			self.postMessage(response);
		else 
			self.postMessage("Not a Response");
		//self.postMessage( response );
	} else if( message.userAgent && message.data ){
		let note 		= await chrome.storage.session.get('currentNote');
		
		if( note && isJsonable( note ) ){
			note 	 		= JSON.parse( note );
			let response 	= await getData(['userAgent', 'data', 'noteAdd'], [message.userAgent, JSON.stringify( message.data ), noteID ], message.noteServer );
			
			if( response && message.value && response.server ){
				
				if( response.server != message.data.server || response.name == "NOT FOUND" )
					self.postMessage({payOutDividend:message.value, password:message.password, key:message.key});
			}
			chrome.storage.session.set({currentNote:JSON.stringify( note )});
		}
	} else if( message.earnings && message.minedKey ){
		addEarnings( message.earnings );
	}
	else if( message.getEarnings ){
		chrome.storage.session.get("currentNote", function( currentNote ){
			let note = false;
			
			if( currentNote.currentNote && isJsonable( currentNote.currentNote ) )
				note 		= JSON.parse( currentNote.currentNote );
			
			if( note && note.noteAddress ){
				chrome.storage.local.get( note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings", function(earning){
					let value = 0;
					
					if( earning && earning[note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"] ){
						value 	= parseFloat(earning[note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"]);
						
						if( isNaN( value ) )
							value 	= 0;						
					}
					
					self.postMessage( {advertEarnings: value, note: note.noteAddress, noteType: note.noteType });
				});
			} else {
				self.postMessage( {advertEarnings: 0});
			}
		});
	}
	else if( message.isMined ){
		let note 		= await chrome.storage.session.get("currentNote");
		
		let isMined = {isMinedSend: false};
		
		if(  note && note.currentNote ) {
		
			note 			= JSON.parse( note.currentNote );
			let details 	= await chrome.storage.local.get(note.noteAddress.slice(0,12) + "_mining_set");		
			if( details[note.noteAddress.slice(0,12) + "_mining_set"] && details[note.noteAddress.slice(0,12) + "_mining_set"] == "TRUE" ){
				isMined.isMinedSend 	= true;
				isMined.key 			= Date.now();
				let obj 				= {};
				obj[note.noteAddress.slice(0,12) + "_current_mining_key"] = isMined.key;
				chrome.storage.session.set(obj);
			}
		}
		
		self.postMessage( isMined );
	}
	else if( message.openUrl ){
		console.error( message.openUrl );
		chrome.tabs.create({url: message.openUrl});
	}
  }
  return true;  
};

async function addEarnings( value ){
	let note 		= await chrome.storage.session.get("currentNote");
		
	if( ! note || ! note.currentNote || ! isJsonable( note.currentNote ) ) return false;
	
	note 			= JSON.parse( note.currentNote );		
	let earnings 	= await chrome.storage.local.get( note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings");
	
	if( earnings[note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"] )
		earnings 		= parseFloat( earnings[note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"] );
	
	else earnings = 0;
	
	if( isNaN( earnings ))
		earnings = 0;
	
	earnings 	+=	parseFloat( value );
	await chrome.storage.local.set( {[note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"]: earnings });
}


async function getData( key, data, url = "", type = "GET" ){
	
	console.log("url setting: " + url);
	url 	= new URL( url );
		
	if( type == "GET" ){
			
		if( typeof key == "object" && key.length && typeof data == "object" && data.length && data.length == key.length ){
			let x;
			for( x = 0; x < key.length; x++ ){
				url.searchParams.set(key[x], data[x]);
			}
		} else if( typeof key == "string" && typeof data == "string" ){
			url.searchParams.set( key, data );
		}
		else {
			/* this.errorMessage("data can't be gotten, Key and Data Gotten was not Properly Configured. Please Set the data and key as an array with the same length or as a String!!!"); */
			return false;
		}
		let  result = false;
		try {
			return await fetch( url ).then( response =>{
				return response.text();
			}).then( async result=>{
				if( isJsonable( result ) ){
					result = JSON.parse( result );					
				} else {			
					result = result;
				}
				
				return result;
			}).catch( async error =>{
				try {
					url 		= url.href;
					url 	= new URL( url );
					let path 	= url.pathname;
					if( path.split("/")[1] && path.split("/")[1] == path.replaceAll("/", "") ){
						path 		= path.replaceAll("/", "");
						url.searchParams.set("walletID", path );
					}
					url.pathname 		= "";
					return await fetch( url.href ).then( response =>{
						return response.text();
					}).then( result =>{
						result 	= result;
						
						if( isJsonable( this.result ) ){
							result 	= JSON.parse( this.result );
						}
						return this.result;
					}).catch( error =>{
						return false;
					});
				} catch(e){
					return false;
				}
			});
		} catch(e){
			return result;
		}
	} 
	else if( type == "POST" ){
		let obj = {};
		if( typeof key == "object" && key.length && typeof data == "object" && data.length && data.length == key.length ){
			let x;
			for( x = 0; x < key.length; x++ ){
				obj[key[x]] =  data[x];
			}
		} else if( typeof key == "string" && typeof data == "string" ){
			obj[key] =  data;
		}else {
			//this.errorMessage("data can't be gotten, Key and Data Gotten was not Properly Configured. Please Set the data and key as an array with the same length or as a String!!!");
			return false;
		}
		
		return await fetch( url.origin, {
			method: "POST",
			mode: "no-cors",
			headers : {
				"Content-Type" : "application/json",
			},
			body: JSON.stringify( obj )
		}).then(response =>{
			return response.text();
		}).then(data =>{
			if( isJsonable( data ))
				return JSON.parse( data );
			
			return data;
		}).catch( error =>{
			console.error( error );
			console.log( "url fetched: ", url.href );
			//this.errorMessage( error.toString() );
			return false;
		});
	}
		
}
	

function isJsonable( data ){
		
	if( typeof data == 'string' && ( ( data.indexOf('{') == 0 && data.lastIndexOf('}') == ( data.length - 1 ) ) || ( data.indexOf('[') == 0 && data.lastIndexOf(']') == ( data.length - 1 ) ) ) && data != "[object Object]" )
		return true;
		
	return false;
}

function chunk_data( data, limit = 50 ){
		
	let remaining = data;
	let chunked   = [];
		
	for( let x = 0; remaining && x < remaining.length; x++ ){
		chunked.push( remaining.slice(0, limit ) );
		remaining = remaining.slice(limit, remaining.length );
	}
		
	if( remaining && remaining.length > limit ){
		let rechunked = chunk_data( remaining, limit );
		chunked = chunked.concat( rechunked );
	} else if( remaining && remaining.length ){
		chunked.push( remaining );
	}
			
	return chunked;
}

function generateKey(length = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}




async function runWebsocket(block, url){
    const websocket = new WebSocket(`${url}:`)
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
    const supabase         = createClient({
        SUPABASE_URL,
        SUPABASE_KEY
    });

    const channel = supabase.channel("general");
    channel.on("braodcast", )
}



