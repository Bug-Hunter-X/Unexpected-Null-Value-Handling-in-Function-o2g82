function foo(a, b) {
  if (a === null || b === null) {
    return null; //Incorrect handling of null values
  }
  return a + b; 
}