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
  appendKitten(name);
  return kittens;
}

function prependKitten(name) {
  var prepKit = prependKittens(name);
  return kittens;
}