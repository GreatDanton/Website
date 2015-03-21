$(document).ready(function () {
	  

    $(function() {
		$(".toggle-nav").click(function() {
			toggleNav();
		});
        $(".toggle-nav-right").click(function() {
            toggleNavRight();
        });

	});
    
  
 
    

	function toggleNav() {
		if($(".wrapper").hasClass("show-nav")) {
			//Do things on Nav close
			$(".wrapper").removeClass("show-nav");
		} else {
			//Do things on Nav open
			$(".wrapper").addClass("show-nav");
		}
	}

    function toggleNavRight() {
        if($(".wrapper").hasClass("show-nav-right")) {
			//Do things on Nav close
			$(".wrapper").removeClass("show-nav-right");
		} else {
			//Do things on Nav open
			$(".wrapper").addClass("show-nav-right");
		}
        
	}

});