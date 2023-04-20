function addMoreData(object, key, value) {
  let result = {};
  const lokasi = key;
  result = object;
  result[lokasi] = value;

  return result;
}
console.log(addMoreData({ name: "Edo", age: 20 }, "address", "Jakarta"));
// hasil:
// { name: 'Edo', age: 20, address: 'Jakarta' }
