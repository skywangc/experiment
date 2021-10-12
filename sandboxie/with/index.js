function sandbox(o) {
    with (o){
        //a=5; 
        c=2;
        d=3;
        console.log(a,b,c,d); // 0,1,2,3 //每个变量首先被认为是一个局部变量，如果局部变量与 obj 对象的某个属性同名，则这个局部变量会指向 obj 对象属性。
    }
    
}
var f = {
    a:0,
    b:1
}
sandbox(f);       
console.log(f);
console.log(c,d); // 2,3 c、d被泄露到window对象上
