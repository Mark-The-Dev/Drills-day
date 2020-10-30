class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class dQueue{

  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    
    // let val = null;
    let node = new _Node(data);

    if (this.first === null) {
      this.first = node;
      node.prev = null;
      
    }

    if (this.last) {
      this.last.next = node;
      node.prev = this.last;
    }
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

function display(q) {
  let thisNode = q.first;
  let output = "";
  while (thisNode !== null) {
    if (thisNode !== q.first) {
      output += " <-> ";
    }
    output += `${thisNode.value}`;
    thisNode = thisNode.next;
  }
  return output;
}

function displayR(q) {
  let thisNode = q.last;
  let output = "";
  while (thisNode !== null) {
    if (thisNode !== q.last) {
      output += " <-> ";
    }
    output += `${thisNode.value}`;
    thisNode = thisNode.prev;
  }
  return output;
}

function peek(q) {

  return q.first.value;
}

function main(){
 //Q7
  let starTrekQ = new dQueue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  // starTrekQ.enqueue("Sulu");
  // starTrekQ.enqueue("Checkov");
  console.log(display(starTrekQ));
  console.log(displayR(starTrekQ));
  //console.log(peek(starTrekQ));
}

main();