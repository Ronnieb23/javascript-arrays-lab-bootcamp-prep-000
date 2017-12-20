const app = "I don't do much.";

function destructivelyAppendKitten(name) {
 var kitOnEnd = kittens.push(name);
 return kitOnEnd;
}

function destructivelyPrependKitten(name) {
  var kitOnFront = kittens.unshift(name);
  return kitOnFront;
}

function destructivelyRemoveLastKitten() {
  var removeLastKitten = kittens.pop();
  return removeLastKitten;
}

function destructivelyRemoveFirstKitten() {
  var removeFirstKitten = kittens.shift();
  return removeFirstKitten;
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}