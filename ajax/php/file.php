<?php

//sleep(5);
//print_r($_FILES);php输出如下
//Array ( [picture] => Array ( [name] => miao.jpg [type] => image/jpeg [tmp_name] => E:\wamp\wamp64\tmp\phpA7DF.tmp [error] => 0 [size] => 199923 ) )

    sleep(5);// 让服务器休息一会,方便我们查看上传的临时文件
    // 第一个参数是 规定要移动的文件
    // 第二个参数是 规定文件的新位置
    move_uploaded_file($_FILES['picture']['tmp_name'], 'G:\git\exercise\ajax\img/'.$_FILES['picture']['name']);
?>