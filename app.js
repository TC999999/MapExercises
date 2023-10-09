//Exercise 1: doubleValuesWithMap
function doubleValuesWithMap(arr) {
  let doubles = arr.map(function (val) {
    return val * 2;
  });
  return doubles;
}

//Exercise 2: valTimesIndex
function valTimesIndex(arr) {
  let idx = arr.map(function (val, i) {
    return val * i;
  });
  return idx;
}

//Exercise 3: extractKey
function extractKey(objArr, key) {
  let noKey = objArr.map(function (obj) {
    return obj[key];
  });
  return noKey;
}

//Exercise 4: extractFullName
function extractFullName(objArr) {
  let fullName = objArr.map(function (name) {
    return `${name.first} ${name.last}`;
  });
  return fullName;
}
