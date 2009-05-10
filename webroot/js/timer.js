jQuery(document).ready( function(){
	$('#clock1').click( function(){
		setInterval(
		
				function() {
					var time = new Date();
					var sec = time.getSeconds();
					
					if (time.getSeconds() < 10 ) {
						testset = "0";
					} else {
						testset = "";
					}			
					var currentTime =  ( (time.getHours()<10) ? "0" : "") + time.getHours() + ":"+ ( (time.getMinutes()<10) ? "0" : "" ) + time.getMinutes() + ":" 
					+ testset + time.getSeconds() ;
					
					$('#clock1').html( currentTime );
				},
				1000
		 );
	});
});