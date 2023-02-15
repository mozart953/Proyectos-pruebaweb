/*console.log("Hello World");

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
}

function showTodo(todo: ITodo){
    console.log(`${todo.title} - ${todo.text}`);
}

let myTodo: ITodo = {title: 'Eat dinner', text: 'lorem'};

showTodo(myTodo);

/*showTodo({
    title: 'Eat Dinner',
    text: 'lorem'
})*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//clases
var user = /** @class */ (function () {
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    user.prototype.register = function () {
        console.log("".concat(this.name, " esta registrado"));
    };
    user.prototype.Medad = function () {
        return this.age;
    };
    user.prototype.AgeINYears = function () {
        return this.age + " years";
    };
    user.prototype.payInvoid = function () {
        console.log("".concat(this.name, " factura pagada"));
    };
    return user;
}());
var pers = new user('persona 4', 'persona@gmail.com', 13);
//document.write(pers.register());
console.log(pers.AgeINYears());
var Members = /** @class */ (function (_super) {
    __extends(Members, _super);
    function Members(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Members.prototype.payInvoid = function () {
        _super.prototype.payInvoid.call(this);
    };
    return Members;
}(user));
var usuario = new Members(2, "Alfabet", "a@gmai.com", 23);
usuario.payInvoid();
//console.log(pers.register());
document.write(pers.email);
 * /;
//document.write(getName("persona1", " xd"));
