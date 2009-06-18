jQuery(document).ready( function(){

	$(".projectTitle, .projectMainClose , .myProject").click(function(){
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
			$(".projectTitle").text('close id').css({'color' : 'blue'});
          } else {
            $(".projectMain").slideUp();
			$(".projectTitle").text('switch projects').css({'color' : '#000'});
          }

    });
		
		$(' a img.pageImgPrev').hover(	
			function(){
				var srcImg = $(this).attr("src");
				$(this).attr({src: "/w-r/img/icons/left_arrow2.png"});
			},
			function(){
				$(this).attr({src: "/w-r/img/icons/left_arrow.png"});				
			}			
		);		
		
		
		
		
		$(' a img.pageImgNext').hover(	
			function(){
				var srcImg = $(this).attr("src");
				$(this).attr({src: "/w-r/img/icons/right_arrow2.png"});
			},
			function(){
				$(this).attr({src: "/w-r/img/icons/right_arrow.png"});				
			}			
		);
	
});

