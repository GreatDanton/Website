$(document).ready(function () {
  $(".current-link").css("color", "#A29F99");
    $(".main-banner").hide().fadeIn(3000);
         
   $(".back-to-top").click(function() {
      $("html, body").animate({scrollTop: 0}, 1000);
       return false;
    });

  
   $   
    
    
    
    /*############### MENI resolution 768px###################### */
    $(".navigation-button").click(function (e) {

        e.stopPropagation();
        if ($(".navigation-slider").css("right") === "-200px"){
            $(".navigation-slider").animate({
                right: "0px"   
            }, 200);
        }
        
        else {
            $(".navigation-slider").animate({
                right: "-200px"
            }, 200);
        }
    });
    
   $(document).click(function (event) {
        if (!$(event.target).closest(".navigation-slider").length) {
            $(".navigation-slider").animate({
                right: "-200px"
            }, 200);
        }
    });
    
    /*####################COMMENTS##############################*/
    $(".comment-text").keydown(function(e) {
        if(e.which === 13) {
            $("this.form").submit();
            return false;
        }
    });

    $('.comment-text').keydown(function(event) {
        var post = $(".comment-text").val();
        if (event.which === 13) {
        $("<li>").text(post).prependTo(".posts");
        $(".comment-text").val("");
     }
    });

        $(".btn-post").click(function() {
        var post = $(".comment-text").val();        
        $("<li>").text(post).prependTo(".posts");
        $(".comment-text").val("");
        $(".btn-post").addClass("disabled");
    });
    
    $(".comment-text").keyup(function() {               /*disable button when there is no text in comment-text */
       var postlength = $(".comment-text").val().length;
        if(postlength == 0) {
            $(".btn-post").addClass("disabled");
        }
        
        else if(postlength <= 0) {
            $(".btn-post").addClass("disabled");
        }
       
        else {
            $(".btn-post").removeClass("disabled");
        }
    });
    
        $(".btn-post").addClass("disabled"); /*btn post disabled by default*/
    
    $(".posts").mouseenter(function() {      /*show edit, delete,... buttons*/
       $(".user-actions").appendTo(".posts").fadeIn("slow");
        });
    
    $(".posts").mouseleave(function() {
        $(".user-actions").fadeOut("slow");
    });
    
    /*#########################################################################*/
    


    
   
    
   
  
    
    
    });

  
        


    
      
    
    
