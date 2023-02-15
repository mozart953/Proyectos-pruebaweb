console.log("Hello World");

//types
var myString: string = "hello world";
myString = 22 + "";


var mynumber:number = 22;

var myBool: boolean = true;

var myVar:any = "hello";

myVar = false;

//arregle
var StringArray: string[] = ["1","2","3"];
var StringNumber: number [] = [1,2,3];
var BooleanArray: boolean [] = [true, false, true];
var AnyArray: any [] = [1,2,3,true, "hello", [], {}];

//tuple
var strinTuple:[string, number];
strinTuple = ["hello", 23];

//strinTuple =["hello",23,"",13];
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

document.write(typeof(myVoid)); 

//funciones

function obtenerSuma(num1:number,num2: number):number{
    return num1+num2;    
}

let mySun = function(num1: number | string, num2: number | string):number{
    
    if(typeof(num1)=='string'){
        num1 = parseInt(num1);
    }
    if(typeof(num2)=='string'){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}

//opcional con ? al final del parametro
function getName(nombre: string, apellido?: string):string{
    if(apellido==undefined){
        return nombre;
    }    
    return `${nombre} ${apellido}`;
}

//getName("persona1", "")

function myVoidFunction():void{
    return; 
}

//interfaces-- estructura de un objeto
interface ITodo{
    title: string;
    text: string;
};

function showTodo(todo: ITodo){
    console.log(`${todo.title} - ${todo.text}`);
}

let myTodo: ITodo = {title: 'Eat dinner', text: 'lorem'};

showTodo(myTodo);

/*showTodo({
    title: 'Eat Dinner',
    text: 'lorem'
})*/


//clases

class user {
    private name: string;
    public email: string;
    protected age: number;

    constructor (name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(`${this.name} esta registrado`);
    }

    Medad(){
        return this.age;
    }

    public AgeINYears(){
        return this.age + " years";
    }

    payInvoid(){
        console.log(`${this.name} factura pagada`);
    }

}

var pers = new user('persona 4','persona@gmail.com',13);
//document.write(pers.register());
console.log(pers.AgeINYears());

class Members extends user{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoid(){
        super.payInvoid();
    }
}

var usuario = new Members(2,"Alfabet", "a@gmai.com",23);

usuario.payInvoid();
//console.log(pers.register());
document.write(pers.email);

//document.write(getName("persona1", " xd"));