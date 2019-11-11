$(function(){
	$(".logo-box").mouseenter(function(){
		$(".logo2").stop().animate({height:"50px"})
	}).mouseleave(function(){
		$(".logo2").stop().animate({height:"0px"})
	})
	//页数样式
	$(".button li a").click(function(){
		for(var i=0;i<$(this).length;i++)
		{
			$(".button li a").css("background","#ccc")
			$(".button li a").css("color","#337AB7")
		}
		$(this).css("background","#15A9D4");
		$(this).css("color","#fff");
	})
//  选择语言
    $(".language li").click(function(){
    	$(".language>a").text($(this).text()).append("<span class='caret'></span>")
    })
//	侧边栏
    $(".sidebar").click(function(){
    	$(this).stop().animate({"right":"0"})
    }).mouseleave(function(){
		$(this).stop().animate({"right":"-50px"})
    })
     // 返回顶层
    addEventListener("mousewheel",function(){
    	//scrollTop返回当前文档垂直滚动距离
   	var scroll_1=document.body.scrollTop||document.documentElement.scrollTop
   	if(scroll_1>300)
   	{
   		$(".backtop").css("display","block")
   	}
   	else
   	{
   		$(".backtop").css("display","none")
   	}
   	
   	$(".backtop").click(function(){
   		document.body.scrollTop = document.documentElement.scrollTop=0;
   		$(".backtop").css("display","none")
   		
   	})  	
   })
})