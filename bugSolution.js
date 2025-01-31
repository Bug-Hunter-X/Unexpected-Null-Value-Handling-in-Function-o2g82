function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Return 0 instead of null
  }
  return a + b; 
}
//Alternative solution that uses optional chaining
function foo(a, b) {
  return (a ?? 0) + (b ?? 0);
}