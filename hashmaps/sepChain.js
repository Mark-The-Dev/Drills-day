class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertLastBad(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, tempNode);
    }
  }
  inserAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
      return;
    } else if (position === 1) {
      this.insertFirst(item);
      return;
    } else {
      let tempNode = this.head;
      let positionCounter = 1;
      while (positionCounter < position - 1) {
        positionCounter++;
        tempNode = tempNode.next;
      }
      let num = tempNode.next;
      tempNode.next = new _Node(item, num);
    }
  }
  insertBefore(item, prev) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = null;
      let previousNode = this.head;
      while (previousNode !== prev) {
        previousNode = previousNode.next;
        if (previousNode === null) {
          break;
        }
        tempNode = previousNode.next;
      }
      if (previousNode === null) {
        console.log("Item is not found");
        return;
      }
      previousNode.next = new _Node(item, tempNode);
    }
  }
  insertAfter(item, prev) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = null;
      let previousNode = this.head;
      while (previousNode !== prev) {
        previousNode = previousNode.next;
        if (previousNode === null) {
          break;
        }
        tempNode = previousNode.next;
      }
      if (previousNode === null) {
        console.log("Item is not found");
        return;
      }
      tempNode.next = new _Node(item, previousNode.next.next);
    }
  }
  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  findByValue(value) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.next.value !== value) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }

    previousNode.next = currNode.next;
  }
}

class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      throw new Error("Key error");
    }
    return this._hashTable[index];
  }


  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error("Key error");
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index];
      if (slot === undefined || (slot.head.value.key === key && !slot.DELETED)) {
        return index;
      }
    }
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      }
    }
  }


  set(key, value) {
    let node = {
      key,
      value,
      DELETED: false,
    };
    
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    const index = this._findSlot(key);

    if (!this._hashTable[index]) {
      let newList = new LinkedList();
      this.length++;
      //this._hashTable[index] = node;
      newList.insertFirst(node);
      //this._hashTable[index] = newList;
      this._hashTable[index] =newList;
    }
    else {
      let list = this.get(key);
      list.insertLast(node, null);

    }
    //newList.insertLast(node);
    
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure hash is unsigned - meaning non-negtive number.
    return hash >>> 0;
  }
}

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  let lotr = new HashMap();
  lotr.set("Hobbit", "Bilbo");
  //console.log(lotr.get('Hobbit'))
  lotr.set("Hobbit", "Frodo");
  // lotr.set("Wizard", "Gandalf");
  // lotr.set("Human", "Aragorn");
  // lotr.set("Elf", "Legolas");
  // lotr.set("Maiar", "The Necromancer");
  // lotr.set("Maiar", "Sauron");
  // lotr.set("RingBearer", "Gollum");
  // lotr.set("LadyOfLight", "Galadriel");
  // lotr.set("HalfElven", "Arwen");
  // lotr.set("Ent", "Treebeard");
  console.log(lotr);
}
main();
