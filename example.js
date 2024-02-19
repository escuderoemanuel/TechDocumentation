class Counter {

  static globalCounter = 0;

  constructor(name) {
    this.name = name;
    this.counter = 0;
  }

  getResponsable = () => {
    return this.name
  }

  count = () => {
    this.counter++, Counter.globalCounter++;
  }

  getIndividualCounter = () => {
    this.counter++;
  }

  getGlobalCounter = () => {
    Counter.globalCounter++;
  }
}

let counter1 = new Counter('John');
let counter2 = new Counter('Mary');
const responsable1 = counter1.getResponsable();
const responsable2 = counter2.getResponsable();
console.log('Responsable 1:', responsable1);
console.log('Responsable 2:', responsable2);

counter1.count();
counter1.count();
counter2.count();
console.log('globalCounter:', Counter.globalCounter);
console.log('counter1:', counter1.counter);
console.log('counter2:', counter2.counter);
