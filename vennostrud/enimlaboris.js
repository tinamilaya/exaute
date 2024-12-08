const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'swimming', 'coding'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Accessing properties
console.log(person.firstName);  // Outputs: John
console.log(person.age);        // Outputs: 30
console.log(person.hobbies[0]); // Outputs: reading
console.log(person.address.city); // Outputs: Anytown
console.log(person.fullName()); // Outputs: John Doe
