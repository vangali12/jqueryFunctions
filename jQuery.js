 $(document).ready(function(){

 	$(".first h1").click(function() {
 		$(".first h1").css("color", "lightblue");
 	})

 	$(".first ol").hide()

 	$(".first h2").hover(function() {
 		$(".first ol").slideDown("slow");
 	}, function() {
 		$(".first ol").slideUp("slow");
 	})

 	$(".lastThree h3").hover(function() {
 		$(".motivation").html("Start where you are. Use what you have. Do what you can.");
 	}, function() {
 		$(".motivation").html("Shoot for the moon. If you miss you'll land among the stars.");
 	})

 	$("#append").click(function() {
 		$("#enterQuote").append("It is the cause, it is the cause, my soul,— Let me not name it to you, you chaste stars!— It is the cause. Yet I\'ll not shed her blood, Nor scar that whiter skin of hers than snow,And smooth as monumental alabaster. Yet she must die, else she\'ll betray more men, Put out the light, and then put out the light: If I quench thee, thou flaming minister, I can again thy former light restore Should I repent me: but once put out thy light, Thou cunning\'st pattern of excelling nature, I know not where is that Promethean heat That can thy light relume. When I have pluck\'d the rose, I cannot give it vital growth again. It must needs wither: I\'ll smell it on the tree. Ah balmy breath, that dost almost persuade Justice to break her sword! One more, one more. Be thus when thou art dead, and I will kill thee, And love thee after. One more, and this the last: So sweet was ne\'er so fatal. I must weep, But they are cruel tears: this sorrow\'s heavenly; It strikes where it doth love. She wakes.");
 	})

 	$("#hideText").click(function() {
 		$("#enterQuote").slideToggle("slow")
 	})

 	$("#backAndForth").click(function() {
 		$(".midTwo p").toggle();
 	})

 	$("#shakespearePortrait").click(function() {
 		$("#shakespeareFace").fadeIn("slow");
 	})

  	$("#shakespeareRemove").click(function() {
 		$("#shakespeareFace").fadeOut("slow");
 	})

  	$(".redBackground").click(function() {
  		$(".midTwo button").last().addClass("red");
  	})

  	$("#greeting").before("This will be inserted before...")

  	$("#greeting").after("...and this wil be inserted after")

  	var website = $("#shakespeareFace").attr("src");
  	$("#site").text("This is the photo source: " + website );

  	$("input").keyup(function() {
  		var fullName = $("#firstName").val() + $("#lastName").val();
  		$("#copyName").text(fullName);
  	})

 });