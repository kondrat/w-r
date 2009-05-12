jQuery(document).ready( function(){

		var sec=0;
		var int;
		var resHour,resMin, resSec;
		var resMin = "00";
		var minut = 0;
		var resHour = "00";
		var hour = 0;
		var k = 0;
		var i = 0;
						
	$('#clock1').click( function(){
			
			var firstObj = new Date();	
			
			int = setInterval(function () {
											
								var curObj = new Date();
								var t = ( curObj.getTime() - firstObj.getTime() )-(sec*1000);		

								if ( t > 999 ) { 
									sec++; 
								}	
								
								
								i = k + sec;
								
								if ( i < 10 ) {
									resSec = '0' + i;
								} else if ( i >= 10 && i < 60 ) {
									resSec = i;
								} else if ( i == 60 ) {
									resSec = "00";
									sec = 0;
									i = 0;
									k = 0;
									firstObj = new Date();
									minut++;
								}
								
								if ( minut > 0 && minut < 10 ) {
									resMin = "0" + minut;
								} else if (minut >= 10 && minut < 60) {
									resMin = minut;
								} else if ( minut == 60 ) {
									resMin = "00";
									minut = 0;
									hour++;
								}
								
								if ( hour > 0 && hour < 10 ) {
									resHour = "0" + hour;
								} else if ( hour >= 10 && hour < 24 ) {
									resHour = hour;
								} else if ( hour == 24) {
									resHour = "00";
									hour = 0;
								}
								
					
								
								$('#clock1').html(resHour + ":" + resMin + ":"+ resSec);
				}	,80);

			
		
		
		
		
		
		}
	);
	
	$('#clock2').click( function(){
		
			 clearInterval(int);
			 k = i;
			 sec = 0;
			
		
	});	
	
	

				
});