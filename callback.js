
let counter = 0;
 function getData (){

  console.log('My name is ' + this.name)
}

function doSomeMagic(fn,d){
  let timer;
  return function(){
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context,args);
      // getData();
    }, d);
  }

}

const amy = {
  name: 'amy',
  speak: doSomeMagic(getData,300),
}
amy.speak()

const betterFunction = doSomeMagic(getData,300) 