async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Async Function 1");
  }
  
  async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Async Function 2");
  }
  
  async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Async Function 3");
  }
  
  async function asyncFunction4() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async Function 4");
  }
  
  async function executeFunctions() {
    const fourthFunctionPromise = asyncFunction4();
  
    await fourthFunctionPromise;
  
    await Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
  }
  
  executeFunctions();
  