
<?php
//header('location:http://www.baidu.com');//跳转到百度首页
//header('refresh:3; url=http://www.xiaomi.com');//设置页面间隔刷新

// 设置编码格式
	header('content-type:text/html; charset= utf-8');

// 测试 读取文件的 函数 注意 需要返回 file_get_contents 仅仅只是读取而已
	 echo  file_get_contents('info/news.text');

// 设置编码格式
// 需要 修改 header 告诉 浏览器 我这里返回的是 xml文件
     	header('content-type:text/xml; charset= utf-8');

// 测试 读取文件的 函数 注意 需要返回 file_get_contents
// 这里 读取一个 叫做 xml的文件 必须准备一个 .xml文件
     	 echo  file_get_contents('info/person.xml');





// 变量以`$`符号开头，其后是变量的名称
// 变量名称必须以字母或下划线开头
$a;
$b;
$a1;
$_abc;

// 变量名称不能以数字开头
// 变量名称只能包含字母数字字符和下划线（`A-z`、`0-9` 以及` _`）

//变量名称对大小写敏感（`$y` 与`$Y` 是两个不同的变量）
// 下面定义的两个变量是不同的,大写,小写x
$x;
$X;

// 字符串
$str = '123';

// 字符串连接
$str2 = '123'.'哈哈哈';

// 整数
$numA = 1; //正数
$numB = -2;//负数

// 浮点数
$x = 1.1;

// 布尔
$a = true;
$b = false;

// 数组
$arr = array('123',123);


$x=10; 
$y=6;
echo ($x + $y); // 输出 16
echo '<br>';
echo ($x - $y); // 输出 4
echo '<br>';
echo ($x * $y); // 输出 60
echo '<br>';
echo ($x / $y); // 输出 1.6666666666667
echo '<br>';
echo ($x % $y); // 输出 4
echo '<br>';
echo '你说什么';
?>