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

		
	var first = new Date();	
		
	var resHour,resMin, resSec;
	resMin = "00";
	resHour = "00";
	$('#clock1').click( function(){
		var firstObj = new Date();
		second = new Date();
		
		
		ress = second - first;
		
		var ress1 = new Date(ress);
		
		ress2 = ress1.getSeconds();
		//alert( ress2 );
		
		setInterval( function() {
			
			var curObj = new Date();
			var t = ( curObj.getTime() - firstObj.getTime() )-(sec*1000);			
				if ( t > 999 ) { 
					sec++; 
				}			
			var i = sec;
			
				if ( i < 10 ) {
					resSec = '0' + i;
				} else if ( i >= 10 && i < 60 ) {
					resSec = i;
				} else if ( i == 60 ) {
					resSec = "00";
					sec = 0;
					firstObj = new Date();
				}
				
				
				
				
				$('#clock1').html(resHour + ":" + resMin + ":"+ resSec);
			
			
			}, 1000);		
		
		
		
		
		
		}
	);
	
	
});

jQuery(document).ready( function(){
});