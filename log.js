$(document).ready(function(){
	var x=true;
	$("#abierto").click(function(){
		if(x){
			$("#login form").slideDown(300);
			$(this).addClass(".cerrado");
			x=false;
		}
		else{
			$("#login form").slideUp(300);
			$(this).removeClass(".cerrado");
			x=true;
		}
	});

});