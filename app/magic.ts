class Greeter{
  saySomething(message:string = 'what up'){
    return message+' something';
  }
}
var greeter = new Greeter();
greeter.saySomething('hello');