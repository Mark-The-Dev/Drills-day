class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//Q6
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}
function peek(q) {
  return q.first;
}

function isEmpty(q) {
  if (!q.first) {
    return true;
  }
  return false;
}

function display(q) {
  let thisNode = q.first;
  let output = "";
  while (thisNode !== null) {
    if (thisNode !== q.first) {
      output += " -> ";
    }
    output += `${thisNode.value}`;
    thisNode = thisNode.next;
  }
  return output;
}

function pairDancer(arr) {
  let spares = new Queue();
  let partners = {};
  let count = 1;
  let name;
  let name2;
  let last;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("Female")) {
      if (last === "male") {
        name = arr[i];
        partners[
          `couple${count}:`
        ] = `${name} and ${name2} are dancing partners!`;
        count++;
        name = null;
        name2 = null;
        last = null;
      } else {
        name = arr[i];
        last = "woman";
      }
    }
    if (arr[i].includes("Male")) {
      if (last === "woman") {
        if (!isEmpty(spares)) {
          name2 = spares.dequeue();
        } else {
          name2 = arr[i];
        }
        partners[
          `couple${count}:`
        ] = `${name} and ${name2} are dancing partners!`;
        count++;
        name = null;
        name2 = null;
        last = null;
      } else if (last === "male") {
        spares.enqueue(arr[i]);
      } else {
        if (!isEmpty(spares)) {
          name2 = spares.dequeue();
        } else {
          name2 = arr[i];
        }
        last = "male";
      }
    }
  }

  return partners;
}

function firstToLast(q) {
  q.enqueue(q.dequeue());
}
// upped fail rate!
function oBank(q){
  console.log('Start line',display(q));
  for (let i=0; i< 10; i++){
    let d = Math.random();
    if (d > 0.75){
      firstToLast(q);
      console.log(display(q));
      console.log(`Oh no ${q.last.value} forget their paper work, For that, END OF THE LINE!`);
    } else {
      let done = q.first.value;
      q.dequeue();
      console.log(display(q));
      console.log(`Well done! ${done} has left the line`);
    }
  }
  return 'This was 10 people in 10 mins!';
}

function main() {
  //Q6:
  // let starTrekQ = new Queue();
  // starTrekQ.enqueue("Kirk");
  // starTrekQ.enqueue("Spock");
  // starTrekQ.enqueue("Uhura");
  // starTrekQ.enqueue("Sulu");
  // starTrekQ.enqueue("Checkov");
  // console.log(display(starTrekQ));
  // firstToLast(starTrekQ);
  // console.log(display(starTrekQ));
  
  
  
  
  // //console.log(peek(starTrekQ));
  // console.log(isEmpty(starTrekQ));
  // starTrekQ.dequeue();
  // starTrekQ.dequeue();
  // console.log(display(starTrekQ));
  //Q9
  // let dancers = [
  //   "Female Jane",
  //   "Male Frank",
  //   "Male John",
  //   "Male Sherlock",
  //   "Female Madonna",
  //   "Male David",
  //   "Male Christopher",
  //   "Female Beyonce",
  // ];
  // console.log(pairDancer(dancers));
  //console.log(Math.random())


  //Q10

  let bankers = new Queue;
  bankers.enqueue('Larry');
  bankers.enqueue('Jerry');
  bankers.enqueue('Fairy');
  bankers.enqueue('Mary');
  bankers.enqueue('Harry');
  bankers.enqueue('Scarey');
  bankers.enqueue('Terry');
  bankers.enqueue('Gary');
  bankers.enqueue('Darry');
  bankers.enqueue('Perry');
  //console.log(display(bankers));
  console.log(oBank(bankers));

}

main();
