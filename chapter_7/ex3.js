require("./code/load")(
  "code/chapter/07_robot.js"
);

class PGroup {
  constructor(val) {
    this.arr = val;
  }
  add(value) {
    if (!this.has(value)) {
      return new PGroup([...this.arr, value]);
    }
  }
  delete(value) {
    if (this.has(value)) {
      return new PGroup(this.arr.filter(a => a != value));
    }
  }
  has(value) {
    return this.arr.indexOf(value) >= 0;
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false