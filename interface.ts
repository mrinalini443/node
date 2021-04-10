interface Abc {
    a:number
    dis():void
}

interface Bank {
    withdraw():void
    deposit():void
}

class Hdfc implements Bank {
    withdraw() {

    }
    deposit() {

    }
}

class Sbi implements Bank {
    withdraw() {

    }
    deposit() {

    } 
}

interface Employee {
    id:number
    name:string
    salary:number
    age?:number
}
let emp:Employee={"id":101,"name":"Ram","salary":101,"age":21}
let emp1:Employee={"id":102,"name":"Ravi","salary":210000}