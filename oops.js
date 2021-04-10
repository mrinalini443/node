var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        if (id === void 0) { id = 123; }
        if (name === void 0) { name = 'Unknown'; }
        if (salary === void 0) { salary = 8000; }
        this.id = id;
        this.name = name;
        this.salary = salary;
        /* this.id=id
         this.name=name
         this.salary=salary*/
    }
    Employee.prototype.display = function () {
        console.log('Employee class function');
        console.log('Id ' + this.id);
        console.log('Id ' + this.name);
        console.log('Id ' + this.salary);
    };
    return Employee;
}());
var emp = new Employee(101, 'Ram', 8000);
emp.display();
var emp1 = new Employee();
emp1.display();
var emp2 = new Employee(101);
emp2.display();
