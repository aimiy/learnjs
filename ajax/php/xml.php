<?php
//在php中如果要使用xml传输数据,需要使用header()设置返回的内容为xml

header('content-type:text/xml;charset=utf-8');

// 读取xml文件 并返回
	echo file_get_contents('../xml/star.xml');
?>