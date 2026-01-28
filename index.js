// Initial array
const cats = ["Milo", "Otis", "Garfield"];

// **Destructive Methods** (modify the original array)

// Add cat to the end
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Add cat to the beginning
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Remove last cat
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Remove first cat
function destructivelyRemoveFirstCat() {
  cats.shift();
}


// **Non-destructive Methods** (return a new array, original stays intact)

// Add cat to the end
function appendCat(name) {
  return [...cats, name];
}

// Add cat to the beginning
function prependCat(name) {
  return [name, ...cats];
}

// Remove last cat
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Remove first cat
function removeFirstCat() {
  return cats.slice(1);
}
// Write your solution here!
