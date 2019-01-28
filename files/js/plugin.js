$(document).ready(function() {
		var org_height=$(".readdetails").height();
		if((org_height<=70))
	{
	$(".readmore").hide();
	}
	$(".readdetails").css("height","70px");
	$(".details .readmore").click(function(){
	var openid=$(this).attr("id");
	var closeid=$(this).parent().find(".close1").attr("id");
	if(org_height>=70)
	{
			$(this).parent().find(".readdetails").css("height",org_height);
			$("#"+openid).hide();
			$("#"+closeid).show();
	}
	else if((org_height<=70))
	{
	$(".readdetails").css("height","70px");
	$("#independenceday").hide();
	}
			
	});
	$(".close1").click(function(){
	var closeid=$(this).attr("id");
	var openid=$(this).parent().find(".readmore").attr("id");
	$(".readdetails").css("height","70px");
	$("#"+openid).show();
			$("#"+closeid).hide();
	});
	
});