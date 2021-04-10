function add(a:number,b:number) {
    let sum=a+b
    console.log('Sum is '+sum)
}
add(10,20)

let fun=function(name:string):string{
    return 'Welcome '+name
}
console.log(fun('Ram'))