function animals(name,words) {
    this.name = name;
    this.speak = function(){
        console.log(words)
    }
    this.introduce = function(){
        console.log(this)
    }
}
var cat = new animals('cat','miao')
var dog = new animals('dog','wang')

cat.speak()
dog.speak()
cat.introduce()