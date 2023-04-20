function addNewElementUpDown(array, element, position) {
  let result = [];
  result = array;

  if (position === "up") {
    result.unshift(element);
  } else {
    result.push(element);
  }
  return result;
}

console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, "up"));
console.log(addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", "up"));
console.log(
  addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", "down")
);

// hasil
// [ 6, 1, 2, 3, 4, 5 ]
// [ 'Rudi', 'Edo', 'Budi', 'Joko', 'Tono' ]
// [ 'Edo', 'Budi', 'Joko', 'Tono', 'Rudi' ]
