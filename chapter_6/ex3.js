class Group {
    constructor() {
      this.arr = [];
    }
    add(value) {
      if (this.arr.indexOf(value) < 0) {
        this.arr.push(value);
      }
    }
    delete(value) {
      if (this.arr.indexOf(value) >= 0) {
        this.arr.splice(this.arr.indexOf(value), 1);
      }
    }
    has(value) {
      return this.arr.indexOf(value) >= 0;
    }
    static from(obj) {
      let g = new Group();
      for (let val of obj) {
        g.add(val);
      }
      return g;
    }
    [Symbol.iterator](){
        return new GroupIterator(this);
    }
  }

  class GroupIterator{
      constructor(group){
        this.arr = group.arr;
        this.i = 0;
      }
      next(){
          if(this.i == this.arr.length) return {done: true};

          let value = this.arr[this.i];

          this.i++;

          return {value, done: false};
      }
  }



for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c