<?php
echo file_get_contents('../xml/stars.json');


//* **json_decode()**方法: 将`json`字符串转化为变量
//* **json_encode()**方法: 将变量转化为`json`字符串
//
//* **示例代码:**
//    header("Content-Type:text/html;charset=utf-8");
//    // json字符串
//    $jsonStr = '{"name":"itcast","age":54,"skill":"歌神"}';
//    // 字符串转化为 php对象
//      print_r(json_decode($jsonStr));
//
//      echo "<br>";
//      // php数组
//      $arrayName = array('name' =>'littleFox' ,'age' => 13 );
//      // php对象 转化为 json字符串
//      print_r(json_encode($arrayName));
?>