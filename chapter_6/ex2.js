class Group {
  constructor() {
    this.group = [];
  }
  add(value) {
    if (this.group.indexOf(value) < 0) {
      this.group.push(value);
    }
  }
  delete(value) {
    if (this.group.indexOf(value) >= 0) {
      this.group.splice(this.group.indexOf(value), 1);
    }
  }
  has(value) {
    return this.group.indexOf(value) >= 0;
  }
  static from(obj) {
    let g = new Group();
    for (let val of obj) {
      g.add(val);
    }
    return g;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
