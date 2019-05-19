const square = x => x * x;

console.log(square(9));

const user = {
    name: 'Jordi',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayByeAlt (a, b, c) {
        console.log(arguments);
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(`Bye. I'm ${this.name}`);
    }
};

user.sayByeAlt(1,2,3,4,5,6);

//conclusió!! si necessites accedir a "this" o "arguments", no utilitzar arrow functions, ja que 
//fan referència a l'entorn global i no a l'específic de l'objecte on s'estan definint. Millor utilitzar regular functions.