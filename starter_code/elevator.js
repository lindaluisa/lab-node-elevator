class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = '';
    this. floor = 0;
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    setInterval(function() {
    this.update()
   }, 1000);
  }

  stop() { 
    clearInterval(this.setInterval)
  }

  update() {
    log();
   }

  _passengersEnter() {
    call();
    if (this.waitingList === name) { 
      // know that this can't be true but for now
      // I don't know it better
     this.passengers.push(person);
     this.waitingList.shift();
     this.requests.push(this.person.destinationFloor);
     console.log ('$(name) has entered the elevator')

    }

   }
  _passengersLeave() { }

  floorUp() { 
    if (this.floor++ < this.MAXFLOOR){
    return this.requests.push(this.floor++)
    }
  }

  floorDown() {
    if (this.floor-- > 0){
    return this.requests.push(this.floor--)
   }
  }

  call() {
// since whole person object is added, the "this." stays absent, correct?
    Person.call(this, name, originFloor, destinationFloor);
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
   }

  log() {
    return 'Direction: $(this.direction) | Floor: $(this.floor)';
   }
}

module.exports = Elevator;


class Person {
  constructor(name, originFloor, destinationFloor){
  }
}