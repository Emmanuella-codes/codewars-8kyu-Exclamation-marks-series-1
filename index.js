
// Write Javascript code!
function remove (string) {
  //coding and coding....
  
  return string.endsWith("!") ? string.slice(0, -1) : string ;
}

console.log(remove("Hi!"))
console.log(remove("Hi"))

