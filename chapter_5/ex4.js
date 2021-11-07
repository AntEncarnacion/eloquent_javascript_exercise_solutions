require("./code/load")(
  "code/scripts.js",
  "code/chapter/05_higher_order.js",
  "code/intro.js"
);

function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.length;

  if (total == 0) {
    return "No scripts found";
  } else if (total == 1) {
    return scripts[0].name;
  }
  return scripts.reduce((max, script) =>
    max.count > script.count ? max.name : script.name
  );
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
