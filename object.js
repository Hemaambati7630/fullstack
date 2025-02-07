let person = {
    name: "MrNBT",
    age: 20,
    greet: function (name) {
      return`Hello, my name is ${this.name}`;
    },
  };
  
  console.log(person.name); 
  console.log(person.greet("hema"));
  console.log(person.age);