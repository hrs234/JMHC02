let a = "UKUB UK AMIL";
let convert = a.split(" ");
let res = [];
let temp = [];
for (let init = 0; convert.length - 1 >= init; init++) {
  for (let binit = convert[init].length - 1; binit >= 0; binit--) {
    temp.push(convert[init][binit]);
    if (binit === 0) {
      res.push(temp.join(""));
      temp = [];
    }
  }
}

console.log(res.join(" "));
