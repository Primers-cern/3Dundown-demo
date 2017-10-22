$(function() {
	
	// 鼠标进入后开始动画
	$(".demo-box").mouseenter(function(){

		// 获取中心点，同时也是半轴长度
		var halfX = $(this).width()/2;
		var halfY = $(this).height()/2;

		//给3D主题绑定鼠标移动事件
		$(".main").mousemove(function(e){
			// 获取鼠标在元素内位置
			// 用父元素的坐标模拟该元素坐标
			// 防止在3D运动时被影响
			var mouseX = e.pageX - $(".demo-box").offset().left;
			var mouseY = e.pageY - $(".demo-box").offset().top;
			
			// 计算出坐标位置的百分比
			var Y = ( mouseX / halfX - 1 ).toFixed(2);
			var X = ( 1 - mouseY / halfY ).toFixed(2);

			// 设定倾斜样式和阴影位移
	      	$(".main").css({
	       		"transform": "translate(-50%,-50%) " + "rotateY(" + Y*3 + "deg) " + "rotateX(" + X*4 + "deg)",
      			// 这个translate是居中时设定的，所以不能丢。
      			"box-shadow": -Y*20 + "px " + X*20 + "px " + "50px #666"
      		});
		});
	});

	// 鼠标离开时复位
	$(".demo-box").mouseleave(function() {
	    $(".main").css({
	      "-webkit-transform": "translate(-50%,-50%)",
	      "box-shadow": "0 0 50px #666"
	    });
  	});


});