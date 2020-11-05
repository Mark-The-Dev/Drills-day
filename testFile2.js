function findLargesSub(str, count = 1) {
  let obj = {};

  if(!str.length || typeof str === typeof{} || typeof str === typeof 5){
    return;
  }

  if (str.length < count) {
    console.log("am I here?", str);
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (obj[current]) {
      if (i > count) {
        return findLargesSub(str.substring(1), i);
      }
      return findLargesSub(str.substring(1), count);
    } else {
      obj[current] = true;
    }
  }
  return str;
}

function main() {
  console.log(findLargesSub("rodrigo"));
}

main();
