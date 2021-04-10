class Employee {

    constructor(public id:number=123,public name:string='Unknown',public salary:number=8000) {
    }
    display():void {
        console.log('Employee class function')
        console.log('Id '+this.id)
        console.log('Id '+this.name)
        console.log('Id '+this.salary)
    }
}
var emp=new Employee(101,'Ram',8000)
emp.display()
var emp1=new Employee()
emp1.display()
var emp2=new Employee(101)
emp2.display()