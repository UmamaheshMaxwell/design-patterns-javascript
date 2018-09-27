/*************************** Factory Pattern **************************

This pattern defines an interface for creating an object, but let 
subclasses decide which class to instantiate..

Usage: The key objective of the Factory Method is extensibility. 
       Factory Methods are frequently used in applications that 
       manage, maintain, or manipulate collections of objects that 
       are different but at the same time have many characteristics 
       (i.e. methods and properties) in common. An example would 
       be a collection of documents with a mix of Xml documents, 
       Pdf documents,and Rtf documents.
       
***************************** Factory Pattern **************************/

function Factory() {
    this.createEmployee = (type) => {
        let employee = null;

        switch (type) {
            case 'fulltime':
                employee = new FullTime();
                break;
            case 'parttime':
                employee = new PartTime();
                break;
            case 'temporary':
                employee = new Temporary();
                break;
            case 'contractor':
                employee = new Contractor();
                break;
        }

        employee.type = type;
        employee.getInfo = function() {
            console.info(`${this.type} : rate ${this.hourly}/hour`)
        }
        return employee;
    }
}

function FullTime() {
    this.hourly = '50$'
}

function PartTime() {
    this.hourly = '45$'
}

function Temporary() {
    this.hourly = "40$"
}

function Contractor() {
    this.hourly = "75$"
}

const factory = new Factory();

const employees = [
    factory.createEmployee('fulltime'),
    factory.createEmployee('parttime'),
    factory.createEmployee('temporary'),
    factory.createEmployee('contractor')
]

employees.forEach((employee) => {
    employee.getInfo();
})