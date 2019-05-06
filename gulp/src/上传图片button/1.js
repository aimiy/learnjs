
//存储的封装
var NEWS = (function(){
	var prefix = 'news';
     //防止覆盖别人的key,加一个前缀，因为storage在同一个域是共享的
     var StorageGetter = function(key){
     	return localStorage.getItem(prefix + key);
     }
     var StorageSetter = function(key,val){
     	return localStorage.setItem(prefix + key,val);
     }
     //暴露出来
     return {
     	StorageGetter:StorageGetter,
     	StorageSetter:StorageSetter
     }
 })();