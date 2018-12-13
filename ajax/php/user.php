<?php
$name = $_GET['username'];

//模拟
$namearr = array('jack','rose');


// 验证 某个值 是否在数组中 存在
	/*
	参数1:查询的值
	参数2:查询的数组
	参数3:判断类型 可选值
		in_array(search,array,type)
	*/
	// 检验 是否存在 并且接受返回值
	// 布尔类型 不能直接用echo输出

	$result = in_array($name,$namearr);
	if($result){
	echo 'have';
	}else{
	echo 'nothave';
	}
?>