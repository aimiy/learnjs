<?php
	header('Content-Type:text/html;charset= utf-8');
	// 将聊天的内容 抽取到 json文件中
	// 读取json文件
	$str = file_get_contents('./xml/stars.json');
	 echo $str;
 ?>