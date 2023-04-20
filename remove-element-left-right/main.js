function removeLeftRight(arr, position) {
  let result = [];
  result = arr;

  if (position === "right") {
    result.pop(arr);
  } else {
    result.shift(arr);
  }
  return result;
}

console.log(removeLeftRight([1, 2, 3, 4, 5], "left"));
console.log(removeLeftRight([1, 2, 3, 4, 5], "right"));
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], "left"));
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], "right"));

// hasil
/**
[ 2, 3, 4, 5 ]
[ 1, 2, 3, 4 ]
[ 'Budi', 'Joko', 'Tono' ]
[ 'Edo', 'Budi', 'Joko' ]
 */
