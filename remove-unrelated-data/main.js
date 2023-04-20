function removeUnrelated(object, key) {
  let result = {};
  result = object;
  const kunci = key;

  delete result[kunci];
  return result;
}

console.log(
  removeUnrelated(
    {
      name: "Edo",
      age: 20,
      address: "Jakarta",
      hobbies: ["coding", "reading"],
    },
    "address"
  )
);
// hasil
// { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }
