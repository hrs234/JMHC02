let secrete = a => {
  if (a.length >= 1000) {
    return "ERROR: karakter melebihi dari 1000 karakter";
  }
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
  return res.join(" ");
};

console.log(secrete("italem irad irigayaj"));
console.log(secrete("iadab itsap ulalreb"));
console.log(secrete("nalub kusutret gnalali"));
