//设置方块初始位置
var box_x = 5;
var box_y = 5;


function main(){
//入口函数
init();
move();
}

//创建表格并初始化显示box
function init(){
//创建表格
	var container_box = document.getElementById("container");
	var container = "<table>";
	for(var i=0;i<11;i++){
		container +="<tr>";
		for(var j=0;j<11;j++){
			container+="<td>";
			if (i===0) {
				container+=j;
			}
			else if(j===0){
				container+=i;
			}
			container+="</td>";
		}
		container+="</tr>";
	}
	container+="</table>";
	container_box.innerHTML = container;
//todo 显示box
	
}


//挪动box

main();
