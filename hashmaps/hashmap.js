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
    return this._hashTable[index].value;
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    const index = this._findSlot(key);

    if (!this._hashTable[index]) {
      this.length++;
    }
    this._hashTable[index] = {
      key,
      value,
      DELETED: false,
    };
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
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
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

function removeDupes(s) {
  let newS = "";

  for (let i = 0; i < s.length; i++) {
    if (!newS.includes(s[i])) {
      newS += s[i];
    }
  }
  return newS;
}

function permPalin(s) {
  for (let i = 0; i < s.length; i++) {
    s = s[s.length - 1] + s.substring(0, s.length - 1);
    if (s.split("").reverse().join("") === s) {
      return true;
    }
  }
  return false;
}

// Grps anagram inputs from an array into a 2d array of anagram matches

//input ex. ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']

//ouput ex. [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
function anagramGrp(arr) {
  let hash = {};


  for (let i = 0; i < arr.length; i++) {
    let val = 0;
    for (let j = 0; j < arr[i].length; j++) {
      val += arr[i][j].charCodeAt(arr[i][j]);
    }
    if (!hash[val]) {
      hash[val] = [arr[i]];
    } else {
      hash[val].push(arr[i]);
    }
  }
  //console.log(hash);
  return Object.values(hash);
  
}

function main() {
  let lotr = new HashMap();
  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  console.log(lotr);

  // Have 9 values, added 11, duplicate keys were reset

  console.log(lotr.get("Maiar"));
  console.log(lotr.get("Hobbit"));
  // Values are the replaced values
  // capacity is 24.
  // console.log('mod here',10%11)

  //Q2
  // const WhatDoesThisDo = function(){
  //   let str1 = 'Hello World.';
  //   let str2 = 'Hello World.';
  //   let map1 = new HashMap();
  //   map1.set(str1,10);
  //   map1.set(str2,20);
  //   let map2 = new HashMap();
  //   let str3 = str1;
  //   let str4 = str2;
  //   map2.set(str3,20);
  //   map2.set(str4,10);

  //   console.log(map1.get(str1));
  //   console.log(map2.get(str3));

  // };
  // logs 'Hello World', 20 and 'Hello World', 10

  //Q4
  console.log(removeDupes("google"));
  console.log(removeDupes("google all that you think can think of"));

  // let s = 'acecarr'
  // s = s[s.length - 1] + s.substring(0, s.length - 1);
  // console.log(s)
  //Q5
  // console.log(s.split("").reverse().join(""))
  // console.log(permPalin('acecarr'));
  // console.log(permPalin('north'));

  //Q6
  console.log(
    anagramGrp(["east", "cars", "acre", "arcs", "teas", "eats", "race"])
  );
  //ouput ex. [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
}

main();
