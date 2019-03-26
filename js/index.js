window.onload = function() {
	//获取imgList
	var imagelist = document.getElementById("imagelist");
	//获取页面中所有的img标签
	var imgs = document.getElementsByClassName("one-imgs");
	//设置imglist的宽度
	imagelist.style.width = 1519 * imgs.length + "px";
	//获取导航按钮
	var anniu = document.getElementById("one-anniu");
	//默认显示图片的索引
	var index = 0;
	//获取所有的a
	var allA = document.getElementsByClassName("lianjie");
	//设置默认选中的效果
	allA[index].style.backgroundColor = "black";
	//创建一个方法用来设置选中的a
	function setA() {
		//判断当前索引是否是最后一张图片
		if(index >= imgs.length - 1) {
			//则将index设置为0
			index = 0;
			imagelist.style.left = 0;
		}
		for(var i = 0; i < allA.length; i++) {
			allA[i].style.backgroundColor = "";
		}
		allA[index].style.backgroundColor = "black";
	};
	//定义一个自动切换的定时器的标识
	var timer;
	//创建一个函数，用来开启自动切换图片
	function autoChange() {
		//开启一个定时器，用来定时去切换图片
		timer = setInterval(function() {
			//使索引自增
			index++;
			//判断index的值
			index %= imgs.length;
			//执行动画，切换图片
			move(imagelist, "left", -1519 * index, 20, function() {
				//修改导航按钮
				setA();
			});

		}, 3000);

	}

	function getStyle(obj, name) {

		if(window.getComputedStyle) {
			//正常浏览器的方式，具有getComputedStyle()方法
			return getComputedStyle(obj, null)[name];
		} else {
			//IE8的方式，没有getComputedStyle()方法
			return obj.currentStyle[name];
		}

	}

	function move(obj, attr, target, speed, callback) {
		//关闭上一个定时器
		clearInterval(obj.timer);

		//获取元素目前的位置
		var current = parseInt(getStyle(obj, attr));

		//判断速度的正负值
		//如果从0 向 800移动，则speed为正
		//如果从800向0移动，则speed为负
		if(current > target) {
			//此时速度应为负值
			speed = -speed;
		}
		//开启一个定时器，向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
		obj.timer = setInterval(function() {
			//获取原来的left值
			var oldValue = parseInt(getStyle(obj, attr));
			//在旧值的基础上增加
			var newValue = oldValue + speed;
			//向左移动时，需要判断newValue是否小于target
			//向右移动时，需要判断newValue是否大于target
			if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
				newValue = target;
			}
			obj.style[attr] = newValue + "px";
			if(newValue == target) {
				//达到目标，关闭定时器
				clearInterval(obj.timer);
				//动画执行完毕，调用回调函数
				callback && callback();
			}

		}, 30);
	}
	//为所有的超链接都绑定单击响应函数
	for(var i = 0; i < allA.length; i++) {
		//为每一个超链接都添加一个num属性
		allA[i].num = i;
		//为超链接绑定单击响应函数
		allA[i].onclick = function() {
			//关闭自动切换的定时器
			clearInterval(timer);
			//获取点击超链接的索引,并将其设置为index	
			index = this.num;
			//设置选中的a
			setA();
			//使用move函数来切换图片
			move(imagelist, "left", -1519* index, 20, function() {
				//动画执行完毕，开启自动切换
				autoChange();
			});
		};
	}
	//开启自动切换图片
	autoChange();
};
//改变 HTML图像
function changeImage1() {
	element1 = document.getElementById('img1')
	if(element1.src.match("food1")) {
		element1.src = "images/food.png";
	} else {
		element1.src = "images/food1.png";
	}
}
function changeImage2() {
	element2 = document.getElementById('img2')
	if(element2.src.match("trval1")) {
		element2.src = "images/trval.png";
	} else {
		element2.src = "images/trval1.png";
	}
}
function changeImage3() {
	element3 = document.getElementById('img3')
	if(element3.src.match("school1")) {
		element3.src = "images/school.png";
	} else {
		element3.src = "images/school1.png";
	}
}
function changeImage4() {
	element4 = document.getElementById('img4')
	if(element4.src.match("history1")) {
		element4.src = "images/history.png";
	} else {
		element4.src = "images/history1.png";
	}
}
function changeImage5() {
	element5 = document.getElementById('img5')
	if(element5.src.match("science1")) {
		element5.src = "images/science.png";
	} else {
		element5.src = "images/science1.png";
	}
}