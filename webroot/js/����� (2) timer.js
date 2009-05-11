jQuery(document).ready( function(){

		
		var base = 60;
		var clocktimer,dateObj,dh,dm,ds,ms;
		var readout='';
		var h=1;
		var min=1;
		var tm=1;
		var sec=0;
		var ts=0;
		var ms=0;
		var show=true;
		var init=0;
		var ii=0;

		function clearALL() {
			clearTimeout(clocktimer);
			h=1;m=1;tm=1;s=0;ts=0;ms=0;
			init=0;
			show=true;
			readout='00:00:00.00';
			document.clockform.clock.value=readout;
			var CF = document.clockform;
			ii = 0; 
		}

		function startTIME() {
			var cdateObj = new Date();
			//alert(dateObj.getTime());
			var t = ( cdateObj.getTime() - dateObj.getTime() )-(s*1000);
			//alert(cdateObj.getTime() - dateObj.getTime());
			if (t>999) { 
				sec++; 
			}
			
			if (s>=(m*base)) {
				ts=0;
				m++; 
			} else {
				ts=parseInt((ms/100)+s);
				if(ts>=base) { 
					ts=ts-((m-1)*base); 
				} 
			}
			
			if (m>(h*base)) { 
				tm=1;
				h++; 
			} else {
				tm=parseInt((ms/100)+m);
				if(tm>=base) { 
					tm=tm-((h-1)*base); 
				} 
			}
			
			ms = Math.round(t/10);
			if (ms>99) {ms=0;}
			if (ms==0) {ms='00';}
			if (ms>0&&ms<=9) { ms = '0'+ms; }
			
			if (ts>0) {
				 ds = ts; if (ts<10) { ds = '0'+ts; }
			} else {
				 ds = '00'; 
			}
			dm=tm-1;
			if (dm>0) {
				 if (dm<10) { dm = '0'+dm; }
			} else {
				 dm = '00'; 
			}
			dh=h-1;
			if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; }
			
			readout = dh + ':' + dm + ':' + ds + '.' + ms;
			if (show==true) { 
				//document.clockform.clock.value = readout;
				$('#clock1').html(readout); 
			}
			
			clocktimer = setTimeout("startTIME()",1);
			
		}
		
		
		function startTIME2() {

			setInterval( function() {
				
				var cdateObj = new Date();
				var t = ( cdateObj.getTime() - dateObj.getTime() )-(sec*1000);
				
				if ( t > 999 ) { 
					sec++; 
				}

				if ( sec >= (min*base) ) {
					ts=0;
					min++; 
				} else {
					ts=parseInt((ms/100)+sec);
					if(ts>=base) { 
						ts=ts-((min-1)*base); 
					} 
				}				
					
				if ( min > (h*base) ) { 
					tm=1;
					h++; 
				} else {
					tm=parseInt((ms/100)+min);
					if(tm>=base) { 
						tm=tm-((h-1)*base); 
					} 
				}			
				
				ms = Math.round(t/10);
				if (ms>99) {ms=0;}
				if (ms==0) {ms='00';}
				if (ms>0&&ms<=9) { ms = '0'+ms; }
				
				if ( ts > 0 ) {
					 ds = ts; if (ts<10) { ds = '0'+ts; }
				} else {
					 ds = '00'; 
				}
				dm=tm-1;
				if ( dm > 0 ) {
					 if (dm<10) { dm = '0'+dm; }
				} else {
					 dm = '00'; 
				}
				dh=h-1;
				if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; }
				
				readout = dh + ':' + dm + ':' + ds ;
			
				if (show==true) {					
				 	$('#clock1').html(readout);
				}
			}, 100);			

									
			//setTimeout( "startTIME2()" , 1);
			
			
		}

		
		
				
		function findTIME() {
			if (init==0) {
				
				dateObj = new Date();
				startTIME();
				init=1;
			} else { 
				if(show==true) {
					show=false;
				} else { 
					show=true; 
				} 
			} 
		} 
		

	$('#clock1').click( function(){
			if (init==0) {
				dateObj = new Date();
				startTIME2();
				init=1;
				
			} else { 
				if(show==true) {
					show=false;
				} else { 
					show=true; 
				} 
			}
			
		} 
	);
	
	
});

jQuery(document).ready( function(){
});