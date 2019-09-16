$(function(){
	// 进入页面自动加载首页
	$(".mb_nav").css('display', 'none');
	$("#wrapper").load("./pages/homepage.html");

	// 点击首页标题出现首页页面
	$(".title").on("click",function(){
		$(".mb_nav").css('display', 'none');
		var url = $(this).attr("url");
		$(".left_nav>li").removeClass("current");
		$("#wrapper").load(url);
	})

	// 点击列表时跳转页面
	$("ul.left_nav").on("click","li",function(){
		$(".mb_nav").css('display', 'block');
		// 获取a标签的值进行判断
		switch($(this).find("a").text()){
			case "顾客管理":
				$("span#span_c").text("顾客管理");
				break;
			case "员工管理":
				$("span#span_c").text("员工管理");
				break;
			case "分类管理":
				$("span#span_c").text("分类管理");
				break;
			case "产品管理":
				$("span#span_c").text("产品管理");
				break;
			case "订单管理":
				$("span#span_c").text("订单管理");
				break;
			case "评论管理":
				$("span#span_c").text("评论管理");
				break;
		}
		var url = $(this).attr("url");
		$(".left_nav>li").removeClass("current");
		$(this).addClass("current");
		$("#wrapper").load(url);
	})

});