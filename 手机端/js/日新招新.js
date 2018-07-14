window.onload = function(){
	$('.fir').click(function(){
		// $('.page2').addClass('add');

		// $('.page1').addClass('add1');
		 $('.page2').css({"display":"inherit"});
		 $('.page1').css({"display":"none"});
		 	$('.page2').css({"display":"block"});
	});
	$('.two').click(function(){
		// $('.page2').addClass('add');

		// $('.page1').addClass('add1');
		 $('.page1').css({"display":"inherit"});
		 $('.page3').css({"display":"inherit"});
		 $('.page1').css({"display":"none"});
		 	$('.page3').css({"display":"block"});
	});
	$('.thr').click(function(){
		 $('.page1').css({"display":"inherit"});
		 $('.page4').css({"display":"inherit"});
		 $('.page1').css({"display":"none"});
		 $('.page4').css({"display":"block"});
	});
	$('.for').click(function(){
		 $('.page1').css({"display":"inherit"});
		 $('.page5').css({"display":"inherit"});
		 $('.page1').css({"display":"none"});
		 $('.page5').css({"display":"block"});
	});
	$('.fiv').click(function(){
		 $('.page1').css({"display":"inherit"});
		 $('.page6').css({"display":"inherit"});
		 $('.page1').css({"display":"none"});
		 $('.page6').css({"display":"block"});
	});
	$('.six').click(function(){
		 $('.page1').css({"display":"inherit"});
		 $('.page7').css({"display":"inherit"});
		 $('.page1').css({"display":"none"});
		 $('.page7').css({"display":"block"});
	});
	$('.back1').click(function(){
		 $('.page1').css({"display":"inherit"});
		 $('.page2').css({"display":"inherit"});
		 $('.page3').css({"display":"inherit"});
		 $('.page4').css({"display":"inherit"});
		 $('.page5').css({"display":"inherit"});
		 $('.page6').css({"display":"inherit"});
		 $('.page7').css({"display":"inherit"});
		 $('.page2').css({"display":"none"});
		 $('.page3').css({"display":"none"});
		 $('.page4').css({"display":"none"});
		 $('.page5').css({"display":"none"});
		 $('.page6').css({"display":"none"});
		 $('.page7').css({"display":"none"});
		 $('.page1').css({"display":"block"});
	});



}
// $(document).ready(function(){
//       $("#hold").click(function(){ 
// 		$.ajax({ 
// 		    type: "POST", 	
// 			url: "H:/Xampp/htdocs/ajaxdemo/text.php",
// 			data: {
// 				name: $("#name").val(), 
// 				school: $("#school").val(), 
// 				QQ: $("#QQ").val(), 
// 				phone: $("#phone").val(),
// 				want: $("#want").val()
// 			},
// 			dataType: "json",
// 			success: function(data){
// 				if (data.success) { 
// 					$("#createResult").html(data.msg);
// 				} else {
// 					$("#createResult").html("出现错误：" + data.msg);
// 				}  
// 			},
// 			error: function(jqXHR){     
// 			   alert("发生错误：" + jqXHR.status);  
// 			},     
// 		})
// 	}
// }
// 	