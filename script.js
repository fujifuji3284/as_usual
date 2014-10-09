$(function(){
	$("#kara").hide();
	$("#he").hide();
	var w = $(window).width();
	$("div#header").css({width:w+"px"});
	$("div#header").css({height:w/1.4375+"px"});
	$("div#header > div span").css({fontSize:w/15+"px"});
	$(window).resize(function(){
		var w = $(window).width();
		$("div#header").css({width:w+"px"});
		$("div#header").css({height:w/1.4375+"px"});
		$("div#header > div span").css({fontSize:w/15+"px"});
	});
	$("#tuka").css({top:w-250+"px",left:"35%"});
	$("#u").css({top:w-250+"px",left:"40%"});
	setTimeout(function(){
		$("#kara").css({top:"40%",left:"25%",opacity:"0.4"}).fadeIn(5000);
		$("#mi").animate({top:"-50px",left:"-90px"},600).animate({top:"-70px",left:"50px"},600).animate({top:"30%",left:"15%"},800).css({opacity:"0.4"});
		$("#ru").animate({top:"-70px",left:"50px"},600).animate({top:"-50px",left:"-90px"},600).animate({top:"30%",left:"20%"},800).css({opacity:"0.4"});
		$("#sa1").animate({top:"30%",left:"25%"},2000).css({opacity:"0.3"});
		$("#i1").animate({top:"30%",left:"30%"},2000).css({opacity:"0.3"});
		$("#to1").animate({top:"30%",left:"35%"},2000).css({opacity:"0.3"});
		$("#sa2").fadeIn(1000).animate({top:"50%",left:"30%"},2000);
		$("#i2").fadeIn(2000).animate({top:"50%",left:"35%"},2000);
		$("#to2").fadeIn(3000).animate({top:"50%",left:"40%"},2000);
		$("#he").css({top:"50%",left:"45%"}).fadeIn(4000);
	},4550);
	setTimeout(function(){
		$("#tuka").animate({top:"50%",left:"20%"},800);
		$("#u").animate({top:"50%",left:"25%"},1000);
	},4000);
	setTimeout(function(){
		setInterval(function(){
			$("#tuka").animate({top:"45%"},100,"easeInOutCubic",function(){
				$(this).animate({top:"50%"},800,"easeOutBounce");
			});
		},7000);
	},6000);
	setTimeout(function(){
		setInterval(function(){
			$("#u").animate({top:"45%"},100,"easeInOutCubic",function(){
				$(this).animate({top:"50%"},800,"easeOutBounce");
			});
		},9000);
	},6200);

	$("div#header li a,.globNav-toggle").hover(function(){
		$(this).stop().animate({backgroundColor:"#FF9900"});
	},
	function(){
		$(this).stop().animate({backgroundColor:"#fff"});
	});
	$(".globNav-inner,.globNav-toggle").css({left:"-1000px"});
	$(window).scroll(function(){
		var st = $(window).scrollTop();
		var he = $("div#header").height();
		if(st>he-185){
			$("div#header ul#high").hide();
			$(".globNav-inner,.globNav-toggle").css({left:"0px"});
		}else{
			$("div#header ul#high").show();
			$(".globNav-inner,.globNav-toggle").css({left:"-1000px"});
		}
	});
	$(".globNav-toggle").on("click", function() {
		$(this).next().slideToggle();
	});
});
