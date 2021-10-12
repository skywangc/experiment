function son() {
    this.name = "儿子";
  }
  
  function father() {
    this.name = "父亲";
    this.age = 52
  }
  
  son.prototype = new father()

  son.prototype.test = 123;
  
  const one = new son();
  
  const two = new father();
  
  console.log("one", one);
  console.log("two", two);