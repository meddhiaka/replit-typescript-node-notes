function closuresExample(e: string) {
  
  const myName = "Mohamed Dhia";
  
  function displayMyName() {
    console.log(myName);
  }

  function displayParamE() {
    console.log(e);
  }
  
  return {
    displayMyName,
    displayParamE
  }
}


export default function switchClosuresHighOrderFuns() {
  // Closures
  const closer = closuresExample("test");
  closer.displayMyName();
  closer.displayParamE();
  
  // ####################################
  // ####################################

  const T = [1, 2, 3, 4];
  const mapResult = T.map(e => e ** 2);
  const mapResult2 = T.map((e, i) => e+(i+1));
  console.log("Map high order function");
  console.log("T: ", T);
  console.log("Mapped T: ", mapResult);
  console.log("Mapped T2: ", mapResult2);

  console.log("");
  
  console.log("Filter high order function");
  const filterResult = T.filter(e => e % 2 !== 0);
  console.log("Filtered T: ", filterResult);
  
  console.log("");
  
  console.log("Reduce high order function");
  const reduceResult = T.reduce((sum, e) => {
    return sum + e;
  }, 10);
  console.log("Reduced T: ", reduceResult);

  console.log("");

  console.log("Switch statment :");
  const e: 1 | 0 = 0;
  switch(e) {
    case 1:
      console.log("1");
      break;
    case 0:
      console.log("0");
      break;
    default:
      console.log("IDK");
  }
}