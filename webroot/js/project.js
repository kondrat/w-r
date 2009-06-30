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
			//getting the object status
			var ttm2 = $(this).parents(".projectList").find(".projectDataEdit");
    			if ( $(ttm2).is('.hide') ) {
     				var hide = true;
     			} else {
     				var hide = false;
     			}
			//hiding each object
		    $("div.projectDataEdit").each(function (i) {
					if( $("div.projectDataEdit").not('.hide') ) {
						$("div.projectDataEdit").addClass('hide');
					}
				});
				//if it was hidden showing it.
				if ( hide == true ) {
     			$(this).parents(".projectList").find(".projectDataEdit").toggleClass('hide');
     		}

      return false;
    });
  
		$(".colorPicker").click(function () {
			var colorCode = $(this).text();
			var projectEdit = $(this).parents(".projectList").children('.projectPreview');
			$(projectEdit).css({'background-color':colorCode,'color':'#000'});
			$(".projectList input:eq[3]").attr({'value': colorCode});
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

