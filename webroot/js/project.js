jQuery(document).ready( function(){

	$(".projectTitle, .projectMainClose , .myProject").click(function(){


   		if ( $(".projectMain").is(":hidden") ) {
            $(".projectMain").slideDown("slow");
						$(".projectTitle").text('close id').css({'color' : 'blue'});
          } else {
            $(".projectMain").slideUp();
						$(".projectTitle").text('switch projects').css({'color' : '#000'});
          }

    });

		
		$(".newProject").click(function () {
      $(".newProjectWrapper").toggle();
      return false;
    });
    
		$("a.projectEdit").click(function () {
			var hide = true;
			if ( $(this).parents(".projectList").find(".projectDataEdit").is('.hide') ) {
				var hide = false;
				alert(hide);
			}			
		    $("div.projectDataEdit").each(function (i) {
					if( $("div.projectDataEdit").not('.hide') ) {
						$("div.projectDataEdit").addClass('hide');
					}
				});
			if ( hide != false ) {
     			$(this).parents(".projectList").find(".projectDataEdit").removeClass('hide');
     	}
      return false;
    });
    
		/*
		$('.projectSubmit').click(function(){
			$(this).parents("form:first").ajaxSubmit({
				success: function(responseText, responseCode) {
						$('#ajax-save-message').hide().html(responseText).fadeIn();					
						//$('#ajax-save-message').fadeOut(5000);
					},
				resetForm: true
				});
			return false;
		})
		*/
		$(' a img.pageImgPrev').hover(	
			function(){
				$(this).attr({src: "/w-r/img/icons/left_arrow2.png"});
			},
			function(){
				$(this).attr({src: "/w-r/img/icons/left_arrow.png"});				
			}			
		);			
		
		$(' a img.pageImgNext').hover(	
			function(){
				$(this).attr({src: "/w-r/img/icons/right_arrow2.png"});
			},
			function(){
				$(this).attr({src: "/w-r/img/icons/right_arrow.png"});				
			}			
		);
		
		$('.projectActions a ').hover(	
			function(){
				$(this).find('img.projectDelImg').attr({src: "/w-r/img/icons/delete.png"});
			},
			function(){
				$('img.projectDelImg').attr({src: "/w-r/img/icons/delete_2.png"});				
			}			
		);	
			
		$('.projectActions a').hover(	
			function(){
				$(this).find('img.projectEditImg').attr({src: "/w-r/img/icons/edit.png"});
			},
			function(){
				$('img.projectEditImg').attr({src: "/w-r/img/icons/edit_2.png"});				
			}			
		);		
				
});

