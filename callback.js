const greetFn=(name)=> {
    console.log(`hello, ${name}!`);
}
function processName(callback){
   const name="MrNBT";
   callback(name);
}
processName (greetFn);


