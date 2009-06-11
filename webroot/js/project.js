jQuery(document).ready( function(){

	$(".projectTitle").click(function(){
		/*
			if ($(".projectMain").is(":hidden")) {
		
				$(".projectMain").animate( { height:"100px", backgroundColor:"red" }, { queue:false, duration:2000 } )
					.animate( { fontSize:"24px" }, 1500 )
					.animate( { borderRightWidth:"15px" }, 1500);
				
			}else {
				$(".projectMain").hide();
			}
				

		*/


      if ( $(".projectMain").is(":hidden") ) {
        $(".projectMain").slideDown("slow");
      } else {
        $(".projectMain").slideUp();
      }

		});
	
	
	
});

