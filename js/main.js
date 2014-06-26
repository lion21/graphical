/*  
Susan Todd

*/
/*==========ToolTip===========================*/
(function($){
	console.log("ready");//ready


	$(".masterTooltip").hover(function()   {

		var title=$(this).attr("title");//setting title = current "title"

		$(this).data("tipText", title)
			   .removeAttr("title");

		$('<p class="tooltip"></p>').text(title)
									.appendTo("body")//append the title info to the body
									.fadeIn("slow")  ;

		//close hover, chain the hover out and remove tooltip fn						
	}, function(){

		//hover out and remove from page after use
		$(this).attr("title",  $(this).data("tipText") );

		$(".tooltip").remove();

		//chain mousemove for cursor position
	}).mousemove (function(e){

		var mousex=e.pageX + 20;//getting x-coordinate on pg-horizontal
		var mousey=e.pageY +10;//y co-ordiante-vertical

		$(".tooltip").css({top:mousey, left:mousex})
						 

	});//close tooltip fn

/*+++++++++++BUTTONS++++++++++++++++++++++++++++++++++++++++++++*/

   //take user from project page back to the dashboard/admin page
   $("#homeBtn").on("click", function(e){
   	  //homeBtn 
		e.preventDefault();

		window.location.assign("index.html");//go from projects.html back to dashboard
    });


	$("#coffeeBtn").on("click", function(e){
		
		e.preventDefault();

		window.location.assign("coffee.html");
	});//coffeeBtn" 


	$("#contactBtn").on("click", function(e){
		
		e.preventDefault();

		window.location.assign("contact.html");
	});// "contactBtn"


	$("#404Btn").on("click", function(e){
		//class="taskbtn" >
		e.preventDefault();

		window.location.assign("404.html");
	});// "404Btn"


/*===========Accordian for Admin/Dashboard Page=============*/
		
  $("ul.tabs").each(function() {
	//keeping track of the active tab
	//context of $(this) = $active  //find anchors
	var $active,$content,$links=$(this).find('a');

    //if location.hash matches one of the links then make it active
    //if not then use the first tab as the active tab

    //we will hide the content tabs thtat are not non-active           //setting tabs at index 0

    $active = $($links.filter( '[href= "  '+location.hash+'  " ]' )[0]   || $links[0] );

    //adding class .active
    $active.addClass('active');


    $content = $($active[0].hash);


    //hide non-active info from other 2 tabs
    $links.not($active).each(function(){ 
		//this anochor hide it
	    $(this.hash).hide();
    });//close links not active



     //Bind this to  a click event
	$(this).on('click','a' , function(e){

	   //remove class active after use
	   $active.removeClass('active');
	   $content.hide();


       //updating tabs w/ active class 
	   $active = $(this);
	   $content = $(this.hash);


       //make tab active and show the content
	   $active.addClass('active');
	   $content.show();

	   //prevent anchor defaault click action
	   e.preventDefault();
 
	});//close click event
 
});//close tabs 

/*============select a status for projects=========*/

$("#selectable").selectable();
$("#projectstatus").buttonset();
//must add the ids to my html for the jq-ui to work

/*=========Sortable from JQuery UI=================*/

//allows you to sort the projects on the projects page
 $( "#sortable" ).sortable();
 $( "#sortable" ).disableSelection();
  

/*==========draggable/drppable===================*/
//code for dragging  and dropping currently applied to images

$(function() {
	$("#draggable").draggable();
	//$("#droppable").droppable();
		
});
	

})(jQuery); // end private scope


