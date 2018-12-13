<?php
if(array_key_exists('userName', $_POST)){
        //如果有数据 再去读取
//        echo "<h1>GET_PAGE</h1>";
//            echo 'userName:'.$_GET['userName'];
//            echo '<br/>';
//            echo 'sex:'.$_GET['sex'];
//            echo '<br/>';

            echo "<h1>POST_PAGE</h1>";
            echo 'userName:'.$_POST['userName'];
//            echo '<br/>';
//            echo 'sex:'.$_POST['sex'];
    }else{
        echo 'wu';
    }

 ?>